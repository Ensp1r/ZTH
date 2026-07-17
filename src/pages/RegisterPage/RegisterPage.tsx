import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { type JSX, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { sendSmsCode, verifySmsCode } from '../../api/auth';
import { Input } from '../../components/ui';
import { type CodeFormInputs, codeSchema, type PhoneFormInputs, phoneSchema } from '../../utils/validations';
import styles from './RegisterPage.module.css';



export const RegisterPage = (): JSX.Element => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [step, setStep] = useState<'phone' | 'code'>('phone');
    const [savedPhone, setSavedPhone] = useState('');
    const [countdown, setCountdown] = useState(0);

    const phoneForm = useForm<PhoneFormInputs>({ resolver: zodResolver(phoneSchema) });
    const codeForm = useForm<CodeFormInputs>({ resolver: zodResolver(codeSchema) });

    useEffect(() => {
        let timerId: ReturnType<typeof setInterval>;
        
        if (step === 'code' && countdown > 0) {
            timerId = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
        }
        
        return () => clearInterval(timerId);
    }, [step, countdown]);

    const sendMutation = useMutation({
        mutationFn: (data: PhoneFormInputs) => sendSmsCode(data),
        onSuccess: (_, variables) => {
            const cleanPhone = variables.phone.replace(/[^\d+]/g, '');
            setSavedPhone(cleanPhone);
            setStep('code');
            setCountdown(60);
        }
    });

    const verifyMutation = useMutation({
        mutationFn: (data: CodeFormInputs) => verifySmsCode({
            phone: savedPhone,
            code: data.code
        }),
        onSuccess: (data) => {
            queryClient.setQueryData(['user'], data.user);
            navigate('/profile');
        },
        onError: () => {
            codeForm.setError('code', { message: 'Неверный код' });
        }
    });

    const handleResend = () => {
        sendMutation.mutate({ phone: savedPhone });
    };

    return (
        <div className={styles.container}>
            {step === 'phone' ? (
                /* ШАГ 1: Ввод номера телефона */
                <form 
                    onSubmit={phoneForm.handleSubmit((data) => {
                        const cleanPhone = data.phone.replace(/[^\d+]/g, '');
                        sendMutation.mutate({ phone: cleanPhone });
                    })} 
                    className={styles.form}
                >
                <h1 className={styles.title}>Регистрация</h1>
                    <div className={styles.inputs}>
                        <Input 
                            type="tel"
                            placeholder="Номер телефона"
                            className={styles.emailInput} 
                            {...phoneForm.register('phone')}
                            error={phoneForm.formState.errors.phone}
                        />
                    </div>
                    <button type="submit" className={styles.submitBtn} disabled={sendMutation.isPending}>
                        {sendMutation.isPending ? 'Отправка...' : 'Получить код'}
                    </button>
                </form>
            ) : (
                /* ШАГ 2: Ввод кода из СМС */
                <form 
                    onSubmit={codeForm.handleSubmit((data) => verifyMutation.mutate(data))} 
                    className={styles.form}
                >
                    <h1 className={styles.title}>Введите код</h1>
                    <p className={styles.subtitle}>Код отправлен на {savedPhone}</p>
                    <div className={styles.inputs}>
                        <Input 
                            type="text"
                            placeholder="Код из СМС (моке: 0000)"
                            className={styles.emailInput} 
                            {...codeForm.register('code')}
                            error={codeForm.formState.errors.code}
                        />
                    </div>
                    <button type="submit" className={styles.submitBtn} disabled={verifyMutation.isPending}>
                        {verifyMutation.isPending ? 'Проверка...' : 'Подтвердить'}
                    </button>
                    
                    {/* Блок с таймером и кнопкой повторной отправки */}
                    <div className={styles.actionsWrapper}>
                        {countdown > 0 ? (
                            <span className={styles.timerText}>Запросить повторно через {countdown} сек</span>
                        ) : (
                            <button 
                                type="button" 
                                onClick={handleResend}
                                disabled={sendMutation.isPending}
                                className={styles.resendBtn}
                            >
                                {sendMutation.isPending ? 'Отправляем...' : 'Отправить код повторно'}
                            </button>
                        )}

                        <button 
                            type="button" 
                            onClick={() => setStep('phone')} 
                            className={styles.changeNumberBtn}
                        >
                            Изменить номер
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { JSX } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../api/auth"
import { Input } from "../../components/ui"
import { loginSchema, type LoginFormInputs } from "../../utils/validations"
import styles from './LoginPage.module.css'


export const LoginPage = (): JSX.Element => {
    const navigate = useNavigate()
    const queryClient = useQueryClient();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema)
    })

    const loginMutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            console.log('Успешный вход!', data);
            // Тут будем сохранять токен
            queryClient.invalidateQueries({ queryKey: ['user'] })
            navigate('/Profile'); // Редирект на главную
        },
        onError: (error) => {
            console.error('Ошибка входа', error);
        }
    })

    const onSubmit = (data: LoginFormInputs) => {
        loginMutation.mutate(data)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <h1 className={styles.title}>Вход в аккаунт</h1>

                <div className={styles.inputs}>
                    <Input 
                        type='email'
                        placeholder='Email'
                        className={styles.emailInput}
                        {...register('email')}
                        error={errors.email}
                    />

                    <Input 
                        type='password'
                        placeholder='Пароль'
                        className={styles.passwordInput}
                        {...register('password')}
                        error={errors.password}
                    />
                </div>

                <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={loginMutation.isPending}
                >
                    {loginMutation.isPending ? 'Загрузка...' : 'Войти'}
                </button>
            </form>
        </div>
    )
}
import type { RegisterFirstStep, RegisterSecondStep } from '../types/register';
import type { User } from '../types/user';
import type { LoginFormInputs } from '../utils/validations';
import { setAccessToken } from './apiClient';

// 1. Функция логина
export const loginUser = async (data: LoginFormInputs): Promise<{ user: User }> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const mockToken = 'mock-access-token-123';
            setAccessToken(mockToken); 
            
            // Сохраняем токен
            localStorage.setItem('temp_mock_token', mockToken); 
            
            // Сохраняем введенный email (или любые другие данные), чтобы getMe их "вспомнил"
            localStorage.setItem('temp_mock_email', data.email); 
            
            resolve({ 
                user: { id: 1, name: 'Вадим', email: data.email, role: 'user' } 
            });
        }, 1000);
    });
};

// 2. Функция проверки пользователя
export const getMe = async (): Promise<User> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const token = localStorage.getItem('temp_mock_token');
            
            if (token) {
                // Достаем сохраненный email из локального хранилища. 
                // Если по какой-то причине его там нет, подставим дефолтный.
                const savedEmail = localStorage.getItem('temp_mock_email') || 'test@test.ru';
                
                resolve({ 
                    id: 1, 
                    name: 'Вадим', // Имя пока оставляем захардкоженным, так как при логине вводится только email
                    email: savedEmail, 
                    role: 'user' 
                });
            } else {
                reject(new Error('Не авторизован'));
            }
        }, 800);
    });
};

// Отправка телефона
// export const sendSmsCode = async (data: RegisterFirstStep): Promise<{ status: string }> => {
//     // В реальности: await apiClient.post('/auth/register/send', data);
//     return new Promise((resolve) => setTimeout(() => resolve({ status: 'ok' }), 1000));
// };

// // Проверка кода и завершение регистрации
// export const verifySmsCode = async (data: RegisterSecondStep): Promise<{ user: User }> => {
//     // В реальности: await apiClient.post('/auth/register/verify', data);
//     return new Promise((resolve) => setTimeout(() => {
//         resolve({ user: { id: 2, name: 'Новый Студент', email: '...', role: 'user' } });
//     }, 1000));
// };

export const sendSmsCode = async (data: RegisterFirstStep): Promise<{ success: boolean }> => {
    console.log(data)
    return new Promise((resolve) => {
        // Имитируем запрос на бэкенд (1 секунда)
        setTimeout(() => resolve({ success: true }), 1000);
    });
};

// 2. Проверка СМС и успешная регистрация
export const verifySmsCode = async (data: RegisterSecondStep): Promise<{ user: User }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Для мока: пускай "правильным" кодом всегда будет '0000'
            if (data.code === '0000') {
                const mockToken = 'mock-access-token-777';
                setAccessToken(mockToken);
                localStorage.setItem('temp_mock_token', mockToken);
                
                resolve({
                    user: { id: 2, name: 'Вадим', email: '', role: 'user' }
                });
            } else {
                reject(new Error('Неверный код'));
            }
        }, 1000);
    });
};
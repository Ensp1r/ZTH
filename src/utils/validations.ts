import { z } from 'zod';

export const loginSchema = z.object({
    email: z.email('Введите корректный email'),
    password: z.string().min(6, 'Пароль должен содержать минимум 6 символов')
})

export const phoneSchema = z.object({
    phone: z.string()
        .regex(/^\+?[0-9\s\-()]{7,20}$/, 'Введите корректный номер телефона')
        .refine((val) => {
            const digitsOnly = val.replace(/\D/g, '');
            return digitsOnly.length >= 7 && digitsOnly.length <= 15;
        }, 'Номер должен содержать от 7 до 15 цифр')
});

export type LoginFormInputs = z.infer<typeof loginSchema>
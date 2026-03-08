import {
	registerSchema,
	register as registerUser,
	type RegisterFormData
} from '@/features/auth'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styles from './RegisterForm.module.scss'

export const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful }
	} = useForm<RegisterFormData>({
		resolver: zodResolver(registerSchema)
	})

	const onSubmit = async (data: RegisterFormData) => {
		await registerUser(data)
	}

	return (
		<form className={styles['register-form']} onSubmit={handleSubmit(onSubmit)}>
			<Input
				id='username'
				label='Username'
				error={errors.username?.message}
				{...register('username')}
			/>
			<Input
				id='email'
				label='Email'
				type='email'
				error={errors.email?.message}
				{...register('email')}
			/>
			<Input
				id='password'
				label='Password'
				type='password'
				error={errors.password?.message}
				{...register('password')}
			/>
			<Input
				id='confirmPassword'
				label='Confirm Password'
				type='password'
				error={errors.confirmPassword?.message}
				{...register('confirmPassword')}
			/>

			{isSubmitSuccessful && (
				<span className={styles['register-form__success']}>
					Registered successfully!
				</span>
			)}

			<Button type='submit' loading={isSubmitting}>
				Sign Up
			</Button>
		</form>
	)
}

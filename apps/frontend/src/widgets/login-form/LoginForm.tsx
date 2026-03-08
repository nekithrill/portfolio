import { login, type LoginFormData, loginSchema } from '@/features/auth'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styles from './LoginForm.module.scss'

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful }
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema)
	})

	const onSubmit = async (data: LoginFormData) => {
		await login(data)
	}

	return (
		<form className={styles['login-form']} onSubmit={handleSubmit(onSubmit)}>
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

			{isSubmitSuccessful && (
				<span className={styles['login-form__success']}>
					Logged in successfully!
				</span>
			)}

			<Button type='submit' loading={isSubmitting}>
				Sign In
			</Button>
		</form>
	)
}

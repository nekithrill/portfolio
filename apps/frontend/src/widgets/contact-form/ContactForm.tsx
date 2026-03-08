import { sendContactForm, type ContactFormData } from '@/features/send-message'
import { contactFormSchema } from '@/features/send-message/schema'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Textarea } from '@/shared/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styles from './ContactForm.module.scss'

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema)
	})

	const onSubmit = async (data: ContactFormData) => {
		await sendContactForm(data)
		reset()
	}

	return (
		<form className={styles['contact-form']} onSubmit={handleSubmit(onSubmit)}>
			<Input
				id='name'
				label='Name'
				error={errors.name?.message}
				{...register('name')}
			/>
			<Input
				id='email'
				label='Email'
				type='email'
				error={errors.email?.message}
				{...register('email')}
			/>
			<Textarea
				id='message'
				label='Message'
				error={errors.message?.message}
				{...register('message')}
			/>

			{isSubmitSuccessful && (
				<span className={styles['contact-form__success']}>
					Message sent successfully!
				</span>
			)}

			<Button type='submit' loading={isSubmitting}>
				Send
			</Button>
		</form>
	)
}

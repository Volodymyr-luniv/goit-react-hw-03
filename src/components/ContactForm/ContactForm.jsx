import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
	const validationSchema = Yup.object({
		name: Yup.string()
			.min(3, "Name must be at least 3 characters")
			.max(50, "Name must be less than 50 characters")
			.required("Required"),
		number: Yup.string()
			.min(3, "Number must be at least 3 characters")
			.max(50, "Number must be less than 50 characters")
			.required("Required"),
	});

	const handleSubmit = (values, { resetForm }) => {
		const contactWithId = { ...values, id: nanoid() };
		addContact(contactWithId);
		resetForm();
	};

	return (
		<Formik
			initialValues={{ name: "", number: "" }}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{() => (
				<Form className={s.form}>
					<label htmlFor="name">Name</label>
					<Field id="name" name="name" type="text" />
					<ErrorMessage
						name="name"
						component="div"
						className={s.error}
					/>

					<label htmlFor="number">Number</label>
					<Field id="number" name="number" type="text" />
					<ErrorMessage
						name="number"
						component="div"
						className={s.error}
					/>

					<button type="submit" className={s.submitButton}>
						Add Contact
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default ContactForm;

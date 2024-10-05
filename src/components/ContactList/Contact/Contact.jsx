import s from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
	return (
		<li className={s.contact}>
			<p>
				<span>{name}</span>
				<span>{number}</span>
			</p>
			<button className={s.btn} onClick={() => onDelete(id)}>
				Delete
			</button>
		</li>
	);
};

export default Contact;

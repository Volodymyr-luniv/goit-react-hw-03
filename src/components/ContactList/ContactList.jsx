import Contact from "./Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
	return (
		<ul className={s.contactList}>
			{contacts.map((contact) => (
				<Contact
					key={contact.id}
					id={contact.id}
					name={contact.name}
					number={contact.number}
					onDelete={onDeleteContact}
				/>
			))}
		</ul>
	);
};

export default ContactList;

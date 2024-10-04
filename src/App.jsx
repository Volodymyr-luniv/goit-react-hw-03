import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import s from "./App.module.css";

const App = () => {
	const initialContacts = [
		{ id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
		{ id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
		{ id: nanoid(), name: "Eden Clements", number: "645-17-79" },
		{ id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
	];

	const savedContacts = JSON.parse(localStorage.getItem("contacts"));
	const [contacts, setContacts] = useState(savedContacts || initialContacts);

	useEffect(() => {
		localStorage.setItem("contacts", JSON.stringify(contacts));
	}, [contacts]);

	const deleteContact = (contactId) => {
		setContacts((prevContacts) =>
			prevContacts.filter((contact) => contact.id !== contactId)
		);
	};

	const addContact = (newContact) => {
		setContacts((prevContacts) => [newContact, ...prevContacts]);
	};

	const [filter, setFilter] = useState("");

	const handleFilterChange = (e) => {
		setFilter(e.target.value);
	};

	const getFilteredContacts = () => {
		return contacts.filter((contact) =>
			contact.name.toLowerCase().includes(filter.toLowerCase())
		);
	};

	const filteredContacts = getFilteredContacts();

	return (
		<div className={s.container}>
			<h1 className={s.headerTitle}>Phonebook</h1>
			<ContactForm addContact={addContact} />
			<SearchBox filter={filter} onFilterChange={handleFilterChange} />
			<ContactList
				onDeleteContact={deleteContact}
				contacts={filteredContacts}
			/>
		</div>
	);
};

export default App;

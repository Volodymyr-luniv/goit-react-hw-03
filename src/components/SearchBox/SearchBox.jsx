import s from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
	return (
		<div className={s.searchBox}>
			<label htmlFor="search">Search Contacts</label>
			<input
				type="text"
				id="search"
				value={filter}
				onChange={onFilterChange}
			/>
		</div>
	);
};

export default SearchBox;

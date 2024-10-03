import Input from "./Input";
import styles from "./SearchBox.module.css";
import useContactsContext from "../../hook/useContactsContext";

function SearchBox() {
  const { state, searchValue, setSearchValue } = useContactsContext();

  const handleSearch = (searchValue) => {
    const matchingContact = state.data.find((item) => {
      return (
        item.name?.toLowerCase().startsWith(searchValue) ||
        item.family?.toLowerCase().startsWith(searchValue)
      );
    });
    // return matchingContact ? matchingContact : null;
    return matchingContact || null;
  };

  const changeHandler = (event) => {
    const searchValue = event.target.value?.toLowerCase();
    if (!searchValue) return setSearchValue("Search Name or Family");
    const suggestedName = handleSearch(searchValue);
    if (suggestedName) {
      const isSearchingForFamily =
        suggestedName &&
        suggestedName.family?.toLowerCase().startsWith(searchValue);
      const result = isSearchingForFamily
        ? suggestedName.family
            ?.toLowerCase()
            .replace(searchValue, event.target.value)
        : suggestedName.name
            ?.toLowerCase()
            .replace(searchValue, event.target.value);
      setSearchValue(result);
    }
  };

  return (
    <div className={styles.container}>
      <Input hint={searchValue} changeHandler={changeHandler} />
    </div>
  );
}

export default SearchBox;

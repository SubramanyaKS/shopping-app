/* eslint-disable react/prop-types */

import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { useProductSearch } from '../contexts/ProductSearchContext';
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const { searchState, searchDispatch } = useProductSearch();
  const navigate = useNavigate();

const handleSearch = (e) => {
  searchDispatch({ type: 'UPDATE_SEARCH_TERM', payload: e.target.value });
  navigate("/search");
};
  return (
    <InputGroup className="search-bar mx-auto">
      <FormControl
        placeholder="Search..."
        aria-label="Search"
        aria-describedby="basic-addon2"
        className="search-input"
        value={searchState.searchTerm}
        onChange={(e) => handleSearch(e)}
        // onChange={(e) => dispatch({ type: 'UPDATE_SEARCH', payload: e.target.value })}
      />
      <Button  variant="light" className="search-button">
          <Search color="black" />
        </Button>
      {/* <InputGroup>
        
      </InputGroup> */}
    </InputGroup>
  );
};

export default SearchBar;

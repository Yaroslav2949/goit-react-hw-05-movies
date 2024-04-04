const SearchBar = ({  onSubmitSearchBar }) => {
  return (
    <form onSubmit={onSubmitSearchBar}>
      <input
        type="text"
        name="query"
        placeholder="Search movies"
        
       
      />

      <button type="submit">Searh Movie</button>
    </form>
  );
};
export default SearchBar;

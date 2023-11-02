import { AppContext } from "./ContextProvider";

function SearchPost() {
  const { searchQuery, setSearchQuery } = AppContext();

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

export default SearchPost;

import { AppContext } from "./ContextProvider";
import NumberOfPost from "./NumberOfPost";
import SearchPost from "./SearchPost";

function BlogHeader() {
  const { handleClearPosts } = AppContext();

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <NumberOfPost />
        <SearchPost />
        <button onClick={handleClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default BlogHeader;

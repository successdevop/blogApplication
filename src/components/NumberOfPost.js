import { AppContext } from "./ContextProvider";

function NumberOfPost() {
  const { posts } = AppContext();

  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default NumberOfPost;

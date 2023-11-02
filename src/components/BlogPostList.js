import { AppContext } from "./ContextProvider";

function BlogPostList() {
  const { searchedPosts } = AppContext();

  return (
    <ul>
      {searchedPosts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default BlogPostList;

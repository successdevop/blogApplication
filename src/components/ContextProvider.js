import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";

// creating random post function
function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

// context provider
const PostContext = createContext();

// context component
function ContextProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        searchQuery,
        setSearchQuery,
        searchedPosts,
        handleAddPost,
        handleClearPosts,
        createRandomPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
export default ContextProvider;

export const AppContext = () => useContext(PostContext);

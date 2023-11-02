import { useEffect, useState } from "react";
import ContextProvider from "./components/ContextProvider";
import BlogHeader from "./components/BlogHeader";
import Blog from "./components/Blog";
import ArchivedPost from "./components/ArchivedPost";
import Footer from "./components/Footer";

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      <ContextProvider>
        <BlogHeader />
        <Blog />
        <ArchivedPost />
        <Footer />
      </ContextProvider>
    </section>
  );
}

export default App;

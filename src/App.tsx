import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import AboutPage from "./pages/about";
import { Header } from "./components/ui/content/Header";
import { Footer } from "./components/ui/content/Footer";
import { Contact } from "./pages/contact";
import Posts from "./pages/posts";
import Post from "./pages/posts/id";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

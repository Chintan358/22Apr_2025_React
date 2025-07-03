import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import PostcontextProvider from "./store/PostContext";

const App = () => {
  return (
    <>
    <PostcontextProvider>
      <Header></Header>
      <div className="d-flex">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </PostcontextProvider>
    </>
  );
};

export default App;

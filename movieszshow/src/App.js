import { Outlet } from "react-router";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <main>
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;

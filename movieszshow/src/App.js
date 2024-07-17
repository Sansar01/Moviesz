import { Outlet } from "react-router";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MobileNavigation from "./component/MobileNavigation";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {

    const fetchTrendingmovies = async () => {
      const response = await axios.get("/trending/all/week");

      console.log("move ", response);
    };

    fetchTrendingmovies();
  }, []);

  return (
    <main className="pb-14 lg:pb-0">
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  );
}

export default App;

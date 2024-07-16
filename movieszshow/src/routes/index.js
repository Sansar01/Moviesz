import {BrowserRouter,Route,Routes} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";
import Detail from "../pages/Detail";
import SearchPage from '../pages/SearchPage'

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path=":explore" element={<ExplorePage />} />
          <Route path=":explore/:id" element={<Detail />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Index

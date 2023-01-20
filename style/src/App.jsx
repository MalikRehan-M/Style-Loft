
import Footer from "./Components/Footer";
import CategoryBar from "./Components/Navbar/CategoryBar";
import SearchBar from "./Components/Navbar/SearchBar";
import Topbar from "./Components/Navbar/TopBar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <SearchBar/>
      <CategoryBar/>
      <AllRoutes/>
      <Footer />
    </div>
  );
}

export default App;

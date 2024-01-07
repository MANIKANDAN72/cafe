import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Menu from "./Components/Our Menu/Menu";
import Reviews from "./Components/Reviews/Reviews";
import Contacts from "./Components/Contacts/Contacts";
import Reservation from "./Components/Reservation/Reservation";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className=" font-mono text-white">
      <Navbar />
      <Reservation  className=""/>
      <Home />
      <About />
      <Menu />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

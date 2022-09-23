
import './App.css';
import AboutUs from "./pages/aboutUs/AboutUs";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";

function App() {
  return (
    <div className="App">
      <AboutUs/>
        <h1>-----------------------</h1>
      <PortfolioPage/>
        <h1>-----------------------</h1>
      <ContactsPage/>
    </div>
  );
}

export default App;

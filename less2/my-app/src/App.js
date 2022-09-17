
import './App.css';
import UsersPage from "./pages/usersPage/UsersPage";
import {Numbers, Emails} from "./pages/contactsPages/ContactsPages";
import ProductsPage from "./pages/productsPage/ProductsPage";
import AboutUs from "./pages/aboutUs/AboutUs";
// function User ({name, age}) {
//
//   return (
//       <h1>Name: {name}, Age:{age}</h1>
//   )
// }


function App(props) {
    const text = {
        title: "hello",
        subtitle: "lorem lorem lorem"
    }
  return (
    <div className="App">
        <UsersPage name="Asia" age="18"/>
        <Numbers/>
        <Emails/>
      <h1>____________________________</h1>

      {/*<User  name="Asia" age="18"/>*/}
      {/*<User name="Ben" age="16"/>*/}
      {/*  <User name="Ten" age="15"/>*/}

        <ProductsPage/>
        ---------------------------------
        <AboutUs textOne={text}/>

    </div>
  );
}

export default App;

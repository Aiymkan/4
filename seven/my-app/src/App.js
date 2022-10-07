import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PostPage from "./pages/postPage/PostPage";
import AboutUs from "./pages/aboutUs/AboutUs";
import TitlePage from "./pages/titlePage/TitlePage";
import Menu from "./components/menu/Menu";


function App() {

    const info ={title: "my company", text:"lorem bla bla bla"}
  return (
    <div className="App">
      <BrowserRouter>
          <Menu/>
        <Routes>
          <Route path='/' element={<PostPage/>}/>
          <Route path='/about' element={<AboutUs randomText={info}/>}/>
          <Route path='/page' element={<TitlePage/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;


import './App.css';
import ClassComponentOne from "./classComponents/classComponentOne/ClassComponentOne";
import ClassComponentTwo from "./classComponents/classComponentTwo/ClassComponentTwo";
import FunctionComponent from "./functionComponent/FunctionComponent";




function App() {

    const user = {
        name: "Anna",
        age: "19"
    }
  return (
    <div className="App">
        <ClassComponentOne includes={user}/>
        <ClassComponentTwo keep={user}/>
        <FunctionComponent/>


    </div>
  );
}

export default App;

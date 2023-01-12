import './App.css';
import { useState } from "react";
import foods from './foods.json';
import FoodBox from './components/FoodBox';


function App() {
const [ foodList, updateFood ] = useState(foods)


  return (
    <div className="App">
      <h1>Food List</h1>
      {foodList.map(item => {
        return(
        <div>
          <FoodBox food={item}/>
        </div>)
      })}
    </div>
  );
}

export default App;

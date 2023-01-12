import './App.css';
import { useState } from "react";
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
 
  const [ foodList, updateFood ] = useState(foods);
  const [ originalArray, updateOriginal ] = useState(foods);

  return (
    <div className="App">
     <AddFoodForm foodList={foodList} updateFood={updateFood} originalArray={originalArray} updateOriginal={updateOriginal}/>
      <h1>Food List</h1>
      {foodList.map(item => {
        return(
        <div>
          <FoodBox key={item.name} food={item}/>
        </div>)
      })}
    </div>
  );
}

export default App;

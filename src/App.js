import './App.css';
import { useState } from "react";
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import { Row, Divider, Button } from 'antd';

function App() {
 
  const [ foodList, updateFood ] = useState(foods);
  const [ originalArray, updateOriginal ] = useState(foods);
  const [ showForm, setShowForm ] = useState('false');

  return (
    <div className="App">
      <Button onClick={() => setShowForm(!showForm)}> {showForm ? 'Hide Form' : 'Add More Food'} </Button>
      {showForm && <AddFoodForm foodList={foodList} updateFood={updateFood} originalArray={originalArray} updateOriginal={updateOriginal}/>}
      <SearchBar originalArray={originalArray} updateFood={updateFood}/>
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.map(food => {
          return(
          <div>
            <FoodBox key={food.name} food={food} foodList={foodList} updateFood={updateFood}/>
          </div>)
        })}
      </Row>
    </div>
  );
}

export default App;

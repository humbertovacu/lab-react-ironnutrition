import { Divider, Input } from 'antd';
import { useState } from "react";

function AddFoodForm(props){
    
    const { foodList, updateFood, updateOriginal, originalArray } = props;
    const [ name, setName ] = useState('');
    const [ image, setImage ] = useState('');
    const [ calories, setCalories ] = useState('');
    const [ servings, setServings ] = useState('');
    const newFood = {name, image, calories, servings}


    const toggleForm = (e) => {
        e.preventDefault();
        const updatedList = [...foodList, newFood];
        updateFood(updatedList);
        updateOriginal([...originalArray, newFood]);
        setName('');
        setImage('');
        setCalories('');
        setServings('');
      }
    
    return(
      <div>
        <Divider>Add Food Entry</Divider>
        <form onSubmit={toggleForm}>
          <label>Name</label>
          <Input name='name' value={name} type="text" onChange={(event) => setName(event.target.value)} />
          <label>Image</label>
          <Input name='image' value={image} type="text" onChange={(event) => setImage(event.target.value)} />
          <label>Calories</label>
          <Input name='calories' value={calories} type="text" onChange={(event) => setCalories(event.target.value)} />
          <label>Servings</label>
          <Input name='servings' value={servings} type="number" onChange={(event) => setServings(event.target.value)} />
          <button>Add Food</button>
        </form>
      </div>
    )
}

export default AddFoodForm;
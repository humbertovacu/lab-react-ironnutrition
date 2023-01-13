import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
  const { food, foodList, updateFood } = props;

  const deleteFood = (event) => {
    const foodName = event.currentTarget.value;
    const foodListCopy = [...foodList]
    let indexItem = '';
    
    const deletedItems = foodListCopy.map(item => {
     if(item.name === foodName) {
        indexItem = foodListCopy.indexOf(item)
        foodListCopy.splice(indexItem, 1)
     }})
    updateFood(foodListCopy)
  }

 
  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>{food.calories}</p>
        <p>{food.servings}</p>
        <p>
          <b>{(food.calories)*(food.servings)}</b> kcal
        </p>
        <Button value={food.name} onClick={(event) => deleteFood(event)}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;

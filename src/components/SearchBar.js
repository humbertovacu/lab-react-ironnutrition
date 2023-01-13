import { Divider, Input } from 'antd';

function SearchBar(props) {

  const { originalArray, updateFood} = props;
  
  const filterFoods = (event) => {
    const userSearch = event.target.value.toLowerCase()
    const searchResult = originalArray.filter(item => {
      const itemName = item.name.toLowerCase().slice(0, userSearch.length)
      if(itemName === userSearch) return item
    })
    updateFood(searchResult)
  }

  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input type="text" onChange={(event) => {filterFoods(event)}} />
    </>
  );
}

export default SearchBar;
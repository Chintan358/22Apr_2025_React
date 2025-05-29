import { useState } from "react";
import AddFood from "./components/AddFood";
import Title from "./components/Title";
import ListFood from "./components/ListFood";
import Container from "./components/Container";
import Error from "./components/Error";

const App = () => {

  const [foodItems, setFoodItems] = useState([])

  const inputhandler = (e)=>{
    if(e.key=='Enter')
    {   
      setFoodItems([...foodItems,e.target.value]) 
      e.target.value = '';
    }
   
  }

  const deleteelement = (ele)=>{
    setFoodItems(foodItems.filter((e)=>e!=ele))
  }

  return (
    <>
    <Container>
      <Title />
      <AddFood inputhandler={inputhandler}/>
      <Error foodItems={foodItems}></Error>
      <ListFood foodItems={foodItems} deleteelement={deleteelement}/>
    </Container>
   
  </>

  );
}
export default App;
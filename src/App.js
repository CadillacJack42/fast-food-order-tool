import { useState } from 'react';
import './App.css';
import DropDownGen from './DropDownGen';
import OrderName from './OrderName';
import Images from './Images';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [instructions, setInstructions] = useState([]);
  const [orderName, setOrderName] = useState('Valued Customer');
  return (
    <div className="App">
      <Images 
        foodId={foodId}
        drinkId={drinkId}
        sideId={sideId}
      />
      <OrderName setOrderName={setOrderName}/>
      <p>Order for: {orderName}</p>
      <DropDownGen 
        setter={setFoodId}
        value={'food'}
        array={['burger', 'sandwich', 'salad']}
      />
      <DropDownGen 
        setter={setDrinkId}
        value={'drink'}
        array={['soda', 'water', 'juice']}
      />
      <DropDownGen 
        setter={setSideId}
        value={'side'}
        array={['fries', 'soup', 'side salad']}
      />
      
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import DropDownGen from './DropDownGen';

function App() {
  const [foodId, setFoodId] = useState(1);
  // const [sideId, setSideId] = useState(1);
  // const [drinkId, setDrinkId] = useState(1);
  // const [instructions, setInstructions] = useState([]);
  // const [orderName, setOrderName] = useState('Valued Customer');
  return (
    <div className="App">
      <DropDownGen 
        setter={setFoodId}
        value={'food'}
        array={['burger', 'sandwich', 'salad']}
      />
      
    </div>
  );
}

export default App;

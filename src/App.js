import React,{ useEffect } from 'react';
import {getAllPRoducts} from './action/item.action';
import {useSelector,useDispatch} from 'react-redux';
import TableData from './componet/table.componet';
import './App.css';

function App() {
  const itemState = useSelector(state => state.itemReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPRoducts());
  }, []);

  console.log("store",itemState);
  return (
    <div className="App">
      {itemState.items.length>0?
      <TableData data={itemState.items}/>
      :null}
    </div>
  );
}

export default App;

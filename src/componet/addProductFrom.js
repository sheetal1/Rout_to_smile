import React, { useState } from 'react';
  
function AddProductForm(props) {
  const [id , setID] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price,setPrice]= useState('');
  
  const changeID = (event) => {
    setID(event.target.value);
  };

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  
  const changeDescription = (event) => {
    setDescription(event.target.value);
  };

  const changePrice = (event) => {
    setPrice(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
        id,
        title,
        description,
        price
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setID('');
    setTitle('');
    setDescription('');
    setPrice('');
  };
  return (
    <div style={{marginBlock:"20px"}}>
      <label>ID</label>
      <input type="text" value={id} onChange={changeID} /> 
      <label>Title</label>
      <input type="text" value={title} onChange={changeTitle} />
      <label>Description</label>
      <input type="text" value={description} onChange={changeDescription} />
      <label>Price</label>
      <input type="text" value={price} onChange={changePrice} />
      <button onClick={transferValue}> Click Me</button>
    </div>
  );
}
  
export default AddProductForm;
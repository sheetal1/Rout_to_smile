import React, { useState } from 'react';
  
function viewProductForm(product) {
  console.log("view",product);
  return (
    <div>
      <label>ID</label>
      <input type="text" value={id} onChange={changeID} /> 
      <label>Title</label>
      <input type="text" value={title} onChange={changeTitle} />
      <label>Description</label>
      <input type="text" value={description} onChange={changeDescription} />
      <button onClick={transferValue}> Click Me</button>
    </div>
  );
}
  
export default addProductForm;
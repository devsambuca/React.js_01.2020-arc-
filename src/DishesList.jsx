import React from 'react';
import Card from "./components/Card";
import dishes from "./data.json";

function DishesList(props) {
  const [inputValue, setInputValue] = React.useState('')
  return (
    <div className="container">
      <input 
        type="text" 
        className='form-control' 
        placeholder='search dish'
        value = {inputValue}
        onChange = {(e)=>setInputValue(e.target.value)}
      />
        <div className="dishes">
          {dishes
            .filter((obj)=>obj.title.toLowerCase().includes(inputValue.toLowerCase()))
            .map((obj,index)=>(
            <Card
              key = {obj.image}
              image = {obj.image}
              title={obj.title}
              description = {obj.description}
            /> 
          ))}
        </div>
    </div>
  )
}

export default DishesList
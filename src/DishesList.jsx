import Card from "./components/Card";
import dishes from "./data.json";

function DishesList(props) {
  return (
    <div className="container">
      <input type="text" className='form-control' placeholder='search dish'/>
        <div className="dishes">
          {dishes.map((obj,index)=>(
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
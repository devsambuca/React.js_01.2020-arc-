function DishesList(props) {
  return (
    <ul className="dishes">
        {props.dishes.map((obj)=>(
        <div className="card">
          <img className="card-img-top" src= {obj.image} />
          <div className="card-body">
          <h5 className="card-title">{obj.title}</h5>
          <div className="card-text">{obj.description}</div>
          </div>
        </div>))}
      </ul>
  )
}

export default DishesList
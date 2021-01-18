function Card(props) {
  return (
    <div className="card">
      <img className="card-img-top" src= {props.image} alt='pic' />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="card-text">{props.description}</div>
      </div>
    </div>
          )
}

export default Card
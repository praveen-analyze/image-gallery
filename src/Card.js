import './Card.css'
function Card(props) {
  return (
    <div className='card'>
      <img 
        src={props.ImageUrl} 
        alt={props.Title}
         className="card-img"
       
      />
      <div className="card-content">
        <h3>{props.Title}</h3>
        <p>{props.Description}</p>
      </div>
    </div>
  );
}
export default Card
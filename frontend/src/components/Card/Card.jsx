
import './Card.css';

const Card = ({ heading, count, onClick }) => {
  return (

   
    <div className='card-container' onClick={onClick}>
      <h3 className='card-heading'>{heading}</h3>
      <p className='card-count'>{count}</p>
    </div>
   
  );
};

export default Card;
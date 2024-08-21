
import './Card.css';

const Card = ({ heading, count, onClick, src,className }) => {
  return (

   
    <div className={`card-container ${className}`}onClick={onClick}>
      <img src={src} alt="" />
      <h3 className='card-heading'>{heading}</h3>
      <p className='card-count'>{count}</p>
    </div>
   
  );
};

export default Card;
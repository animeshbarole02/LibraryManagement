import './SideBar.css';

import Dash from '../../assets/icons/dashboard.png';
import List from '../../assets/icons/list.png';
import Book from '../../assets/icons/book.png';
import Group from '../../assets/icons/group.png';
import Issuance from '../../assets/icons/reading.png'

const SideBar = () => {

  const handleItemClick = (itemName) => {
    console.log(`${itemName} clicked`);
   
  };
  return (
    <div className='sideBar-div'>


      <div className="dashboard item" onClick={() => handleItemClick('Dashboard')}>
        <img src={Dash} alt="Dashboard Icon" className="icon" />
        <span className="item-text">Dashboard</span>
      </div>

      <div className="categories item" onClick={() => handleItemClick('Categories')}>
        <img src={List} alt="Categories Icon" className="icon" />
        <span className="item-text">Categories</span>
      </div>

      <div className="books item" onClick={() => handleItemClick('Books')}>
        <img src={Book} alt="Books Icon" className="icon" />
        <span className="item-text">Books</span>
      </div>

      <div className="users item" onClick={() => handleItemClick('Users')}>
        <img src={Group} alt="Users Icon" className="icon" />
        <span className="item-text">Users</span>
      </div>

      <div className="issuances item" onClick={() => handleItemClick('Issuances')}>
        <img src={Issuance} alt="Issuances Icon" className="icon" />
        <span className="item-text">Issuances</span>
      </div>
      
    </div>
  )
}

export default SideBar;

import './SideBar.css';

import Dash from '../../assets/icons/dashboard.png';
import List from '../../assets/icons/list.png';
import Book from '../../assets/icons/book.png';
import Group from '../../assets/icons/group.png';

const SideBar = () => {
  return (
    <div className='sideBar-div'>
      <div className="dashboard item">
        <img src={Dash} alt="Dashboard Icon" className="icon" />
        <button className="item-button">Dashboard</button>
      </div>

      <div className="categories item">
        <img src={List} alt="Categories Icon" className="icon" />
        <button className="item-button">Categories</button>
      </div>

      <div className="books item">
        <img src={Book} alt="Books Icon" className="icon" />
        <button className="item-button">Books</button>
      </div>

      <div className="users item">
        <img src={Group} alt="Users Icon" className="icon" />
        <button className="item-button">Users</button>
      </div>
      <div className="users item">
        <img src={'/'} alt="Users Icon" className="icon" />
        <button className="item-button">Issuances</button>
      </div>
    </div>
  )
}

export default SideBar;

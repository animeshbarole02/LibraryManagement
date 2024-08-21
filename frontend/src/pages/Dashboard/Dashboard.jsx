
import './Dashboard.css'
import Navbar, {} from '../../components/Navbar/Navbar'
import SideBar from '../../components/SideBar/SideBar'
import Card from '../../components/Card/Card'
const Dashboard = () => {

    const handleClick = (cardType) => {
      console.log(`${cardType} card clicked`);
    };
  return (
    <div className='dashboard-div'>
  
         <Navbar/>
         <SideBar/>

      

        <div className="cards-div">
           <div className="card-div">
           <Card heading="Books" count={120} onClick={() => handleClick('Books')} />
          </div>
          <div className="card-div">
           <Card heading="Books" count={120} onClick={() => handleClick('Books')} />
          </div>
          <div className="card-div">
           <Card heading="Books" count={120} onClick={() => handleClick('Books')} />
          </div>
          <div className="card-div">
           <Card heading="Books" count={120} onClick={() => handleClick('Books')} />
          </div>
        </div>     



    </div>
  )
}

export default Dashboard
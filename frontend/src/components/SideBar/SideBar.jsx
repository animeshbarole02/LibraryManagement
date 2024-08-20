import './SideBar.css'
import Logo from '../../assets/icons/R.png';

const SideBar = () => {
  return (
    <div className='SideBar-div'>

        <div className="logo">
            <div className="logo-img">
            <img src={Logo} alt="logo-img" />

            </div>
            <div className="logo-txt">
             <p>eadify</p>
            </div>
        </div>

        <div className="dashboard">

        </div>

        <div className="categories">

        </div>

        <div className="books">

        </div>
        <div className="Users">

        </div>

    </div>
  )
}

export default SideBar

import Logo from '../../assets/icons/R.png';
import User from '../../assets/icons/user.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-div">

         <div className="logo">
             
           <div className="logo-img"> 

             <img src={Logo} alt="logo-img" />
             
           </div>

           <div className='logo-text'>
               <p>eadify</p>
           </div> 

         </div>

      

         <div className="header">
             
              

            

               <div className="user-name">
                    
                  
                     <img src={User} alt=''></img>
                    
                     <p>Welcome Animesh !</p><br></br>

               </div>
    

               <div className="logout-button">
                    <button>Logout</button>
               </div>

        </div>

    </div>
  )
}

export default Navbar
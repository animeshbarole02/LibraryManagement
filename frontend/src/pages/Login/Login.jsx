
import { useState } from 'react'

 import LibraryLogo from '../../assets/icons/WithoutBorder.png'
import './Login.css'
import Button from '../../components/Button/Button'
const Login = () => {
   
 const[isAdmin , setIsAdmin] = useState(true);


 const handleUserTypeChange = (type) => {
    setIsAdmin(type==='ADMIN');
 }



  return (

   <div className="outline-div"> 
    <div className='login-div'>
          
         <div className="left-page">
          <div className="input-div">

            <div className="text">

                <h2>Log in</h2>
             

            </div>

            <div className='choose' >
            <Button
                text="Admin"
                active={isAdmin}
                onClick={() => handleUserTypeChange('ADMIN')}
              />
              <Button
                text="User"
                active={!isAdmin}
                onClick={() => handleUserTypeChange('USER')}
              />
            </div>

            <div className="form">

            <form>
                <div className="form-group">
      
                    <label htmlFor="username">
                    {isAdmin ? 'Username' : 'Enter Mobile Number'}
                        </label>
                    <input 
                    type={isAdmin ? 'text' : 'tel'} 
                    id="username" 
                    name="username" 
                    placeholder={isAdmin ? 'Enter your username' : 'Enter your mobile number'} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />
                </div>
                <div className="form-group button-div">

                  <Button 
                  text = "Login"
                  className="login-btn"
                  />
                    
                </div>
            </form>

           
            </div>

            
          </div>
        </div> 


        <div className="vertical-line">

        </div>  
       
        <div className="right-page">
          <div className="img-div">

          <div className="text">
                    <h2>Library Management Portal</h2> 
                    <p>Your gateway to a world of knowledge. Manage your library account, explore our extensive collection, and keep track of your reading journey all in one place. </p> 
               </div>

               <div className="icon">
                     <img src={LibraryLogo} alt="Library Logo" />
               </div>

            

          </div>
        </div>   
          
    </div>

    </div> 
  )
}

export default Login
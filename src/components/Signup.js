import { FaGoogle } from "react-icons/fa";
import { useNavigate} from "react-router-dom";
import signup from '../img/signup.png';
import './signup.css';
import { useState} from "react";
import { toast } from "react-toastify";
function Signup({changeauthenticate}){
    const navigate=useNavigate();
    const[btn,changebtn]=useState(null);
    function studentHandler(){
    console.log("hello");
     changebtn("student");
    }
    function instructorHandler(){
        changebtn("instructor");
    }

    function signupHandlder(event){
     event.preventDefault();
     toast.success("Login Successfully");
     changeauthenticate(true);
     navigate('/');
    }
    return(
        <div className="signup">
             <div className="signup_body">
                <div className="left_signup">
                    <div className="main_heading">
                        <h2>Join the millions learning to code with StudyNotion for free</h2>
                    </div>
                    <div className="signup_para">
                        <p>Build skills for today, tomorrow, and beyond.</p>
                        <p>Education to future-proof your career.</p>
                    </div>

                    <div className="button_switch">
                        <button onClick={studentHandler} className={btn==="student"?("btnactive"):("")}>Student</button>
                        <button onClick={instructorHandler} className={btn==="instructor"?("btnactive"):("")}>Instructor</button>
                    </div>

                    <form className="signup_form" onSubmit={signupHandlder}>
                        <div className="name_signup">
                     <div className="signup_firstname">
                        <label>First Name:</label>
                        <input type="text" placeholder="Enter First Name" required></input>
                     </div>

                     <div className="signup_lastname">
                        <label>Last Name:</label>
                        <input type="text" placeholder="Enter Last Name" required></input>
                     </div>
                     </div>
                   
                     <div className="email_pass">
                     <div className="signup_email">
                        <label>Email Address:</label>
                        <input type="email" placeholder="Enter your email" required></input>
                     </div>

                     <div className="signup_password">
                        <label>Password:</label>
                        <input type="password" placeholder="Enter your password" required></input>
                     </div>
                     </div>

                     <div className="btnsignup">
                        <button>Create Account</button>
                     </div>
                     
                    </form>

                

                  <div className="signupgoogle">
                    <button><FaGoogle/> Sign in with Google</button>
                  </div>
                    
                </div>

                <div className="right_signup">
                <img src={signup} alt="signup"></img>
                </div>
             </div>
        </div>
    )
    }
    export default Signup;
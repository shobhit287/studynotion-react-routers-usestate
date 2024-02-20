import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import login from '../img/login.png';
import { toast } from "react-toastify";
import './login.css';
function Login({changeauthenticate}){
    const navigate=useNavigate();
    function signupHandler(event){
    event.preventDefault();
    toast.success("Logged in Successfully");
    changeauthenticate(true);
    navigate("/");
    }
    return(
        <div className="login">
            <div className="login_details">
                <div className="left_login">
                 <h2>Welcome Back</h2>
                 <div className="heading_login">
                    <p>Build skills for today, tomorrow, and beyond.</p>
                    <p className="p2">Education to future-proof your career.</p>
                 </div>
                 <form onSubmit={signupHandler}>
                    <div className="email">
                    <label>Email Address:</label>
                    <input type="email" placeholder="Enter Your Email Address" required></input>
                    </div>
                    <div className="password">
                    <label>Password:</label>
                    <input type="password" id="passwordField" placeholder="Enter  Password" required></input>
                    <a href="/login">Forgot Password</a>
                    </div>
                    <div className="button">
                   <button className="loginbtn">Login</button>
                   </div>
                  </form>

                  <div className="or">
                    <div className="line1"></div>
                    <p>OR</p>
                    <div className="line2"></div>
                  </div>

                  <div className="signgoogle">
                    <button><FaGoogle/> Sign in with Google</button>
                  </div>
                </div>
                <div className="right_login">
                   <img src={login} alt="login"></img>
                </div>
            </div>
        </div>
    )
    }
    export default Login;
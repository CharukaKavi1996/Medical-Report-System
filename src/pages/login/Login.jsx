import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="login">
      <div
        className="loginWrapper"
        style={{
          backgroundImage: `url(${PF + "backgrund.jpg"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="loginLeft">
          <form className="loginBox" >
            <span className="SignInName">Sign In Now.</span>
            <div className="tabbutton">
            <button className="loginButton" >
            
            "Sign In"
          
        </button>
        <button className="loginButton" >
            
            "Sign In"
          
        </button>
            </div>
            <span className="details">Enter your details below.</span>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
             
            />

            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              
            />
            <button className="loginButton" >
            
                "Sign In"
              
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <div className="loginRegister">
              <span className="notamem">Not a member?</span>
              <Link to={"/register"}>
                <button className="loginRegisterButton" >
               
                  Create a New Account
                </button>
              </Link>
            </div>
            <div className="Logodiv">
             
              {/* <div className="LogoName">
                <span className="loginLogo">SL GUIDER</span>
                <span className="details">
                  Share Your Taveling Idea With Friends
                </span>
              </div> */}
            </div>
          </form>
        </div>
        <div className="loginRight">
        </div>
      </div>
    </div>
  );
}

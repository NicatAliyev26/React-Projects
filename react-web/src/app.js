import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";
import "../node_modules/bootstrap/scss/bootstrap.scss"



const root = document.getElementById("root");

var template =(
        <div className="containerr">
            <div className="img-part">              
            </div>
            <div className="sign-in">
             <div className="into">
                 <i class="fas fa-lock-alt"></i>
                <h1>Sign In</h1>
                <div className="inputs">
                  <input type="text" name="" id="inp-1" placeholder="Email Adress *" required />
                  <input type="text" name="" id="inp-1" placeholder="Password *" required />
                </div>  
                <div className="box">
                <label htmlFor=""><input type="checkbox" name="check" id="check"/> <span>Remember me</span> </label> 
                </div>
                 
                <div className="btn">
                  <button>Sign In</button>
                </div>  
                <div className="end">
                    <a href="#">Forgot password?</a>
                    <a href="#">Don't have an account? Sign Up</a>
                </div>        
                
             </div>
            </div>
        </div>
   
);

ReactDOM.render(template,root);
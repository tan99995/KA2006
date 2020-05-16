import React from "react";
import loginImg from "../../logo2.PNG";
import axios from "axios";
import {Redirect} from "react-router-dom";
import Button from 'react-bootstrap/Button';
// import trail from "./trail";
// import login_page from "../login_page/login_page";

const initialState = {
  
  email: "",
  password: "",
  
  emailError: "",
  passwordError: "",

  login_dets: [],
  url: "http://localhost/KA2006/KA2006/Server/public/api/registration"
};




export class Login extends React.Component {
         constructor(props) {
           super(props);
         }
         state = initialState;

         getLogin_dets = async () => {
           const login_dets = await axios.get(this.state.url);
           this.setState({login_dets : login_dets.data}); 
         }

         handleChange = (event) => {
           console.log(this.state);
           const isCheckbox = event.target.type === "checkbox";
           this.setState({
             [event.target.name]: isCheckbox
               ? event.target.checked
               : event.target.value,
           });
         };

         validate = () => {
           let emailError = "";
           let passwordError = "";

           if (!this.state.email) {
             emailError = "Email cannot be blank";
           } else if (
             !/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(this.state.email)
           ) {
             emailError = "Email is invalid";
           }

           if (!this.state.password) {
             passwordError = "Password cannot be blank";
           }

           if (emailError || passwordError) {
             this.setState({ emailError, passwordError });
             return false;
           }

           return true;
         };

         handleSubmit = (event) => {
           event.preventDefault();
           const isValid = this.validate();

           if (!isValid) {
             this.getLogin_dets();
             console.log(this.state);
             // clear form
             this.state.password = "";
             this.state.email = "";
           }
         };

         changePage = (event) => {
           
           this.setState({ redirect: true });
         }


         render() {
           if (this.state.redirect) {
             return <Redirect push to="/guest" />;
           }

           return (
             <form
               className="base-container"
               ref={this.props.containerRef}
               onSubmit={this.handleSubmit}
             >
               <div className="header">Red-Shift Estimator</div>
               <div className="content">
                 <div className="image">
                   <img src={loginImg} />
                 </div>
                 <div className="form">
                   <div className="form-group">
                     <label htmlFor="email">Email</label>
                   
                     <input
                       type="text"
                       name="email"
                       placeholder="Email"
                       value={this.state.email}
                       onChange={this.handleChange}
                     />
                   </div>
                   <div className="error">{this.state.emailError}</div>
                   <div className="form-group">
                     <label htmlFor="password">Password</label>
                     <input
                       type="password"
                       name="password"
                       placeholder="Password"
                       value={this.state.password}
                       onChange={this.handleChange}
                     />
                   </div>
                   <div className="error">{this.state.passwordError}</div>
                 </div>
               </div>
               <div className="footer">
                 <Button className="log_btn" type="submit">
                   Login {"   "}
                 </Button>
                 or
                 <br />
                 <Button
                   variant="link"
                   bsPrefix="link_btn"
                   onClick={this.changePage}
                 >
                   Guest Login
                 </Button>
               </div>
               <div className="guest_link"></div>
             </form>
           );
         }
       }

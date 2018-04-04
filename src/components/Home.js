import React, { Component } from 'react';
import axios from 'axios';



export default class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            userName: '',
            password: '',
            user: []
        }
      }
    
    getLogin(){
        console.log("test")
        console.log(this.state.userName)
        let user = this.state.userName
        axios.get('/api/getLogin?user=' + user)
        .then(res => {
            console.log(res.data[0].password)
            this.setState({ user: res.data[0] })
            if(this.state.password === res.data[0].password){
                window.location = 'http://localhost:4001/#/menu';
            }else{
                window.location = 'http://localhost:4001/#/'
            }
          })
    }
    updateUser(e){
        this.setState({
            userName: e.target.value
        })
    }
    updatePass(e){
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div className="home">
                <div className="welcome">
                    <div className="welcome_left">
                        <img src={require("../assets/logo.svg")} alt="" />
                        Welcome To Good Eats
            </div>
                    <div className="welcome_right">
                        <div>Username:<input type="text" onChange={(e) => this.updateUser(e)}/></div>
                        <div>Password:<input type="text" onChange={(e) => this.updatePass(e)}/></div>
                        <button onClick={() => this.getLogin()}>Login</button>
                        <button>Register</button>
                    </div>
                </div>
            </div>
        );
    }
}

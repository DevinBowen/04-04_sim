import React, { Component } from 'react';
import axios from 'axios';


// 42H
export default class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            userName: '',
            password: '',
            user: []
        }
        // 37C
        this.updateUser = this.updateUser.bind(this);
        this.updatePass = this.updatePass.bind(this);
      }
    
    //   39C
    // 44E
      componentDidMount(){
          axios.get('/api/getAllUserInfo').then(res => {
              console.log(res.data)
          })
          console.log('hi')
      }
    
    getLogin(){
        console.log("test")
        console.log(this.state.userName)
        let user = this.state.userName
        // 44C
        axios.get('/api/getLogin?user=' + user)
        // 44D
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
        // 36D
        this.setState({
            // 36J
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
                        {/* 37D */}
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

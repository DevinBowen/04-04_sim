import React, { Component } from 'react';




export default class Menu extends Component {
    constructor(props) {
        super(props);
    
        this.state = {

        }
      }
    

    render() {
        return (
            <div className="menu">
                <div className="menu_left">
                    <img src={require("../assets/logo.svg")} alt=""/>
                    <div>Menu<img src={require("../assets/menu.svg")} alt=""/></div>
                    <div>cart<img src={require("../assets/shopping-cart.svg")} alt=""/></div>
                    <div>Logout<img src={require("../assets/logout.svg")} alt=""/></div>
                </div>
                <div className="menu_right">
                    <div id='menu_main'>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </div>
                </div>
            </div>
        );
    }
}

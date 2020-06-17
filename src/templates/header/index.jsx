import React, { Component } from "react";
import { Link } from "react-router-dom";
import './styles.css';

export default class Header extends Component{

    dropdownClick = (e) => {
        const dropdownButton = e.currentTarget;
        const attr = dropdownButton.getAttribute("dropdown");
        const dataTarget = document.getElementById(
            dropdownButton.getAttribute("data-target"));
        let changed;
        switch (attr) {
            default:
            case "inactive":
                changed = "active";
                break;
            case "active":
                changed = "inactive";
                break;
        }
        dropdownButton.setAttribute("dropdown", changed);
        dataTarget.setAttribute("dropdownState", changed);
    }

    navClick = (e) => {
        e.currentTarget.setAttribute("dropdownState", "inactive");
        document.querySelector(".dropdown[data-target=navBar]")
                .setAttribute("dropdown", "inactive");
    }

    render(){
        return (<nav className="header">
            <img className="logo" src={process.env.PUBLIC_URL + '/logo512.png'} alt="logo"/>
            <p className="title">HidekiHrk Projects</p>
            <ul id="navBar" onClick={this.navClick}>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/projects">Projetos</Link></li>
                <li><Link to="/partners">Parcerias</Link></li>
            </ul>
            <button className="dropdown" data-target="navBar" onClick={this.dropdownClick}>
                <i className="fas fa-bars"/>
            </button>
        </nav>)
    }
}
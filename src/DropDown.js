import React, { Component } from "react";
import './DropDown.css'


const languages = {
    "en-GB": "English",
    "hy-AM": "Armenian",
    "ru-RU":"Russian"
  };

export default class DropDown extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false
        }
    }
    toggleDropdown=()=>{
        this.setState({
            ...this.state,
            show : !this.state.show
        })
    }

    render(){
        return (
            <div className="dropdown">
                <button className="dropbtn" onClick={this.toggleDropdown}>{languages[this.props.value]}</button>

                <div  className="dropdown-content">
                {
                    this.state.show?(
                        ["hy-AM", "en-GB", "ru-RU"].map(locale=>(
                        <a href="/#" key={locale} onClick={e => this.props.onChange(locale)} onChange={this.DropDown} >
                        {languages[locale]}
                        </a>
                        ))
                    ):null
                }
                </div>
            </div>    
        )
    }
}
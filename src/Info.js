import React, { Component } from "react";
import Modal from './modal.js';

export default class Info extends Component{
    constructor(props){
        super(props)
        this.state={
            show : false,
        }
    }
    showModal=()=>{
        this.setState({
            ...this.state,
            show:!this.state.show,
        })
    }

    render(){
        const  {show}=this.state
        return (
            <div className = 'title'>
                { !show ? (
                    <button 
                    onClick={this.showModal}>More info</button>
                ) : (<Modal show={this.state.show} onClose = {this.showModal}>
                     {this.props.children}
                     </Modal>
                    )
                }
            </div>
        ) 
    }
}
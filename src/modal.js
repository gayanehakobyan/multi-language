import React from 'react';

const backdropstyle={
    position: "fixed",
    top:0,
    buttom:0,
    left:0,
    right:0,
    backgroundColor : 'rgba(0,0,0,0.3)',
    padding : 50,
    height : window.innerHeight
}

const modalStyle = {
    backgroundColor :"#fff",
    borderRadius : 15,
    maxWidth: 500,
    minHeight: 300,
    margin:"0 auto",
    padding : 30,
    position: "relative",
    boxShadow: "0 8 16 0 rgba(0,0,0,0.3)"
}


const footerStyle ={
    position: "absolute",
    top:10,
    left: 500
}

function Modal(props){

        if(!props.show){
            return null;
        }

        return <div style={backdropstyle} className='container'>
                <div style={modalStyle} className='modalStyle'>
                    {props.children}
                    <div style={footerStyle}>
                        <button onClick={props.onClose}>X</button>
                    </div>
                </div>
            </div>
    }

export default Modal
import React, { Component } from "react";
import Makiaveli from "./Makiaveli.jpg";
import DropDown from "./DropDown.js";
import Info from './Info.js'
import './App.css'



export default  class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: "",
      textsLoaded: false,
      err: ""
    };
    this.texts = {};  
  }

  componentDidMount() {
    const locale = window.localStorage.getItem("lang");//cant understand
    console.log(locale,window.localStorage )
    this.setLocale(locale);
  }

  componentDidCatch(err, errInfo) {
    console.log(err);
  }

  setLocale = locale => {
    if (this.state.locale !== locale) {
      this.setState({ textsLoaded: false, locale });
      window.localStorage.setItem("lang", locale);
      fetch(`http://localhost:3000/locale/${locale}.json`)
        .then(res => res.json())
        .then(json => {
          this.texts = json;
          this.setState({ textsLoaded: true });
        })
        .catch(ex => {
          this.setState({ err: ex });
        });
    }
  };

  render() {
    return (
      <div className="App">
        {this.state.err !== "" ? (
          <button onClick={e=>window.location.reload()}>Reload</button>
        ) : this.state.textsLoaded ? (
          <div>
            <DropDown value={this.state.locale} onChange={this.setLocale} />
            <h1>{this.texts.title}</h1>
            <img src={Makiaveli} alt={this.texts.title} title={this.texts.title} />
            <p className="text">{this.texts.text1}</p><br/>
            <Info show={true}>{this.texts.text2}</Info>
          </div>
        ) : (
          <div id="loader"/>
        )}
      </div>
    );
  }
}

import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import NewNav from './components/newNav'
import ImageContainer from './components/imagecontainer';
import Gallery from './components/gallery';
import Nav from './components/nav';
import Menu from './components/menu';
import Popup from "reactjs-popup";
import Burger from './components/burger';
import ThisImage from './components/image';
import Cloud from './components/cloud';
import { connect } from 'react-redux';


class App extends Component {


  contentStyle = {
    background: "rgba(255,255,255,0",
    width: "80%",
    border: "none"
  };


  render() {
    return (
      <div className="App">
        {window.scrollTo(0, 0)}
        <Nav />
        <Popup
          modal
          overlayStyle={{ background: "rgba(255,255,255,0.98" }}
          contentStyle={this.contentStyle}
          closeOnDocumentClick={false}
          trigger={open => <Burger open={open} />}
        >
          {close => <Menu close={close} />}
        </Popup>
        <Gallery />
        <Cloud />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(App);

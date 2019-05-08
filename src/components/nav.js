import React, { Component } from 'react'
import Burger from './burger'
import store from '../index'
import {connect} from 'react-redux'

class Nav extends Component {

  constructor(props) {
      super(props);
      this.state = {
        menu: false
      };
  }

  handleScroll = () => {
      this.setState(() => {
        return {
          ...this.state,
          scroll: window.scrollY
        }
      })
  }

  handleClick = (e) => {

    if (e.target.dataset.id === "burger" || e.target.parentElement.dataset.id === "burger"){
      this.setState(() => {
        return {
          ...this.state,
          menu: !this.state.menu
        }
      })
    } else if (e.target.dataset.id === "home") {
      store.dispatch({type: "HOME"})
      window.scrollTo(0, 0);
    }
  }

  componentDidMount() {
      const el = document.querySelector('nav');
      this.setState({top: el.offsetTop, height: el.offsetHeight});
      window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
      this.state.scroll > this.state.top ?
          document.body.style.paddingTop = `${this.state.height}px` :
          document.body.style.paddingTop = 0;
  }

  render() {
    return (
      <nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}
        style={{
          fontFamily: "abril",
          fontWeight: "600",
          fontSize: "22px",
          zIndex: "1",
          opacity: "0.9",
          paddingTop: "4px",
          paddingLeft: "5px",
          paddingBottom: "5px"
        }}>
        <ul className={"title"}>
          <li style={{ opacity: "1"}} data-id={"home"} onClick={(e) => this.handleClick(e)}>M/C/W</li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Nav)

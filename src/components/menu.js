import React from "react";
import store from '../index.js'

class Menu extends React.Component {

  handleClick = (e) => {
    window.scrollTo(0,0);
    store.dispatch({type: e.target.dataset.name})
    this.props.close()
  }

  render() {
    return (
      <div className="menu">
      <ul>
      <li data-name={"Activism"} onClick={(e) => this.handleClick(e)}>Activism | Solidarity</li>
      <li data-name={"Tanzania"} onClick={(e) => this.handleClick(e)}>Masia | Tanzania</li>
      </ul>
      </div>
    )
  }
};

export default Menu

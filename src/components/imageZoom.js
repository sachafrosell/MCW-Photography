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
        <img
          src={this.props.src}
          style={{maxWidth: "80%"}}
        />
      </div>
    )
  }
};

export default Menu

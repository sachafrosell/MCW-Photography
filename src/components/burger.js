import React from "react";
import store from "../index"


class Burger extends React.Component {
  render() {

    return (
      <div className={this.props.open ? "burger-menu open" : "burger-menu"} {...this.props}>
        <div className="bar1" key="b1" />
        <div className="bar2" key="b2" />
        <div className="bar3" key="b3" />
      </div>
    )
  }
};


export default Burger;

import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    return (
      <nav className="navbar">
        <i className="navbar-icon fas fa-meteor"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;

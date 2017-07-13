import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/settings">Games</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signout">Sign out</Link>
        </li>
      ];
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign in</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign up</Link>
        </li>
      ];
    }
  }

  render() {
    console.log('props', this.props)
    console.log('context', this.context)
    console.log('state', this.props.state)
    return (
      <nav className="navbar navbar-light">
        <Link to='/' className="navbar-brand">FretZila</Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    state: state
  };
}

export default connect(mapStateToProps)(Header);

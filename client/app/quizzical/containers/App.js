// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: React.Node,
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div className="app">
        <nav className="navbar is-info">
          <div className="navbar-end">
            {/*<div className="navbar-item">*/}
              <Link to="/register" className="navbar-item">
                Register
              </Link>
            {/*</div>*/}
          </div>
        </nav>

        {this.props.children}
      </div>
    );
  }
}

import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import '../../commons';

class Dashboard extends PureComponent {
  render() {
    return <div>Dashboard</div>;
  }
}

ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));

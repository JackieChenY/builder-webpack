import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import '../../commons';

class Index extends PureComponent {
  render() {
    return <div>Index</div>;
  }
}

ReactDOM.render(<Index />, document.getElementById('index'));

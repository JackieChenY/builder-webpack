import React from 'react';
import ReactDOM from 'react-dom';
import '../../commons';
import './style/index.less';

class Search extends React.PureComponent {
  render() {
    return <div className="search-text">Search</div>;
  }
}

ReactDOM.render(<Search />, document.getElementById('search'));

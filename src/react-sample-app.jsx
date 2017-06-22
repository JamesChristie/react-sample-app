import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/header.jsx';

require('./styles/base.scss');

export class ReactSampleApp extends React.Component {
  render() {
    return(
      <div className="react-sample-container">
        <Header />
      </div>
    );
  }
}

ReactDOM.render(
  <ReactSampleApp />,
  document.getElementById('react-sample-app'));
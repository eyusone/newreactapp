import React, {Component} from 'react';

import './App.css';
import 'bootswatch/dist/pulse/bootstrap.css';

import Sidebar from './Components/Forms/Sidebar/sidebar.jsx';
//import ScrollDown from './Components/Forms/ScrollDown/scrolldown.jsx';
import Routes from './routes.jsx';

class App extends React.Component {
        render () {
          return (
            <div>
              <Routes/>
            </div>
        )
}
}

export default App;

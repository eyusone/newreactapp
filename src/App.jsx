import React, {Component} from 'react';

import './App.css';
import 'bootswatch/dist/pulse/bootstrap.css';

import Sidebar from './Components/Forms/Sidebar/sidebar.jsx';
//import ScrollDown from './Components/Forms/ScrollDown/scrolldown.jsx';
import Routes from './routes.jsx';

const Hello = () => {
    return(<div className = "container-fluid">
            <div className = "row align-items-center">
                <div className = "col-12" style = {{paddingTop: '35vh'}}>
                    <h1 style = {{textAlign: 'center'}}>This app is only for Desktop!</h1><br/>
                    <img src = '/img/sad.png' alt = 'sorry'
                    style = {{maxWidth: '150px', maxHeight: '150px', marginLeft: 'auto', marginRight: 'auto', display: 'block'}}/>
                </div>
            </div>
        </div>);
}

class App extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                hideNav: window.innerWidth
            }
        }

        componentDidMount() {
            window.addEventListener("resize", this.resize.bind(this));
            this.resize();
            //console.log(window.innerWidth);
        }

        resize() {
            this.setState({hideNav: window.innerWidth});
        }

        render () {
            
            if (this.state.hideNav<=1024) {
                return (
                    <div>
                        <Hello/>
                    </div>
                )
            }

            else {
            return (
                <div>
                    <div className = "container-fluid m-0 p-0 device">
        				<div className = "row m-0">
        					<div className = "col-3 m-0 p-0 sidebar">
        			    		<Sidebar />
        					</div>
        					<div className = "col-9 main" style = {{minHeight: '100vh'}}>
                        		<Routes />
                    		</div>
        				</div>
        			</div>
                </div>
            )
            }
}
}

export default App;

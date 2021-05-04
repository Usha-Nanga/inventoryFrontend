

import {Router,Route} from "react-router-dom"

import React from 'react'
import {Login} from './Login/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from '../src/Home/Home'

import {history} from  './history';

function App(){


    return (

      <div className='app'>

        <h1>Hello</h1>
       
        <hr></hr>
        <div className='Router'>
        
        <Router history={history}>
         
<Route path="/home" component={Home}></Route>
<Route path="/login" component={Login}></Route>

</Router>
{/* <Login/> */}
        </div>
        
      </div>
      
        
    );
  }


export default App;




// import React from 'react';
// import { Router, Route, Switch} from 'react-router-dom';
// import { connect } from 'react-redux';

// import { history } from './history';
// import { alertActions } from './_actions';

// import Home from '../src/Home/Home'
// import { Login} from './Login/Login';


// class App extends React.Component {
// constructor(props) {
// super(props);

// history.listen((location, action) => {
// // clear alert on location change
// this.props.clearAlerts();
// });
// }

// render() {
// const { alert } = this.props;
// return (
// <div className="jumbotron">
// <div className="container">
// <div className="col-sm-8 col-sm-offset-2">
// {alert.message &&
//   <div className={`alert ${alert.type}`}>{alert.message}</div>
// }
// <Router history={history}>
//   <Switch>
     
//       <Route path="/home" component={Home}></Route>
//  <Route path="/login" component={Login}></Route>
      
//   </Switch>
// </Router>
// </div>
// </div>
// </div>
// );
// }
// }

// function mapState(state) {
// const { alert } = state;
// return { alert };
// }

// const actionCreators = {
// clearAlerts: alertActions.clear
// };

// const connectedApp = connect(mapState, actionCreators)(App);
// export { connectedApp as App };
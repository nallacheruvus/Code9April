import logo from './logo.svg';
import './App.css';
import React, { lazy, Suspense } from 'react';
import FirstComp from './FirstComp';
import SecComp from './SecComp';
import ThirdComp from './ThirdComp';
import NComp from './NComp';
import MyComponent from './MyHoc';
import Welcome from "./Welcome";
import Reactotron from 'reactotron-react-js'
import BooksContainer from "./booksContainer";
import { Provider } from "react-redux";
import Store from "./store";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import CompA from './CompA';
import InsForm from './InsFormContainer';


Reactotron.log('hello rendering world');

//AUtomtic code splitting
//It is not server side code(SSR)
const FC = lazy(() => import('./FComp'));
const BC = lazy(() => import('./BComp'));
const CC = lazy(() => import('./CComp'));

import('./MyLib').then(a => console.log(a.AddNum(21, 22)));

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <>
        {/* <Suspense fallback={<div>Still Loading</div>}>
          <Router>
            <Switch>
              <Route path="/fc" component={FC} />
              <Route path='/sc' component={BC} />
              <Route path='/tc' component={CC} />
            </Switch>
          </Router>
        </Suspense>
        <div><Link to="/fc">First</Link><Link to="/sc">First</Link><Link to="/tc">First</Link></div> */}
        <InsForm />

      </>
    );
  }
}





//Class Components
class Parthiban extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>This is Parthivan component</h1>
      </div>
    );
  }
}

//Functional Components: React hooks
function Shankar(props) {
  return (
    <div>This is Shankar Component</div>
  );
}
// function App() {
//   return (
//     <div>
//       <h1>My First Web Site</h1>
//     </div>
//   );
// }

export default App;

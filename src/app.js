import React from 'react';
import Header from './header';
import History from './history';
import Help from './help';
import Footer from './footer';
import Form from './form';
import Results from './results';
//import Main from './main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: '',
      results: '',
      headers: ''
    };
  }

  updateState = (apiResults, headers = {}) => {
    // console.log('FRED IS IN THE APP', apiResults);
    // this.setState({ headers });
    this.setState({ results: apiResults });
    // this.setState({ count: apiResults.count });
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Form
                giveAPIresults={this.updateState}
              />
              <Results
                results={this.state.results}
                count={this.state.count}
                headers={this.state.headers}
              />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
            <Route>
              <div>404</div>
            </Route>
          </Switch>
          <Footer />
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
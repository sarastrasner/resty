import React from 'react';
import Header from './header';
import Footer from './footer';
import Form from './form';
import Results from './results';
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

  updateState = (apiResults,headers={}) => {
    // console.log('FRED IS IN THE APP', apiResults);
    // this.setState({ headers });
    this.setState({ results: apiResults });
    // this.setState({ count: apiResults.count });
  };
  render() {
    return (
      <div>
        <Header />
        <Form 
        giveAPIresults={this.updateState} 
        />
        <Results
          results={this.state.results}
          count={this.state.count}
          headers={this.state.headers}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
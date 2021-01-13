import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: '',
      method: '',
      words: '',
      headers: '',
    };
  }
  render() {
    return (
      <>
        <form onSubmit={this.callAPI}>
          <label>
            URL:
            <input onChange={this.handleInput} type="text" name="URL" />
          </label>
          <input type="submit" value="Go!" id="button" />
        </form>
        <div onChange={this.handleRadio}>
          <input type="radio" value="Get" name="request" /> GET
          <input type="radio" value="Post" name="request" /> POST
          <input type="radio" value="Put" name="request" /> PUT
          <input type="radio" value="Delete" name="request" /> DELETE
        </div>
      </>
    );
  }

  callAPI = async e => {
    e.preventDefault();
    const url = this.state.URL;
    const method = this.state.method;
    const results = await fetch(url, { method, mode: 'cors' }).then(
      response => {
        if (response.status !== 200) return;
        for (var pair of response.headers.entries()) {
          let headers = pair[0] + ': ' + pair[1];
          console.log('HEADERS', headers);
          this.setState({ headers });
        }
        return response.json();
      }
    );
    this.props.giveAPIresults(results, this.state.headers);
  };

  handleInput = e => {
    e.preventDefault();
    this.setState({ URL: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let newWords = this.state.words;
    this.setState({ URL: newWords });
  };

  handleRadio = e => {
    this.setState({ method: e.target.value });
  };
}

export default Form;

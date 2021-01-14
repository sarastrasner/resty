import React from 'react';
import './form.scss';
const superagent = require('superagent');

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: '',
      method: '',
      words: '',
      headers: '',
      query: '',
      id: '',
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
          <label>Search Query:</label>
          <textarea
            onChange={this.handleQuery}
            type="text"
            rows="4"
            name="query"
          />
          <div>
            ID (for delete and update):
            <input onChange={this.handleID} type="text" name="id" />
          </div>
          <div onChange={this.handleRadio}>
            <input type="radio" value="get" name="request" /> GET
            <input type="radio" value="post" name="request" /> POST
            <input type="radio" value="put" name="request" /> PUT
            <input type="radio" value="delete" name="request" /> DELETE
          </div>
        </form>
      </>
    );
  }

  callAPI = async e => {
    e.preventDefault();
    const url = this.state.URL;
    let results = 'loading..';
    if (this.state.method === 'post') {
      try {
        results = await superagent.post(url).send(this.state.query.JSON());
        results = results.body;
      } catch (e) {
        console.error(e);
      }
    } else if (this.state.method === 'put') {
      console.log(this.state);
      let queryArray = e.target.query.value.split(':');
      let queryObj = {};
      queryObj[queryArray[0]] = queryArray[1];
      console.log(`FRED: `, queryObj, e.target.id.value, url);
      results = await superagent
        .put(`${url}/${e.target.id.value}`)
        .send(queryObj)
        .set('Accept', 'application/json');
      console.log(results);
      results = results.body;
    } else if (this.state.method === 'delete') {
      results = await superagent.delete(`${url}/${this.state.id}`);
    } else {
      results = await superagent.get(url);
      results = results.body;
    }
    if (results) {
      // Store the URL, Method, and the Body (if any)
      let resultString = JSON.stringify(results, this.state.method, this.state.url);
      localStorage.setItem('successful results', resultString);
    }
    this.props.giveAPIresults(results);
  };

  handleInput = e => {
    e.preventDefault();
    this.setState({ URL: e.target.value });
  };

  handleQuery = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ query: e.target.value });
  };

  handleID = e => {
    e.preventDefault();
    this.setState({ id: e.target.value });
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

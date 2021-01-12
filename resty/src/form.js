import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: '',
      method: '',
      words: ''
    };
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} >
          <label>
            URL: 
            <input onChange={this.handleInput} type="text" name="URL" />
          </label>
          <input type="submit" value="Go!" id="button"/>
        </form>
        <div onChange={this.handleRadio}>
          <input type="radio" value="Get" name="request" /> GET
          <input type="radio" value="Post" name="request" /> POST
          <input type="radio" value="Put" name="request" /> PUT
          <input type="radio" value="Delete" name="request" /> DELETE
        </div>
        <section>
          {this.state.method} {this.state.URL}
        </section>
      </>
    );
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({ words: e.target.value });
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

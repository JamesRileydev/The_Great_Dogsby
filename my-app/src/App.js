import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      picture: [],
    };
  }


  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        let picture = <img className="App-Pic" src={data.message} alt="dogpic" />

        this.setState({ picture: picture })
      })
  }


  render() {
    return (
      <div className="App">
        <header className="Header">
          <h1>THE GREAT DOGSBY</h1>
        </header>
        <section className="App-main">
          <div className="pic_parent_container">
            <div className="pic_container">
              {this.state.picture}
            </div>
          </div>
          <button className="Refresh-btn" onClick={() => this.componentDidMount()}>
            NEXT PICTURE
          </button>
        </section>
      </div>
    );
  }
}

export default App;

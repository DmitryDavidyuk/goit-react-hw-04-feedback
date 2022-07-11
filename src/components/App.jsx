import React from 'react';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleIncrement = event => {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }
    const name = event.target.name;
    console.log(name);
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    return (
      <div onClick={this.hendleIncrement}>
        <h2>Please leave feedback</h2>
        <button name="good">Good</button>
        <button name="neutral">Neutral</button>
        <button name="bad">Bad</button>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
        </ul>
      </div>
    );
  }
}

export default App;

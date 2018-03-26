import React from 'react'

export default class guessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    let guess = this.input.value;
    this.props.onSubmit(guess)

  }

  render(){
    return (
      <form onSubmit={e => this.onSubmit(e)}>     
        <legend>Guess the Number</legend>
        <label htmlFor="guessNumber">Enter a number, 1-100</label>
        <input ref={input=> this.input = input} id="guessNumber" type="number" min="1" max="100" step="1" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
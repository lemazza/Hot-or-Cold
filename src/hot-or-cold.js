import React from 'react'
import Form from './guess-form'

export default class HorC extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      guess: '',
      theNumber: Math.floor( Math.random() * 100 ) + 1
    }
    this.resetGame = this.resetGame.bind(this);
  };
    
  newGuess(guess) {
    console.log(`you guessed ${guess}`);
    this.setState({guess})
  };

  resetGame() {
    console.log('game reset');
    let num = Math.floor(Math.random() *100) +1;
    this.setState({theNumber: num, guess: ''});
  }

  render() {
    let diff = Math.abs(this.state.guess - this.state.theNumber);
    let temperature;

    if( diff > 50) { temperature = 'very cold' } else
    if( diff > 20) { temperature = 'cold' } else
    if( diff > 10) { temperature = 'warm'} else
    if( diff > 5) { temperature = 'hot' } else
    if( diff > 0) { temperature = 'very hot' } else
    if( diff === 0) { temperature = "That's it!"}

    return (
    <div>
      <h1>Hot or Cold??</h1>
      <button onClick={this.resetGame} type="button">Start Over</button>

      <Form onSubmit={e=> this.newGuess(e)}/>

      <section>
        <h2>hint...</h2>
        <p>(the current answer is {this.state.theNumber})</p>
        <p className="hint">You guessed {this.state.guess}.  You're {temperature}</p>
      </section >

      <section>
        <h2>previous guesses</h2>
        <p className="prev-guesses"></p>
      </section>
    </div>
  )

  };

};
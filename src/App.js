import React, { 
  Component 
} from 'react';
import './App.css';
import Card from './components/Card.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tarotReading: []
    }
  }

  componentDidMount() {
    this.getCards()
  }

  getCards = () => {
    fetch("https://classmate-database-g95.herokuapp.com/")
      .then(resp => resp.json())
      .then(resp => this.setState({
        tarotReading: resp.result
      }))
  }

  render() {
    console.log(this.state.tarotReading)
    return (
      <div className="App">
        <header className="App-header">
          Find your fortune!
          {this.state.tarotReading.map(card => {
            return <Card card={card}></Card>
          })}
        </header>
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import Nav from "./../Nav/Nav";
import Landing from "./../Landing/Landing";
import Footer from "./../Footer/Footer";
import ChallengeSection from "./../ChallengeSection/ChallengeSection";

const totalTime = 60;

const paraApiUrl = "http://metaphorpsum.com/paragraphs/1/10";
fetch(paraApiUrl)
  .then((response) => response.text())
  .then((info) => console.log(info));

class App extends React.Component {
  state = {
    selectedPara: "Hello aadi, type this exactly",
    timeRemaining: totalTime,
    timerStarted: false,
    words: 0,
    characters: 0,
    wpm: 0,
  };

  componentDidMount() {
    fetch(paraApiUrl)
      .then((response) => response.text())
      .then((data) => this.setState({ selectedPara: data }));
  }

  render() {
    return (
      <div className="app">
        <Nav />
        <Landing />
        <ChallengeSection
          selectedPara={this.state.selectedPara}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

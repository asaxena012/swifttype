import React from "react";
import "./App.css";
import Nav from "./../Nav/Nav";
import Landing from "./../Landing/Landing";
import Footer from "./../Footer/Footer";
import ChallengeSection from "./../ChallengeSection/ChallengeSection";
import { SAMPLE_PARAGRAPHS } from "./../../data/data";

const totalTime = 60;

const paraApiUrl = "http://metaphorpsum.com/paragraphs/1/10";

const DefaultState = {
  selectedPara: "",
  timeRemaining: totalTime,
  timerStarted: false,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: [],
  wordArray: [],
  correctWordCnt: 0,
};

class App extends React.Component {
  state = DefaultState;

  getNewParaOffline = () => {
    console.log("New para function called");

    const data =
      SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];

    const selectedParaLetters = data.split("");
    const wordArray = data.split(" ");
    const testInfoArr = selectedParaLetters.map((letter) => {
      return {
        testLetter: letter,
        testStatus: "notAttempted",
      };
    });

    this.setState({
      ...DefaultState,
      selectedPara: data,
      testInfo: testInfoArr,
      wordArray: wordArray,
    });
  };

  getNewPara = () => {
    fetch(paraApiUrl)
      .then((response) => response.text())
      .then((data) => {
        const selectedParaLetters = data.split("");
        const testInfoArr = selectedParaLetters.map((letter) => {
          return {
            testLetter: letter,
            testStatus: "notAttempted",
          };
        });

        this.setState({
          ...DefaultState,
          selectedPara: data,
          testInfo: testInfoArr,
        });
      });
  };

  componentDidMount() {
    this.getNewParaOffline();
  }

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
        });
      } else {
        clearInterval(timer);
      }

      let speed =
        this.state.timeRemaining < 60
          ? (this.state.correctWordCnt /
              (totalTime - this.state.timeRemaining)) *
            totalTime
          : this.state.correctWordCnt;
      this.setState({
        wpm: parseInt(speed),
      });
    }, 1000);
  };

  writtenLength = 0;

  handleUserInput = (input) => {
    //Start timer
    if (!this.state.timerStarted) {
      this.startTimer();
    }

    //Update the characters and words
    const words = input.split(" ");
    const characters = input.length;

    //Update correct word count
    if (
      input[input.length - 1] == " " &&
      this.state.wordArray[words.length - 2] == words[words.length - 2]
    ) {
      this.setState({ correctWordCnt: this.state.correctWordCnt + 1 });
    }

    let testInfoNew = Object.assign(this.state.testInfo);

    //Check length of input String and textInfo array

    if (input.length > this.state.testInfo.length) {
      return;
    }

    if (input.length >= this.writtenLength) {
      //Check
      if (
        this.state.testInfo[input.length - 1].testLetter ==
        input[input.length - 1]
      ) {
        //Change status to correct
        testInfoNew[input.length - 1].testStatus = "correct";
      } else {
        //Change status to incorrect
        testInfoNew[input.length - 1].testStatus = "incorrect";
      }
    } else {
      //Backspaced
      //Change written-1's status as not attempted

      if (this.writtenLength - input.length > 1) {
        //Traverse whole testInfo

        testInfoNew.forEach((el) => {
          el.testStatus = "notAttempted";
        });

        input.split("").forEach((letter, idx) => {
          if (testInfoNew[idx].testLetter == letter) {
            testInfoNew[idx].testStatus = "correct";
          } else {
            testInfoNew[idx].testStatus = "incorrect";
          }
        });
      } else if (input.length >= 0)
        testInfoNew[input.length].testStatus = "notAttempted";
    }

    this.writtenLength = input.length;
    this.setState({ testInfo: testInfoNew });
    this.setState({ words: this.state.correctWordCnt, characters });
  };

  startAgain = () => {
    this.getNewParaOffline();
  };

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
          testInfo={this.state.testInfo}
          handleUserInput={this.handleUserInput}
          startAgain={this.startAgain}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

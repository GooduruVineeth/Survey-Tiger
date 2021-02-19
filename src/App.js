import React, { useState, useEffect, Component } from "react";

import Header from "./components/Header";
import { Button } from "@material-ui/core";
import Content from "./components/Content";
import CreateSurvey from "./components/createSurvey";
import './App.css';
import Question from "./components/Question";
import OptionItem from "./components/OptionItem";
import DisplayMultiQuestion from "./components/DisplayMultiQuestion";
function App() {
  const [display1, setDisplay1] = useState(false);
  const [counter, setCounter] = useState(0);
  const [publish, setPublish] = useState(0);


  const [type, setType] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [questions, setQuestions] = useState([]);
  const handleCreateSurveyClick = () => {
    console.log("handleCreateSurveyClick");
    setDisplay1(true);
  };

  const handleTakeSurveyClick = () => {
    console.log("handleTakeSurveyClick");
  };

  const handleChoiceChange = type => {
    console.log(questions);
    console.log("app==>", type);
    if (type == 1) {
      setCounter(prev => prev + 1);
      setType(1);
      let current = {
        questionType: "",
        questionDesc: "",
        Options: [""]
      };
      setCurrentQuestion(current);
    } else if (type == 2) {
      let current = {
        questionType: "",
        questionDesc: "",
        Options: ["", "",]
      };
      setCurrentQuestion(current);
      setType(2);
      setCounter(prev => prev + 1);
    }
  };

  const handleQuestionOnChange = value => {
    setCurrentQuestion({ ...currentQuestion, questionDes: value });
    console.log(currentQuestion);
  };

  function handleOptionChange(id, value) {
    console.log(id, value);
    let arr = [...currentQuestion.Options];
    arr[id] = value;
    setCurrentQuestion({ ...currentQuestion, Options: [...arr] });
  }

  function handleRemoveOption(event) {
    console.log("id", event.target.id);
    let arr = [...currentQuestion.Options];
    arr.splice(event.target.id, 1);
    console.log(currentQuestion.Options.splice(event.target.id, 0, ""));
    console.log("log", { ...currentQuestion, Options: [...arr] });

    setCurrentQuestion({ ...currentQuestion, Options: [...arr] });
  }
  function handleAddOption(event) {
    console.log("id", event.target.id);
    let arr = [...currentQuestion.Options];
    arr.splice(event.target.id + 1, 0, "");
    console.log(currentQuestion.Options.splice(event.target.id, 0, ""));
    console.log("log", { ...currentQuestion, Options: [...arr] });
    console.log("log question", questions);

    setCurrentQuestion({ ...currentQuestion, Options: [...arr] });
  }
  const handleAddQuestion = () => {
    let copy = JSON.parse(JSON.stringify(currentQuestion));
    // let copy = JSON.parse(JSON.stringify(currentQuestion));

    setQuestions([...questions, copy]);
    setCurrentQuestion({
      questionType: "",
      questionDesc: "",
      Options: [""]
    });
    setCounter(0);
  };

  const handlePublish = () => {
    setCounter(0);

    setPublish(1);
  };
  const renderQuestion = () => {
    if (type == 1) {
      let options = currentQuestion.Options.map((option, index) => {
        return (
          <OptionItem
            key={index}
            key1={index}
            handleRemoveOption={handleRemoveOption}
            handleOptionChange={handleOptionChange}
            handleAddOption={handleAddOption}
          />
        );
      });

      return (
        <>
          <Question handleQuestionOnChange={handleQuestionOnChange} />
          {options}
          {options.length == 4 && (
            <>
              {" "}
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddQuestion}
              >
                Add Question
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handlePublish}
                style={{ marginLeft: 20 }}
              >
                Publish
              </Button>
            </>
          )}
        </>
      );
    } else if (type == 2) {
      let options = currentQuestion.Options.map((option, index) => {
        return (
          <OptionItem
            key={index}
            key1={index}
            handleRemoveOption={handleRemoveOption}
            handleOptionChange={handleOptionChange}
            handleAddOption={handleAddOption}
          />
        );
      });
      return (
        <>
          <Question
            handleQuestionOnChange={handleQuestionOnChange}
            handleAddOption={handleAddOption}
          />
          {options}
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddQuestion}
          >
            Add Question
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handlePublish}
            style={{ marginLeft: 20 }}
          >
            Publish
          </Button>
        </>
      );
    }
  };

  return (
    <div>
      <Header />
      <div
        style={{
          margin: "auto"
        }}
      >
        {!display1 && (
          <Content
            handleCreateSurveyClick={handleCreateSurveyClick}
            handleTakeSurveyClick={handleTakeSurveyClick}
          />
        )}
        {display1 && <CreateSurvey handleChoiceChange={handleChoiceChange} />}

        {counter && renderQuestion()}
        {publish && questions.map(q => <DisplayMultiQuestion item={q} />)
      }
      </div>
    </div>
  );
}

export default App;

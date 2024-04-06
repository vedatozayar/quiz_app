import React, { useState } from "react";
import QUESTIONS from "../questions.js";
import quizComplateImg from "../../src/assets/quiz-logo.png";
import QuestionTimer from "./QuestionTimer.jsx";


const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  
  
  const quizIsComplate= activeQuestionIndex===QUESTIONS.length
  

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }
  
  if(quizIsComplate){
    return (<div id="summary">
      <img src={quizComplateImg} alt="Trophy Icon" />
      <h2>Quiz Complated!</h2>
    </div>)
  }
  const shuffledAnswers=[...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(()=>Math.random()-0.5);


  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer timeout={10000} onTimeout={()=>handleSelectAnswer(null)} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li className="answer" key={answer}>
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;

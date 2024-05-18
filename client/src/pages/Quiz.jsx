import React, { useState } from 'react';
import "./Quiz.css";

function Quiz() {
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);

    const questions = [
      {
        text: "“Какое ключевое понятие используется для описания процесса обработки ошибок в программировании?”:",
        options: [
          { id: 0, text: "Debugging ", isCorrect: false },
          { id: 1, text: "Handling ", isCorrect: true },
          { id: 2, text: "Testing ", isCorrect: false },
          { id: 3, text: "Scripting", isCorrect: true },
        ],
      },
      {
        text: "“Какой тип данных используется для представления целых чисел в программировании? ”:",
        options: [
          { id: 0, text: "Float ", isCorrect: false },
          { id: 1, text: "Boolean ", isCorrect: false },
          { id: 2, text: "String", isCorrect: false },
          { id: 3, text: "Integer", isCorrect: true },
        ],
      },
      {
        text: "Верный перевод “Отказаться от участия в проекте”:",
        options: [
          { id: 0, text: "Back out of the project", isCorrect: true },
          { id: 1, text: "Back up the project", isCorrect: false },
          { id: 2, text: "Back down the project", isCorrect: false },
          { id: 3, text: "Back in the project", isCorrect: false },
        ],
      },
      {
        text: "Как правильно прочитать 1.67? ?",
        options: [
          { id: 0, text: "one point sixty seven", isCorrect: true },
          { id: 1, text: "one dot sixty seven", isCorrect: false },
          { id: 2, text: "one period sixty seven", isCorrect: false },
          { id: 3, text: "one point sixteen seven", isCorrect: false },
        ],
      },
      {
        text: "Как называется процесс преобразования кода программы в исполняемый файл? ",
        options: [
          { id: 0, text: "Debugging ", isCorrect: false },
          { id: 1, text: "Compiling ", isCorrect: true },
          { id: 2, text: "Running ", isCorrect: false },
          { id: 3, text: "Interpreting", isCorrect: false },
        ],
      },
      {
        text: "Как называется процесс проверки кода на наличие ошибок без его выполнения? ",
        options: [
          { id: 0, text: "Compiling  ", isCorrect: false },
          { id: 1, text: "Interpreting  ", isCorrect: false },
          { id: 2, text: "Debugging  ", isCorrect: true },
          { id: 3, text: "Testing", isCorrect: false },
        ],
      },
      {
        text: "Какой вид тестирования позволяет проверить работу всей системы в целом? ",
        options: [
          { id: 0, text: "Unit testing ", isCorrect: false },
          { id: 1, text: "Acceptance testing ", isCorrect: true },
          { id: 2, text: "Integration testing  ", isCorrect: false },
          { id: 3, text: "Regression testing", isCorrect: false },
        ],
      },
      {
        text: "Какой тип данных используется для хранения дробных чисел? ",
        options: [
          { id: 0, text: "Integer  ", isCorrect: false },
          { id: 1, text: "Float  ", isCorrect: true },
          { id: 2, text: "Double  ", isCorrect: false },
          { id: 3, text: "Char", isCorrect: false },
        ],
      },
      {
        text: "Что такое CSS? ",
        options: [
          { id: 0, text: "Cascading Style Sheets ", isCorrect: true },
          { id: 1, text: "Computer Security System  ", isCorrect: false },
          { id: 2, text: "Creative Style Sheets ", isCorrect: false },
          { id: 3, text: "Cascading System Software", isCorrect: false },
        ],
      },
      {
        text: "Что такое API?  ",
        options: [
          { id: 0, text: "Automated Programming Interface ", isCorrect: false },
          { id: 1, text: "Application Programming Interface ", isCorrect: true },
          { id: 2, text: "Advanced Python Instruction  ", isCorrect: false },
          { id: 3, text: "Algorithmic Program Integration", isCorrect: false },
        ],
      },
      
    ];
    

    const optionClicked = (isCorrect, text) => {
      if (isCorrect) {
        setScore(score + 1);
      }

      const answer = {
        text: text,
        isCorrect: isCorrect,
      };

      setAnswers([...answers, answer]);

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    };

    const restartGame = () => {
      setScore(0);
      setCurrentQuestion(0);
      setShowResults(false);
      setAnswers([]);
    };

    return (
      <div className="Quiz">

        <h1 className='testing'>Онлайн тест для проверки знаний</h1>

        <h2 className='score'>Счет: {score}</h2>

        {showResults ? (
          <div className="final-results">
            <h1>Окончательные результаты</h1>
            <h2 className='result'>
              {score} из {questions.length} верно - ({(score / questions.length) * 100}%)
            </h2>
            <h3>Правильные и неправильные ответы:</h3>
            <ul>
              {answers.map((answer, index) => (
                <li key={index} className={answer.isCorrect ? 'correct-answer' : 'incorrect-answer'}>
                  {answer.text} - {answer.isCorrect ? 'Правильный ответ' : 'Неправильный ответ'}
                </li>
              ))}
            </ul>
            <button onClick={() => restartGame()}>Пройти тест повторно</button>
          </div>
        ) : (
          <div className="question-card">
            <h2 className='question'>
              Вопрос: {currentQuestion + 1} из {questions.length}
            </h2>
            <h3 className="question-text">{questions[currentQuestion].text}</h3>

            <ul className='question-text'>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li className='quiz'
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect, option.text)}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>


    );
  }

export default Quiz;

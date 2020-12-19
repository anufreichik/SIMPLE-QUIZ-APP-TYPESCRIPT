import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IQuestion, IResult} from "./types";
import QuizResultsTable from "./QuizResultsTable";
import Message from "./Message";
import Header from "./Header";
import QuizQuestion from "./QuizQuestion";


function App() {
    const MAX_QUESTIONS:number=5;
    const signs: string[] = ['+', '-', '*'];
    //generate question
    const generateQuestion = () => {
        const question: IQuestion = {
            firstParam: Math.floor(Math.random() * 100) + 1,
            secondParam: Math.floor(Math.random() * 100) + 1,
            sign: signs[Math.floor(Math.random() * 3)]
        }
        return question;
    }

    const [quizResults, setQuizResults] = useState<IResult[]>([]);
    const initQuestion: IQuestion = generateQuestion();
    const [currentQuestion, setCurrentQuestion] = useState<IQuestion>(initQuestion);
    const [showMessage, setShowMessage] = useState(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);


    //SUBMIT ANSWER BUTTON HANDLER**************************************************************************************
    const submitHandler = (answerValue: number) => {
        if (!answerValue) return;

        let result: number;
        switch (currentQuestion.sign) {
            case '+':
                result = currentQuestion.firstParam + currentQuestion.secondParam;
                break;
            case '-':
                result = currentQuestion.firstParam - currentQuestion.secondParam;
                break
            case '*':
                result = currentQuestion.firstParam * currentQuestion.secondParam;
                break
            default:
                result = 0;
                break;
        }

        if (answerValue === result) {
            setIsAnswerCorrect(true);
            setShowMessage(true)
        } else {
            setIsAnswerCorrect(false);
            setShowMessage(true);
        }

        const questionResult: IResult = {
            id: quizResults.length + 1,
            question: currentQuestion,
            yourAnswer: answerValue,
            correctAnswer: result,
            isCorrect: answerValue === result
        }

        setQuizResults([...quizResults, questionResult])
    }
    //******************************************************************************************************************

    //NEXT QUESTION CLICK HANDLER***************************************************************************************
    const nextHandler = () => {
        setShowMessage(false);
        setCurrentQuestion(generateQuestion());
    }
    //******************************************************************************************************************

    if (!currentQuestion) return null;

    return (
        <div>
                <Header/>
            {
                !showMessage && quizResults.length < MAX_QUESTIONS &&
                <QuizQuestion question={currentQuestion} submitHandler={submitHandler}
                              questionNumber={quizResults.length + 1}/>
            }

            {
                showMessage && quizResults.length < MAX_QUESTIONS &&
                <Message isAnswerCorrect={isAnswerCorrect} nextHandler={nextHandler}/>
            }

            {
                quizResults.length === MAX_QUESTIONS &&
                <QuizResultsTable quizresults={quizResults}/>
            }
        </div>
    );
}

export default App;
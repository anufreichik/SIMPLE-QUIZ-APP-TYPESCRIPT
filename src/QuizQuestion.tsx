import React, {useState} from 'react';
import {IQuestion} from "./types";

interface IProps{
    question:IQuestion;
    submitHandler:(answerValue:number)=>void;
    questionNumber:number;
}

function QuizQuestion(props:IProps) {
    const [answerValue, setAnswerValue] = useState(0);

    return (
        <div className="container mt-5 ">
            <div className="card text-center border-primary mb-3 min-vw-75">
                <div className="card-header">Question # {props.questionNumber}</div>
                <div className="card-body text-primary">
                    <h5 className="card-title text-muted font-weight-bold">
                        <div className="row">
                            <div className="col-2"><h2>{props.question.firstParam}</h2></div>
                            <div className="col-1"><h2>{props.question.sign}</h2></div>
                            <div className="col-2"><h2>{props.question.secondParam}</h2></div>
                            <div className="col-1">=</div>
                            <div className="col-2 form-group"><input size={10} type='number'
                                                                     className='form-control w-75'
                                                                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnswerValue(+e.target.value)}
                                                                     placeholder='???'/>
                            </div>
                            <div className="col-md-4">
                                <button className='btn btn-primary' onClick={()=>props.submitHandler(answerValue)}>Submit</button>
                            </div>
                        </div>
                    </h5>
                </div>
            </div>

        </div>
    );
}

export default QuizQuestion;
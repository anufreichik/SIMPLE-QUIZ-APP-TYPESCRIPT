import React from 'react';
import {IPropsQuizResultsTable, IResult} from "./types";
import {FcCheckmark} from "react-icons/all";


function QuizResultsTable(props: IPropsQuizResultsTable) {
    return (
        <>
        <div className="container w-75 mx-auto border border-primary">
            <div className="row font-weight-bold text-muted text-center text-capitalize mb-3 shadow">
                <div className="col-2">Correct</div>
                <div className="col-6">Question</div>
                <div className="col-2">Your Answer</div>
                <div className="col-2">Correct Answer</div>

            </div>
            {props.quizresults.map((el: IResult) =>
                <div key={el.id} className="row text-muted text-center text-capitalize">
                    <div className="col-2">{el.isCorrect && <FcCheckmark/>}</div>
                    <div className="col-6">
                        <h6>
                        {`${el.question.firstParam} ${el.question.sign} ${el.question.secondParam}`}
                        </h6>
                    </div>
                    <div className={`col-2 ${el.isCorrect?'text-success':'text-danger'}`}>{el.yourAnswer}</div>
                    <div className="col-2">{el.correctAnswer}</div>

                </div>
            )}

        </div>
            <div className="container w-75 mx-auto">
            <button className="btn btn-primary mt-2 float-md-right" onClick={()=>props.startover()}>Start Over</button>
            </div>
            </>
    );
}

export default QuizResultsTable;
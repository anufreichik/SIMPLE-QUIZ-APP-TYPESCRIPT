import React from 'react';

interface IProps {
    isAnswerCorrect:boolean;
    nextHandler:()=>void;
}
function Message(props:IProps) {
    return (
        <div>
            <div className="container mx-auto">
                <div className="card text-center border-primary mb-3 min-vw-75">
                    <div className="card-header">Answer Result</div>
                    <div className="card-body text-primary">
                        {props.isAnswerCorrect && <h5 className="text-success card-title">Correct Answer!</h5>}
                        {!props.isAnswerCorrect && <h5 className="text-danger card-title">Incorrect Answer :(</h5>}
                        <button className="btn btn-primary" onClick={() => props.nextHandler()}>Next Question</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Message;
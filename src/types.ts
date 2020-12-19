export interface IQuestion{
    firstParam:number,
    secondParam:number,
    sign: string
}
export interface IResult{
    id:number,
    question:IQuestion,
    yourAnswer:number,
    correctAnswer:number,
    isCorrect:boolean
}

export interface IPropsQuizResultsTable{
    quizresults: IResult[];
}
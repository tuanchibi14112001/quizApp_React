
import { useEffect, useState } from "react"
import useSound from "use-sound";
import play from "../assets/play.mp3"
import correct from "../assets/correct.mp3"
import wrong from "../assets/wrong.mp3"
//import wait from "../assets/wait.mp3"


export default function Quiz({ quizData, setStop, questionNum, setQuestionNum }) {

    const [question, setQuestion] = useState(null);
    const [selected, setSelected] = useState(null);
    const [className, setClassName] = useState("answer");
    const [letsPlay] = useSound(play);
    const [correctAws] = useSound(correct);
    const [wrongAws] = useSound(wrong);
    //const [waitCheck, {stop}] = useSound(wait);

    useEffect(()=>{
        letsPlay();
    },[letsPlay]);



    useEffect(() => {
        setQuestion(quizData[questionNum - 1]);
    }, [quizData, questionNum])


    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    }


    const handelClick = (aws, question) => {
        setSelected(aws);
        setClassName("answer active");
        delay(2000, ()=> {
            setClassName(aws.correct? "answer correct" : "answer wrong");
        });
        delay(5000, () =>{
            if(aws.correct){
                //stop();
                correctAws();
                if(question.id < 15)
                {
                delay(1000, ()=>{
                    setQuestionNum((prev)=> prev+1)
                    setSelected(null);
                });
            }
                else {
                    setQuestionNum((prev)=> prev+1)
                    setStop(true);
                }
                
            }
            else{
                //stop();
                wrongAws();
                delay(1000, ()=>{
                    setStop(true);
                });
            }
        });
    }


    return (
        <div className="quiz">
            {/* {waitCheck()} */}
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((answer) => (
                    <div className={selected === answer ? className : "answer"} onClick={() => handelClick(answer, question)} >{answer.text}</div>
                ))
                }
            </div>

        </div>
    )
}
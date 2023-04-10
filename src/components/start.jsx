import { useRef, useEffect } from "react";
import useSound from "use-sound";
import startMusic from "../assets/start.mp3"

export default function Start({ setUserName }){
    const inputRef = useRef();
    const [start_mp3, {stop}] = useSound(startMusic);

    useEffect(()=>{
        start_mp3();
    },[start_mp3]);
    
    const handleSubmit = () => {
        stop();
        inputRef.current.value && setUserName(inputRef.current.value);
    };

    return (
        <div className="start">
            <h3 style={{paddingBottom: "10px"}}>QUIZ APP</h3>
            <form onSubmit={handleSubmit}>
            <input placeholder="enter your name" required className="startInput" ref = {inputRef}/>
            <input type="submit" className="startButton" value = "Start"/>
            </form>
        </div>
    )
}
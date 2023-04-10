
import { useEffect, useState } from "react"
import useSound from "use-sound";
import wrong from "../assets/wrong.mp3";
// 30s => 0s
export default function Time({setStop, questionNum}){

    const [time, setTime] = useState(60);
    const [wrongAws] = useSound(wrong);

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(time === 0) {
                wrongAws();
                return setStop(true);
            }
            setTime((prev)=>prev -1);
        },1000);
        return ()=>clearInterval(interval);
    },[setStop, time, wrongAws])

    useEffect(()=>{
        setTime(60);
    },[questionNum]);

    return time;
}
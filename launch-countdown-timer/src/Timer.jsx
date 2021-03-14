import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props) => {
    const {initialDay=10,initialHour=23,initialMinute = 60,initialSeconds = 0} = props;
    const [ days, setDays ] = useState(initialDay);
    const [ hours, setHours] = useState(initialHour);
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
            if (minutes === 0) {
                if (hours === 0) {
                    clearInterval(myInterval)
                } else {
                    setHours(hours - 1);
                    setMinutes(59);
                }
            }
            if (hours === 0) {
                if (days === 0) {
                    clearInterval(myInterval)
                } else {
                    setDays(days - 1);
                    setHours(23);
                }
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div>
        { minutes === 0 && seconds === 0
            ? null
            : <h1> {days}:{hours}:{minutes < 10 ?  `0${minutes}` : minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
    )
}

export default Timer;
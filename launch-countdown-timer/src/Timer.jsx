import React from 'react'
import { useState, useEffect } from 'react';
import './styles/style.css';


const Timer = (props) => {
    const { initialDay = 10, initialHour = 23, initialMinute = 60, initialSeconds = 0 } = props;
    const [days, setDays] = useState(initialDay);
    const [hours, setHours] = useState(initialHour);
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);
    useEffect(() => {
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
        return () => {
            clearInterval(myInterval);
        };
    });

    const number = (e) => {
        return <div class="num-container">
            <div class="num">
                {e < 10 ?
                    <>
                        <div class="top">0{e}</div>
                        <div class="bottom"><div class="shift">0{e}</div></div>
                    </>
                    :
                    <>
                        <div class="top">{e}</div>
                        <div class="bottom"><div class="shift">{e}</div></div>
                    </>
                }
            </div>
        </div>
    }

    return (
        <div className="counter">
            { minutes === 0 && seconds === 0
                ? null
                : <div> {number(days)}
            :{number(hours)}
            :{number(minutes)}
            :{number(seconds)}</div>
            }


        </div>
    )
}

export default Timer;
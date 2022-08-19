import React, { useEffect, useState } from "react";
import classes from "./Timer.module.css";

const Timer = (props) => {
    const WORK_MINUTES = props.workMinutes;
    const WORK_SECONDS = props.workSeconds;

    const BREAK_MINUTES = props.breakMinutes;
    const BREAK_SECONDS = props.breakSeconds;
    const workBgColor = "#b3ffb3";
    const breakBgColor = "#ffffb3";

    const [timerState, setTimerState] = useState("work"); // work or break
    const [minutes, setMinutes] = useState(WORK_MINUTES);
    const [seconds, setSeconds] = useState(WORK_SECONDS);
    const [startTimer, setStartTimer] = useState(false);
    const [title, setTitle] = useState("Press start button to start timer");

    const startTimerHandler = () => {
        setStartTimer(true);
        timerState === "work"
            ? setTitle("Time to work")
            : setTitle("Time for a break");
    };
    const stopTimerHandler = () => {
        setStartTimer(false);
        setTitle("Timer has been stopped");
    };

    const resetTimerHandler = () => {
        setMinutes(WORK_MINUTES);
        setSeconds(WORK_SECONDS);
        setTimerState("work");
        setStartTimer(false);
        setTitle("Press start button to start timer");
    };

    // used useEffect to get the latest value for timerState after changing state
    useEffect(() => {
        if (!startTimer) return;
        switch (timerState) {
            case "work":
                setMinutes(WORK_MINUTES);
                setSeconds(WORK_SECONDS);
                setTitle("Time to work");
                break;
            case "break":
                setMinutes(BREAK_MINUTES);
                setSeconds(BREAK_SECONDS);
                setTitle("Time for a break");
                break;
            default:
        }
    }, [
        BREAK_MINUTES,
        BREAK_SECONDS,
        WORK_MINUTES,
        WORK_SECONDS,
        startTimer,
        timerState,
    ]);

    // const changeState = () => {

    // };

    useEffect(() => {
        if (!startTimer) return;
        let interval = setInterval(() => {
            setSeconds(seconds - 1);
            if (seconds === 0) {
                if (minutes !== 0) {
                    setMinutes((prevState) => prevState - 1);
                    setSeconds(59);
                } else {
                    timerState === "work"
                        ? setTimerState("break")
                        : setTimerState("work");
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds, minutes, startTimer, timerState]);

    let minutesDisplay = minutes.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
    });

    let secondsDisplay = seconds.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
    });

    let bodyColor = startTimer // <- check if timer is on
        ? timerState === "work" // if timer is on - check current state of timer i.e work or break
            ? workBgColor // if work, set color to light green
            : breakBgColor // if break, set color to light yellow
        : "white"; // if timer is off set bgcolor to white

    return (
        <div className={classes["timer-container"]}>
            <style>{`body{background-color: ${bodyColor};}`}</style>
            <h1 className={classes["h1-timer"]}>{title}</h1>
            <h2
                className={classes["h2-timer"]}
            >{`${minutesDisplay}:${secondsDisplay}`}</h2>
            <div className={classes["button-container"]}>
                <button
                    className={`${classes["start-btn"]} ${classes["btn"]}`}
                    onClick={startTimerHandler}
                >
                    Start
                </button>
                <button
                    className={`${classes["stop-btn"]} ${classes["btn"]}`}
                    onClick={stopTimerHandler}
                >
                    Stop
                </button>
                <button
                    className={`${classes["restart-btn"]} ${classes["btn"]}`}
                    onClick={resetTimerHandler}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Timer;

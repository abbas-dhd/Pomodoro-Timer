import { useState } from "react";
import "./App.css";
import Authenticator from "./components/Authenticator";
import Timer from "./components/Timer";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const loginHandler = (result) => {
        if (result) {
            setLoggedIn(true);
        } else setLoggedIn(false);
    };

    return (
        <div className="App">
            <h1 className="title">Pomodoro Timer</h1>
            {!loggedIn ? (
                <Authenticator onLogin={loginHandler} />
            ) : (
                <Timer
                    workMinutes={25}
                    workSeconds={0}
                    breakMinutes={5}
                    breakSeconds={0}
                />
            )}
        </div>
    );
}

export default App;

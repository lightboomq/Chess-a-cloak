import React from "react";
import s from "./style.module.css";
function Timer({
	setActiveTimePlayer,
	isRunningPlayer,
	valueRotate,
	opponentTime,
}) {
	const hour = 60;
	const localMinutes = Number(localStorage.getItem("minutes"));
	const initialSeconds = localMinutes * hour;
	const [time, setTime] = React.useState(initialSeconds);

	const initialMinutes = String(Math.floor(initialSeconds / hour));
	const [minutes, setMinutes] = React.useState(initialMinutes);
	const [seconds, setSeconds] = React.useState("00");

	React.useEffect(() => {
		let timerId;
		setActiveTimePlayer(`${minutes} : ${seconds}`);
		function tick() {
			const mins = Math.floor(time / hour);
			const secs = time % hour;
			setMinutes(mins < 10 ? `0${mins}` : `${mins}`);
			setSeconds(secs < 10 ? `0${secs}` : `${secs}`);
			setTime(time - 1);
		}

		if (isRunningPlayer) {
			timerId = setInterval(tick, 1000);
		}

		return () => clearInterval(timerId);
	}, [time, isRunningPlayer, minutes, seconds, setActiveTimePlayer]);

	return (
		<div className={s.wrapperPlayer}>
			<h1
				style={{ rotate: valueRotate }}
				className={isRunningPlayer ? `${s.timer} ${s.timerActive}` : s.timer}
			>{`${minutes}:${seconds}`}</h1>

			<h2 style={{ rotate: valueRotate }} className={s.opponentTime}>
				{opponentTime}
			</h2>
		</div>
	);
}

export default Timer;

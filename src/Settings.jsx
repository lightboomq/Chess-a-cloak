import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";

function Settings() {
	const [inputValue, setInputValue] = React.useState("");
	const navigate = useNavigate();
	function getValue(e) {
		const value = e.target.value;
		if (value.length > 2) return;
		if (value === "") return setInputValue("");
		setInputValue(Number(value));
	}

	function handleStart() {
		localStorage.setItem("minutes", inputValue);
		navigate("/game");
	}
	return (
		<div className={s.wrapper}>
			<input value={inputValue} onChange={getValue} type="number" />

			<button
				type="button"
				className={s.btnStart}
				disabled={inputValue === "" || inputValue < 2}
				onClick={handleStart}
			>
				Начать
			</button>
		</div>
	);
}

export default Settings;

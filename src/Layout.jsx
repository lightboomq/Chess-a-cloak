import React from "react";
import { Outlet } from "react-router-dom";
import s from "./style.module.css";

function Layout() {
	return (
		<div className={s.wrapper}>
			
				<Outlet /> {/* В Outlet будет подставляться содержимое текущего маршрута */}                          
			
		</div>
	);
}

export default Layout;

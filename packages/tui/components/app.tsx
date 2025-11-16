import React from "react";
import { Box, Text, render } from "ink";
import Auth from "./auth/auth.js";
import figlet from "figlet";

const title = figlet.textSync("WIRE", { font: "ANSI Shadow", horizontalLayout: "default", verticalLayout: "default" });
export default function App() {
	return (

		<Box flexDirection="column" padding={1}>
			<Text color="#4ea1c2">{title}</Text>
			<Text> Welcome to Wire. To get started, select any option below.</Text>
			<Auth />


		</Box>

	)
}

render(<App />);

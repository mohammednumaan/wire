import { Select } from "@inkjs/ui";
import { Box } from "ink";
import { useState } from "react";
import Login from "./login.js";
import Signup from "./signup.js";

export default function Auth() {

	const [showForm, setShowForm] = useState(false);
	const [mode, setMode] = useState<"login" | "signup">("login");
	return (


		<Box>
			{!showForm ? (
				<Select
					options={[{ label: "Login", value: "Login" }, { label: "Signup", value: "Signup" }]}
					onChange={(item: string) => {
						setMode(item.toLowerCase() as "login" | "signup");
						setShowForm(true);
					}}
				/>
			) : (

				mode === "login" ? <Login /> : <Signup />
			)}
		</Box>
	)
} 

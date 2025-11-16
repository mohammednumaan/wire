import { useState } from "react";
import { Box, Text } from "ink";
import { PasswordInput, TextInput } from "@inkjs/ui";
import figlet from "figlet";

const title = figlet.textSync("SIGNUP", {
	font: "ANSI Shadow",
	horizontalLayout: "default",
	verticalLayout: "default"
});

const Signup = () => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [activeInput, setActiveInput] = useState<"username" | "password" | "confirm-password">("username");


	return (
		<Box flexDirection="column" padding={1}>
			<Text color="#4ea1c2">{title}</Text>
			< Text > Welcome to Wire. Signup to get started.</Text>

			<Box marginTop={1} flexDirection="column" borderStyle="single" borderColor="gray" paddingLeft={1}>
				<Text color="#b8dce9">Username:</Text>
				<TextInput isDisabled={activeInput !== "username"} placeholder={"Enter your username..."} value={username} onChange={(value: string) => setUsername(value)} onSubmit={() => setActiveInput("password")} />
			</Box>


			<Box marginTop={1} flexDirection="column" borderStyle="single" borderColor="gray" paddingLeft={1}>
				<Text color="#b8dce9">Password:</Text>
				<PasswordInput isDisabled={activeInput !== "password"} placeholder={"Enter your password..."} value={password} onChange={(value: string) => setPassword(value)} />

			</Box>

			<Box marginTop={1} flexDirection="column" borderStyle="single" borderColor="gray" paddingLeft={1}>
				<Text color="#b8dce9">Confirm Password</Text>
				<PasswordInput isDisabled={activeInput !== "confirm-password"} placeholde={"Confirm password..."} placeholder={"Confirm password..."} value={confirmPassword} onChange={(value: string) => setConfirmPassword(value)} />

			</Box>

			<Box marginTop={1}>
				<Text color="gray">[Press Enter to continue — no logic yet]</Text>
			</Box>
		</Box>
	);
};

export default Signup;


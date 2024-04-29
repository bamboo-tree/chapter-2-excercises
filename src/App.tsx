import "./App.css";
import { Text, Button, Header } from "./ui";

// TODO: Create stories for every ui component
function App() {
	return (
		<>
			<Text label="Text" />
			<Header label="Header" />
			<Button
				label="Button"
				onClick={() => {
					console.log("button clicked");
				}}
				className={"hover:bg-yellow-600"}
			/>
		</>
	);
}

export default App;

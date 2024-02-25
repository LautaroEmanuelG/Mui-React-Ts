import { Button, Container, Typography } from '@mui/material';

function App() {
	return (
		<Container
			maxWidth="md"
			sx={{ border: 2, boxShadow: 3 }}>
			<h1>Hola gente</h1>
			<Typography variant="h1">h1 con MUI</Typography>
			<Button variant="contained">Clikeame</Button>
		</Container>
	);
}

export default App;

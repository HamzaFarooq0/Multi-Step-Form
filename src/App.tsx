import React from 'react';
import MainForm from './components/Form/MainForm';
import MaterialLayout from './components/Layout/MaterialLayout';
import './App.css'

function App() {
	return (
		<div className="App">
			<MaterialLayout>
				<MainForm />
			</MaterialLayout>
		</div>
	);
}

export default App;

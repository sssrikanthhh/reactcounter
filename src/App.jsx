import Timer from './Timer';
import './App.css';

const App = () => {
	return (
		<div className='app'>
			<h1>React Counter</h1>
			<Timer initialTime={1} endTime={50} />
		</div>
	);
};

export default App;

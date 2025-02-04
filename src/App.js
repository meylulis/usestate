import logo from './logo.svg';
import './App.css';
import SimpleCounter from './components/counter';
import DisplayText from './components/text';
import LightSwitch from './components/switch';
import SimpleList from './components/list';

function App() {
  return (
    <div className="App">
      <SimpleCounter />
      <DisplayText/>
      <LightSwitch/>
      <SimpleList/>
    </div>
  );
}

export default App;

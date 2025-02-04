import logo from './logo.svg';
import './App.css';
import SimpleCounter from './components/counter';
import DisplayText from './components/text';
import LightSwitch from './components/switch';
import SimpleList from './components/list';
import PostList from './components/PostList';
import Timer from './components/timer';
import UserProfile from './components/userprofile';

function App() {
  return (
    <div className="App">
      <SimpleCounter />
      <DisplayText/>
      <LightSwitch/>
      <SimpleList/>
      <PostList/>
      <Timer/>
      <UserProfile/>
    </div>
  );
}

export default App;

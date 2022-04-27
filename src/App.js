
import './App.css';
import Checkbox from './components/Checkbox';

function App() {
  return (
    <div className="App">
      StoryBook App
      <Checkbox label="terms & conditiond" onChange={()=>console.log("onChange() from App")}/>
    </div>
  );
}

export default App;

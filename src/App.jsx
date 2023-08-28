import './App.css';
import { Counseling } from './pages/Counseling';
import { MyHistory } from './pages/MyHistory';
import { Upload } from './pages/Upload';

function App() {
  return (
    <>
      <h1>MIND STEP</h1>
      <div className="chat-container">
        <Counseling />
      </div>
      {/* <MyHistory></MyHistory> */}
      {/* <Upload /> */}
    </>
  );
}

export default App;

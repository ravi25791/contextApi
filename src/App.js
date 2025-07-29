import { useState } from 'react';
import './App.css';
import CollageCop from './component/CollageCop';
import { SubjectsContext } from './component/contextApi/Context';

function App() {
  const [subject, setSubject] = useState('')
  return (
    <div className="App" style={{ backgroundColor: 'yellow', padding: 40 }}>
      <h1>Hello Context Api</h1>
      <SubjectsContext.Provider value={subject}>

        <select value={subject} onChange={(event) => setSubject(event.target.value)}>
          <option value="">Select Subject</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Math">Math</option>
          <option value="History">History</option>
        </select>
        <button onClick={() => setSubject('')}>Clear Subject</button>
        <CollageCop />
      </SubjectsContext.Provider>
    </div>
  );
}

export default App;

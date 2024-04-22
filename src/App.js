
import './App.css';
import {Routes,Route} from "react-router-dom";


import Counter from './Counter';

function App() {
  return (
    <div className="App">
     <Routes>
      
   
      <Route path="/Counter" element={<Counter />}></Route>
     
     </Routes>
    </div>
  );
}

export default App;

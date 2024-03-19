import Signup from "./Signup";
// eslint-disable-next-line no-unused-vars
import Login from "./login";
import { BrowserRouter,Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup /> }></Route>
      <Route path="/Register" element={<Signup /> }></Route>
      <Route path="/login" element={<Login /> }></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

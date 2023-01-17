import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
      
      
        <Route path ="/login" element={<Login/>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import Books from "./pages/Books/Books";

import Categories from "./pages/Categories/Categories";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";
import Issuances from "./pages/Issuances/Issuances";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./style/style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/books" element={<Books />} />
          <Route path="/users" element={<Users />} />
          <Route path="/issuances" element={<Issuances />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

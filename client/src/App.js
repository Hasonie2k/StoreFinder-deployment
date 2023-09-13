
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import StoreForm from "./components/StoreForm";
import DisplayOne from "./components/DisplayOne";
import EditStore from "./components/EditStore"


function App() {
  return (
    <div className="App">
      <h1>Store Finder</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAll />} />
          <Route path="/new" element={<StoreForm/>} />
          <Route path="/view/:id" element={<DisplayOne/>} />
          <Route path="/edit/:id" element={<EditStore/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
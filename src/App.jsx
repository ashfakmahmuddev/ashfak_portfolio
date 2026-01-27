import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayouts from "./components/layouts/RootLayouts";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <div className="bg-[#1E2939]">
        <Routes>
          <Route path="/" element={<RootLayouts />}>
            <Route index element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

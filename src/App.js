import Main from "./components/pages/Main";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./components/pages/Home";
import BoxShadow from "./components/pages/BoxShadow";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isOpenNav, setIsOpen] = useState(false);
  console.log(isOpenNav);
  return (
    <Main isOpen={isOpenNav} setIsOpen={() => setIsOpen(false)}>
      <AnimatePresence>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setIsOpen={() => setIsOpen(!isOpenNav)}
                isOpen={isOpenNav}
              />
            }
          />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="*" element={<h1>Not found</h1>} />
          <Route path="/boxShadow" element={<BoxShadow />} />
        </Routes>
      </AnimatePresence>
    </Main>
  );
}

export default App;

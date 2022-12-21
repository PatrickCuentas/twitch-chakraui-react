import Layout from "./Layouts";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Browse from "./pages/Browse";
import Streamer from "./pages/Streamer";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/streamer/:id" element={<Streamer />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </Layout>
  );
}

export default App;

import "./App.css";

import { Outlet } from "react-router-dom";
import Header from "./webcomponents/Header";
import Footer from "./webcomponents/Footer";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

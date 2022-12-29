import "./App.css";
import AOS from "aos";
import "antd/dist/reset.css";
import Routers from "./routes";

function App() {
  AOS.init();
  return <Routers />;
}

export default App;

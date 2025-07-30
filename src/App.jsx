import Header from "./components/header/Header";
import HomeRouters from "./routers/HomeRouters";
import "./App.css"
import Slider from "./components/pages/Slider";
import { Router } from "react-router-dom";
function App(props) {

    return (

        <div className="flex flex-col h-screen overflow-hidden">
            <Slider />
            {/* < Header />
            <HomeRouters /> */}
        </div>
    );
}

export default App;
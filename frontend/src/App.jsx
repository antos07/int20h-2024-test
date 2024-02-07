import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Auctions} from "./components/Auctions";
import {AuctionsIndex} from "./components/AuctionsIndex";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auctions/>}>
                    <Route index element={<AuctionsIndex/>}/>
                    {/*    тута інші роути, які будуть з контентом
                        (в контент рут будуть хедер + футтер)   */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

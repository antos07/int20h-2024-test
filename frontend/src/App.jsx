import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Auctions} from "./components/Auctions";
import {AuctionsIndex} from "./components/AuctionsIndex";
import {AuctionDetails} from "./components/AuctionDetails";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auctions/>}>
                    <Route index element={<AuctionsIndex/>}/>
                    <Route path={"auctions/:auctionId"} element={<AuctionDetails/>}/>
                    {/*    тута інші роути, які будуть з контентом
                        (в контент рут будуть хедер + футтер)   */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

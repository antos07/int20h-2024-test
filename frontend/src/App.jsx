import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Auctions} from "./components/Auctions";
import {AuctionsIndex} from "./components/AuctionsIndex";
import {AuctionDetails} from "./components/AuctionDetails";
import {loadCurrentUser} from "./api";

const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: <Auctions/>,
        loader: () => loadCurrentUser(),
        children: [
            {
                index: true,
                element: <AuctionsIndex/>
            },
            {
                path: "auctions/:auctionId",
                element: <AuctionDetails/>
            },
        ]
    },
])

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;

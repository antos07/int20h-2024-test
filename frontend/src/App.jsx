import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Auctions} from "./components/Auctions";
import {AuctionsIndex} from "./components/AuctionsIndex";
import {AuctionDetails} from "./components/AuctionDetails";
import {listAuctions, loadCurrentUser} from "./api";
import {AddEditAuctions} from "./components/AddEditAuctions";

const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: <Auctions/>,
        loader: () => loadCurrentUser(),
        children: [
            {
                index: true,
                element: <AuctionsIndex/>,
                loader: () => listAuctions(),
            },
            {
                path: "auctions/:auctionId",
                element: <AuctionDetails/>
            },
            {
                path: "auctions/create",
                element: <AddEditAuctions/>
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

import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Auctions} from "./components/Auctions";
import {AuctionsIndex} from "./components/AuctionsIndex";
import {AuctionDetails} from "./components/AuctionDetails";
import {createAuction, editAuction, getAuctionInfo, listAuctions, loadCurrentUser} from "./api";
import {EditAuction} from "./components/EditAuction";

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
                element: <AuctionDetails/>,
                loader: ({ params }) => {
                    return getAuctionInfo(params.auctionId);
                },
            },
            {
                path: "auctions/create",
                element: <EditAuction formTitle="Create a new auction" onSaveAction={createAuction}/>,
            },
            {
                path: "auctions/:auctionId/edit",
                element: <EditAuction formTitle="Edit an auction" onSaveAction={editAuction} fillForm/>,
                loader: ({ params }) => {
                    return getAuctionInfo(params.auctionId);
                },
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

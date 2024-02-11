import {NewBid} from "./NewBid";
import {BidList} from "./BidList";
import {useRouteLoaderData} from "react-router-dom";

export const BidListTab = ({auction, bids}) => {
    const currentUser = useRouteLoaderData("root");
    return (
        <>
            {currentUser && auction && auction.active && <NewBid/>}
            <BidList
                bids={bids}
                final={auction && !auction.active}
            />
        </>
    )
}
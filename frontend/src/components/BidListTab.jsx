import {NewBid} from "./NewBid";
import {BidList} from "./BidList";
import {useRouteLoaderData} from "react-router-dom";

export const BidListTab = ({auction}) => {
    const currentUser = useRouteLoaderData("root");
    return (
        <>
            {currentUser && auction && auction.end_date > new Date() && <NewBid auction={auction}/>}
            <BidList
                final={auction && !(auction.end_date > new Date())}
                auction={auction}
            />
        </>
    )
}
import {NewBid} from "./NewBid";
import {BidList} from "./BidList";

export const BidListTab = ({auction, bids}) => {
    return (
        <>
            {auction && auction.active && <NewBid/>}
            <BidList
                bids={bids}
                final={auction && !auction.active}
            />
        </>
    )
}
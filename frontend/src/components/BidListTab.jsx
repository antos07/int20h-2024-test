import {Typography} from "@mui/material";
import {NewBid} from "./NewBid";
import {BidList} from "./BidList";

export const BidListTab = ({auction, bids}) => {
    return (
        <>
            {auction.active && <NewBid/>}
            <BidList
                bids={bids}
                final={!auction.active}
            />
        </>
    )
}
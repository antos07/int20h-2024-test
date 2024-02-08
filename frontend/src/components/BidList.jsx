import {grey} from "@mui/material/colors";
import {Bid} from "./Bid";
import {List} from "@mui/material";

export const BidList = ({bids, final}) => {
    return (
        <List
            sx={{
                borderStyle: "solid",
                borderColor: grey[200],
                overflow: "auto",
                maxHeight: 525,
            }}
            disablePadding
        >
            {
                bids && bids.map((bid, i) => <Bid
                        bid={bid}
                        last={i === 0}
                        divider={i !== bids.length - 1}
                        final={i === 0 & final}
                    />
                )}
        </List>
    )
}
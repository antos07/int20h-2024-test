import {ListItem, ListItemText, Typography} from "@mui/material";
import {localizeDate} from "../utils";
import {green} from "@mui/material/colors";

export const Bid = ({bid, last, divider, final}) => {
    return (
        <ListItem
            selected={last && !final}
            divider={divider}
            sx={final && {
                backgroundColor: green[100]
            }}
        >
            <ListItemText
                primary={`${bid.price}$`}
                secondary={
                    <>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            @{bid.author}
                        </Typography>
                        {" - " + localizeDate(bid.timestamp)}
                    </>
                }
            />
        </ListItem>
    )
}
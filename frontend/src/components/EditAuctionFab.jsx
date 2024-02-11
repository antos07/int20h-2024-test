import EditIcon from "@mui/icons-material/Edit";
import {Fab} from "@mui/material";
import {Link} from "react-router-dom";

export const EditAuctionFab = ({auction}) => {
    return (
        <Fab
            color="secondary"
            aria-label="edit"
            sx={{position: 'fixed', bottom: '10%', right: '10%'}}
            component={Link}
            to='edit'
        >
            <EditIcon/>
        </Fab>
    )
}
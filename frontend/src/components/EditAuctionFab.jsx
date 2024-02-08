import EditIcon from "@mui/icons-material/Edit";
import {Fab} from "@mui/material";

export const EditAuctionFab = ({auction}) => {
    return (
        <Fab color="secondary" aria-label="edit" sx={{position: 'fixed', bottom: '10%', right: '10%'}}>
            <EditIcon/>
        </Fab>
    )
}
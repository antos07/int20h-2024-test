import Grid from "@mui/material/Unstable_Grid2";
import {Button, TextField} from "@mui/material";
import {createAuction, createBid} from "../api";
import {useNavigate} from "react-router-dom";


export const NewBid = ({auction}) => {
    const navigate = useNavigate();
    const saveBid = async () => {
        const bid = {
            offer: +document.getElementById("newBid").value,
            auctionId: auction.id,
        }
        if (await createBid(bid)) {
            navigate(0);
            return;
        }
        alert("Error");
    }

    return (
        <Grid container spacing={2} sx={{my: 1}}>
            <Grid xs={3} display="flex" justifyContent="left" alignItems="center">
                <TextField
                    id={"newBid"}
                    label="Your bid"
                    type="number"
                />
            </Grid>
            <Grid xs={6} display="flex" justifyContent="left" alignItems="center">
                <Button variant="contained" onClick={saveBid}>Bid</Button>
            </Grid>
        </Grid>
    )
}
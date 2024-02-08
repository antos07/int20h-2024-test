import Grid from "@mui/material/Unstable_Grid2";
import {Button, TextField} from "@mui/material";

export const NewBid = () => {
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
                <Button variant="contained">Bid</Button>
            </Grid>
        </Grid>
    )
}
import {Box, Paper, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {localizeDate} from "../utils";
import {BidDetailTabs} from "./BidDetailTabs";
import {EditAuctionFab} from "./EditAuctionFab";
import {useRouteLoaderData, useLoaderData} from "react-router-dom";
import {getAllBids} from "../api";

export const AuctionDetails = () => {
    const currentUser = useRouteLoaderData("root");
    const auction = useLoaderData();

    const activeUsers = [
        {name: "antos07"},
        {name: "SiIence_o0"},
    ]

    return (
        <>
            <Paper sx={{padding: 3}}>
                <Grid container spacing={3}>
                    <Grid xs={12} md={6}>
                        <Typography variant={'h4'}>{auction.title}</Typography>
                        <Typography variant="subtitle2">by {auction.authorName}</Typography>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Typography variant="body1">Start: {localizeDate(auction.start_date)}</Typography>
                        <Typography variant="body1">End: {localizeDate(auction.end_date)}</Typography>
                    </Grid>
                    <Grid container xs={12} md={6} spacing={3} sx={{height: 1}}>
                        <Grid xs={12}>
                            <Box component="img" src={auction.image} alt={auction.title}
                                 sx={{height: 350, objectFit: "cover", borderRadius: 1, maxWidth: 1}}/>
                        </Grid>
                        <Grid xs={12} sx={{height: 1}}>
                            <Typography variant="body1">{auction.description}</Typography>
                        </Grid>
                    </Grid>

                    <Grid xs={12} md={6} spacing={2} sx={{height: 1}}>
                        <BidDetailTabs auction={auction} activeUsers={activeUsers}/>
                    </Grid>
                </Grid>
            </Paper>
            {auction.amIAuthor && (<EditAuctionFab auction={auction} sx={{color: 'primary.strongDark'}}/>)}
        </>
    )
}
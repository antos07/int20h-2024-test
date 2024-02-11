import {Box, Paper, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {localizeDate} from "../utils";
import {BidDetailTabs} from "./BidDetailTabs";
import {EditAuctionFab} from "./EditAuctionFab";
import {useRouteLoaderData, useLoaderData} from "react-router-dom";

export const AuctionDetails = () => {
    const currentUser = useRouteLoaderData("root");
    const auction = useLoaderData();

    const bids = [
        {
            id: 6,
            author: "antos07",
            price: "100",
            timestamp: new Date(),
        },
        {
            id: 5,
            author: "antos07",
            price: "90",
            timestamp: new Date(),
        },
        {
            id: 4,
            author: "antos07",
            price: "70",
            timestamp: new Date(),
        },
        {
            id: 3,
            author: "antos07",
            price: "50",
            timestamp: new Date(),
        },
        {
            id: 2,
            author: "antos07",
            price: "20",
            timestamp: new Date(),
        },
        {
            id: 1,
            author: "antos07",
            price: "10",
            timestamp: new Date(),
        },
        {
            id: 0,
            author: "SiIence_o0",
            price: "5",
            timestamp: new Date(),
        },
        {
            id: 10,
            author: "antos07",
            price: "3",
            timestamp: new Date(),
        },
    ]
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
                        <Typography variant="subtitle2">by {auction.author}</Typography>
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
                        <BidDetailTabs auction={auction} bids={bids} activeUsers={activeUsers}/>
                    </Grid>
                </Grid>
            </Paper>
            {
                currentUser
                && auction.author === currentUser.username
                && auction.end_date
                && auction.end_date > new Date()
                && <EditAuctionFab auction={auction} sx={{color: 'primary.strongDark'}}/>
            }
        </>
    )
}
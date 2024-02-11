import {Card, CardActionArea, CardContent, CardHeader, CardMedia, Fab, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AddIcon from '@mui/icons-material/Add';
import {Link, useLoaderData, useRouteLoaderData} from "react-router-dom";
import {localizeDate} from "../utils";

function AuctionCard({auction}) {

    return <Card>
        <CardActionArea sx={{height: '500px', minWeight: '400px'}} component={Link} to={`auctions/${auction.id}`}>
            <CardHeader
                title={auction.title}
                subheader={<>
                    <Typography>{auction.author}</Typography>
                    <Typography variant={'subtitle2'} sx={{fontSize: 12, fontFamily: 'Arial'}}>
                        {localizeDate(auction.start_date)} - {localizeDate(auction.end_date)}
                    </Typography>
                </>}
            />
            <CardMedia
                sx={{height: 250, objectFit: "contain"}}
                image={auction.image}/>
            <CardContent>
                <Typography variant="body2" color={"text.secondary"}>
                    {auction.description}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
}

export const AuctionsIndex = () => {
    const currentUser = useRouteLoaderData("root");
    const auctions = useLoaderData();

    return (
        <>
            <Typography variant={"h4"} m={2}>Select an auction</Typography>
            <Grid container spacing={2} sx={{mx: 'auto', my: 1}}>
                {
                    auctions.map((auction) => <Grid xs={12} sm={6} md={4} lg={3}>
                        <AuctionCard auction={auction}/>
                    </Grid>)
                }
            </Grid>
            {
                currentUser && <Fab color="secondary" aria-label="add"
                                    sx={{position: 'fixed', bottom: '10%', right: '10%'}}>
                    <AddIcon/>
                </Fab>
            }
        </>
    );
}
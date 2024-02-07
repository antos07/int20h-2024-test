import {Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function AuctionCard({auction}) {
    const localizeDate = (date) => date && date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    });

    return <Card sx={{height: '500px'}}>
        <CardActionArea component={Link} to={`auctions/${auction.id}`}>
            <CardHeader
                title={auction.title}
                subheader={<>
                    <Typography>@{auction.author}</Typography>
                    <Typography variant={'subtitle2'}>
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
    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        setAuctions([
            {
                id: 1,
                title: "Auction 1",
                description: "Some cool auction",
                start_date: new Date(),
                end_date: new Date(),
                author: "antos07",
                image: "https://broken.image"
            },
            {
                id: 2,
                title: "Auction 2",
                description: "Another reaaaaaaaaaaaaaaaally cool auction",
                start_date: new Date(),
                end_date: new Date(),
                author: "SiIence_o0",
                image: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc"
            },
            {
                id: 3,
                title: "Auction 3",
                description: "I want to call my database API to information regarding a users public_address(metamask), first_name and last_name.\n" +
                    "\n" +
                    "Once I have this data (I call an api), I then use the mapping function in a list and then generate ListButtonItems for each element in my list.\n" +
                    "\n" +
                    "What I have done\n" +
                    "\n" +
                    "My API call is working perfectly fine, but the issue is my result array isn't populating, for example, when I retrieve my response (response is successfully fetched from the API), I add all the contents from my response to an array variable, this array always however appear s empty (I think this is due to the async nature of axios)\n" +
                    "\n" +
                    "Code",
                start_date: new Date(),
                end_date: new Date(),
                author: "SiIence_o0",
                image: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc"
            }
        ])
    }, []);

    return (
        <Grid container spacing={2} sx={{mx: 'auto', mt: 1}}>
            {
                auctions.map((auction) => <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
                    <AuctionCard auction={auction}/>
                </Grid>)
            }
        </Grid>
    );
}
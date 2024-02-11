import {List, ListItem, ListItemText} from "@mui/material";
import {grey} from "@mui/material/colors";
import {useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";
import {listAuctionActiveUsers} from "../api";

export const UserList = () => {
    const auction = useLoaderData();
    const [activeUsers, setActiveUsers] = useState([]);

    useEffect(() => {
        (async () => {
            setActiveUsers(await listAuctionActiveUsers(auction.id));
        })()
    });

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
                activeUsers && activeUsers.map((user, i) =>
                    <ListItem divider={i !== user.length - 1}>
                        <ListItemText primary={user.name}/>
                    </ListItem>
                )
            }
        </List>
    )
}
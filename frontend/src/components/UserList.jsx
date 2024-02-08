import {List, ListItem, ListItemText} from "@mui/material";
import {grey} from "@mui/material/colors";

export const UserList = ({activeUsers}) => {
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
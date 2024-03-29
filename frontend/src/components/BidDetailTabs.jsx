import {useState} from "react";
import {Box, Card, Tab} from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {BidListTab} from "./BidListTab";
import {UserListTab} from "./UserListTab";

export const BidDetailTabs = (props) => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card sx={{width: '100%', minHeight: 650, height: 1}}>
            <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <TabList onChange={handleChange}>
                        <Tab label="Bids" value="1"/>
                        <Tab label="Active Users" value="2"/>
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <BidListTab {...props}/>
                </TabPanel>
                <TabPanel value="2">
                    <UserListTab {...props}/>
                </TabPanel>
            </TabContext>
        </Card>
    );
}
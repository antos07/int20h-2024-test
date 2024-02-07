import {useState} from "react";
import {Box, Tab} from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {BidListTab} from "./BidListTab";

export const BidDetailTabs = (props) => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%', maxHeight: 600}}>
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
                <TabPanel value="2">Users</TabPanel>
            </TabContext>
        </Box>
    );
}
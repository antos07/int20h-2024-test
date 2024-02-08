import {createTheme} from "@mui/material";
import {green, grey, purple, red} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: '#CBFCD9',
            light: '#E8FFEF',
            dark: green[400],
            strongDark: '#043818',
        },
        gradient:
            'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                color: "grey",
            }
        }
    }
});
export default theme;


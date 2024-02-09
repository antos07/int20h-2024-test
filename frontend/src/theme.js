import {createTheme} from "@mui/material";
import {green, grey, purple, red} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: '#50c76e',
            light: '#c9eccf',
            dark: '#3aa657',
            strongDark: '#043818',
        },
        secondary: {
            main: '#b1ffba',
            dark: '#7fe59c',
        }
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


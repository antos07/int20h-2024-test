import {Link, Outlet} from "react-router-dom";
import {
    Button,
    Container,
    FormControl,
    FormGroup,
    FormHelperText,
    Input,
    InputLabel,
    Paper, Stack, styled,
    TextareaAutosize as BaseTextareaAutosize, TextField,
    Typography
} from "@mui/material";
import * as React from "react";
import {Footer, MenuAppBar} from "./Auctions";
import {green, grey} from "@mui/material/colors";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {auto} from "@popperjs/core";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from "dayjs";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const TextFieldWithHover = styled(TextField)(({ theme }) => ({
    '&:hover': {
        borderColor: green[400],
    },
    '&:focus': {
        borderColor: green[400],
    }
}));

export function AddEditForm() {
    const [value, setValue] = React.useState(null);

    const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${green[400]};
    }

    &:focus {
      box-shadow: 0 0 0 3px ${ green[200]};
    }
  `,
    );

    return (
        <Container sx={{
            textAlign: "center",
            paddingTop: "20px",
            }}>
                <Typography variant="h5" sx={{
                    mt: '20px',
                    mb: '20px',
                }}>Add new auction</Typography>
            <FormGroup sx={{
                mt: '20px',
                mb: '20px',
                m: auto,
                width: '50%',
            }}>
                <FormControl sx={{width: '100%'}}>
                    <InputLabel>Title</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl sx={{
                    mt: '10px',
                    width: '100%',
                }}>
                    <InputLabel>Description</InputLabel>
                    <Textarea minRows={3} sx={{
                        mt: '40px',
                        width: '100%'
                    }}/>
                </FormControl>
                <FormControl sx={{
                    mt: '10px',
                    width: '100%',
                }}>
                    <InputLabel>Minimum bid</InputLabel>
                    <TextFieldWithHover
                        id={"minBid"}
                        type="number"
                        sx={{
                            mt: '40px',
                            width: '130px',
                        }}
                    />
                    <FormHelperText></FormHelperText>
                </FormControl>
                <FormControl sx={{
                        mt: '10px',
                        mb: '20px',
                        width: '100%',
                    }}>
                    <InputLabel sx={{ mb: '100px'}}>Finish time</InputLabel>
                    <LocalizationProvider
                        sx={{
                            width: '50%',
                        }}
                        dateAdapter={AdapterDayjs}>
                        <Stack spacing={2} sx={{ minWidth: 305, mt: '40px', }}>
                            <DateTimePicker
                                value={value}
                                onChange={setValue}
                                referenceDate={dayjs('2022-04-17T15:30')}
                            />
                        </Stack>
                    </LocalizationProvider>
                </FormControl>
                <FormControl sx={{
                    mt: '10px',
                    mb: '20px',
                    minWidth: '130px',
                    width: '50%'
                }}>
                    <Button
                        component="label" variant="contained" startIcon={<CloudUploadIcon/>}>
                        Upload file
                        <VisuallyHiddenInput type="file" accept="image/*"/>
                    </Button>
                </FormControl>
                <Button sx={{
                    color: 'primary.strongDark',
                    mt: '10px',
                    mb: '40px',
                    width: '100%',
                    border: 1,
                    boxShadow: 3,
                    background: 'linear-gradient(to bottom right, #E8FFEF, #50c76e 95%)',
                    borderColor: 'secondary.dark'
                }}>Submit</Button>
            </FormGroup>
        </Container>
    );
}
export const AddEditAuctions = () => (
    <>
        <Paper sx={{ ml: '10%', mr: '10%', boxShadow: 3, }}>
        <AddEditForm/>
        </Paper>
    </>
)
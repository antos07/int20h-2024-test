import {useLoaderData, useNavigate, useRouteLoaderData} from "react-router-dom";
import {
    Button,
    Container,
    FormControl,
    FormGroup,
    FormHelperText,
    Input,
    InputLabel,
    Paper,
    Stack,
    styled,
    TextareaAutosize as BaseTextareaAutosize,
    TextField,
    Typography
} from "@mui/material";
import * as React from "react";
import {green, grey} from "@mui/material/colors";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {auto} from "@popperjs/core";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
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

const TextFieldWithHover = styled(TextField)(({theme}) => ({
    '&:hover': {
        borderColor: green[400],
    },
    '&:focus': {
        borderColor: green[400],
    }
}));

const Textarea = styled(BaseTextareaAutosize)(
    ({theme}) => `
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
      box-shadow: 0 0 0 3px ${green[200]};
    }
  `,
);

export function AddEditForm({formTitle, onSaveAction, fillForm}) {
    const currentUser = useRouteLoaderData("root");
    let auctionData = useLoaderData();
    if (!fillForm)
        auctionData = {};
    const [value, setValue] = React.useState(fillForm ? dayjs(auctionData.end_date) : null);
    const navigate = useNavigate();

    const saveAuction = async () => {
        const auction = {
            id: auctionData.id,
            title: document.getElementById("auctionTitle").value,
            description: document.getElementById("auctionDescription").value,
            minBid: +document.getElementById("auctionMinBid").value,
            endAt: new Date(value),
            image: document.getElementById("auctionImage").files[0],
        }

        if (auction.endAt <= new Date()) {
            alert("Impossible finish time.")
            return
        }


        const auctionId = await onSaveAction(auction, currentUser)
        if (auctionId) {
            navigate(`/auctions/${auctionId}`);
            return;
        }

        alert("Error");
    }

    return (
        <Container sx={{
            textAlign: "center",
            paddingTop: "20px",
        }}>
            <Typography variant="h5" sx={{
                mt: '20px',
                mb: '20px',
            }}>{formTitle}</Typography>
            <FormGroup sx={{
                mt: '20px',
                mb: '20px',
                m: auto,
                width: '50%',
            }}>
                <FormControl sx={{width: '100%'}}>
                    <InputLabel>Title</InputLabel>
                    <Input id="auctionTitle" defaultValue={auctionData.title}/>
                </FormControl>
                <FormControl sx={{
                    mt: '10px',
                    width: '100%',
                }}>
                    <InputLabel>Description</InputLabel>
                    <Textarea id="auctionDescription" minRows={3} sx={{
                        mt: '40px',
                        width: '100%'
                    }} defaultValue={auctionData.description}/>
                </FormControl>
                <FormControl sx={{
                    mt: '10px',
                    width: '100%',
                }}>
                    <InputLabel>Minimum bid</InputLabel>
                    <TextFieldWithHover
                        id={"auctionMinBid"}
                        type="number"
                        sx={{
                            mt: '40px',
                            width: '130px',
                        }}
                        defaultValue={auctionData.minBid}
                    />
                    <FormHelperText></FormHelperText>
                </FormControl>
                <FormControl sx={{
                    mt: '10px',
                    mb: '20px',
                    width: '100%',
                }}>
                    <InputLabel sx={{mb: '100px'}}>Finish time</InputLabel>
                    <LocalizationProvider
                        sx={{
                            width: '50%',
                        }}
                        dateAdapter={AdapterDayjs}>
                        <Stack spacing={2} sx={{minWidth: 305, mt: '40px',}}>
                            <DateTimePicker
                                value={value}
                                onChange={setValue}
                                referenceDate={dayjs(value || new Date())}
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
                        <VisuallyHiddenInput type="file" accept="image/*" id="auctionImage"/>
                    </Button>
                </FormControl>
                <Button onClick={saveAuction} sx={{
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

export const EditAuction = ({formTitle, onSaveAction, fillForm}) => (
    <>
        <Paper sx={{ml: '10%', mr: '10%', boxShadow: 3,}}>
            <AddEditForm formTitle={formTitle} onSaveAction={onSaveAction} fillForm={fillForm}/>
        </Paper>
    </>
)
import React from "react";
import PageWrapper from "../../components/page/PageWrapper";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, TextField,  } from "@mui/material";


const PageSignIn = () => {
    return (
        <PageWrapper title="Авторизация">
            <div>
                <h1>PageSignIn</h1>
                <p>PageSignIn PageSignIn PageSignIn</p>
                <div>
                    <DeleteIcon />
                </div>
                <div>
                    <TextField label="Field" variant="outlined" />
                </div>
                <div>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </div>
            </div>
        </PageWrapper>
    )
}

export default PageSignIn
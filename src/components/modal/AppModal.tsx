import React from "react";
import { 
    Grid,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton
} from "@mui/material";
import { DialogProps } from '@mui/material/Dialog';
import { Close } from "@mui/icons-material";


type AppModalProps = {
    title: string;
    children: React.ReactNode,
    open: boolean,
    maxWidth?: DialogProps['maxWidth'],
    handleModalopen: (open: boolean) => void;
}

const stylesSx = {
    title: {
        borderBottom: '1px solid var(--border-color-primary)', 
        mb: 2,
        lineHeight: '1.3'
    }
}

const AppModal = (props: AppModalProps): React.ReactElement => {

    const handleAppModalClose = (event: object, reason: string) => {
        if(reason === "backdropClick") { // лучше запретим закрытие формы на случай случайного клика по фону
            return false;
        }
        props.handleModalopen(false);
    };

    return (
        <Dialog 
            open={props.open}
            onClose={handleAppModalClose}
            maxWidth={props.maxWidth}
            fullWidth={true}
        >
            <DialogTitle sx={stylesSx.title}>
                <Grid 
                    container 
                    spacing={2}
                    alignItems={"center"}
                >
                    <Grid item xs>{props.title}</Grid>
                    <Grid item xs="auto">
                        <IconButton type="button" onClick={() => props.handleModalopen(false)}>
                            <Close />
                        </IconButton>
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent>
                {props.children}
            </DialogContent>
        </Dialog>
    )
}

export default AppModal
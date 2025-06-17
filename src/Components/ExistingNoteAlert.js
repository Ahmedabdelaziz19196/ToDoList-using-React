import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Divider from "@mui/material/Divider";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ExistingNoteAlert({ open, handleClose }) {
    return (
        <React.Fragment>
            <Dialog
                open={open}
                slots={{
                    transition: Transition,
                }}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle
                    sx={{
                        color: "#ff4a4a",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: "30px",
                        textTransform: "capitalize",
                    }}
                >
                    {"This task already exists!"}{" "}
                </DialogTitle>
                <Divider sx={{ background: "white" }} />

                <DialogContent>
                    <DialogContentText
                        id="alert-dialog-slide-description"
                        sx={{ textAlign: "center" }}
                    >
                        You've already added this task. Please enter a new one
                        to avoid duplication.
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}

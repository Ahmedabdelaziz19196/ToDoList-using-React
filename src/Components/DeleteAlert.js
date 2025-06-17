import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useContext } from "react";

/* Context*/
import { DeleteContext } from "../Context files/DeleteContext";

export default function DeleteAlert({ open, handleClose, theDate }) {
    const { handleDeleteClick } = useContext(DeleteContext);

    /*handle Update*/
    function handleDelete() {
        handleDeleteClick(theDate.id);
        handleClose();
    }
    /*handle Update*/

    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle
                    sx={{
                        color: "#ff4a4a",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: "30px",
                        textTransform: "capitalize",
                    }}
                >
                    Delete Alert
                </DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ marginBottom: "10px" }}>
                        Are you sure you want to delete this note? This action
                        cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDelete} sx={{ color: "#ff4a4a" }}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

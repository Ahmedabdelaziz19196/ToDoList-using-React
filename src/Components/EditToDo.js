import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useState, useContext } from "react";

/* Context*/
import { UpdateContext } from "../Context files/UpdateContext";

export default function EditToDo({ open, handleClose, theDate }) {
    const { updateTheToDo } = useContext(UpdateContext);

    let [toDoInputUpdate, setToDoInputUpdate] = useState(theDate.title);
    let [toDoDetailsUpdate, setToDoDetailsUpdate] = useState(theDate.details);

    /*handle Update*/
    function handleUpdate() {
        updateTheToDo(theDate.id, toDoInputUpdate, toDoDetailsUpdate);
        handleClose();
    }
    /*handle Update*/

    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Your ToDo</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ marginBottom: "10px" }}>
                        You can edit the details of your task below. Make the
                        changes you need.
                    </DialogContentText>
                    <TextField
                        sx={{
                            width: "100% !important",
                            height: "100%",
                        }}
                        id="filled-basic"
                        label="Update Your ToDo"
                        variant="filled"
                        value={toDoInputUpdate}
                        onChange={(e) => {
                            setToDoInputUpdate(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                handleUpdate();
                            }
                        }}
                    />
                    <TextField
                        sx={{
                            width: "100% !important",
                            height: "100%",
                        }}
                        id="filled-basic"
                        label="Update Your Details"
                        variant="filled"
                        value={toDoDetailsUpdate}
                        onChange={(e) => {
                            setToDoDetailsUpdate(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                handleUpdate();
                            }
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

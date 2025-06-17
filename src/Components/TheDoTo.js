// import Grid from "@mui/material/Grid";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import Card from "@mui/material/Card";
import { useState } from "react";
import Button from "@mui/material/Button";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import EditToDo from "./EditToDo";
import DeleteAlert from "./DeleteAlert";

export default function TheDoTo({ toDo, handleDeleteClick, handleDoneClick }) {
    const [openEditForm, setOpenEditForm] = useState(false);
    const [openDeleteForm, setOpenDeleteForm] = useState(false);

    /*handle Delete Button*/
    function handleDelete() {
        setOpenDeleteForm(true);
    }
    function handleCloseDeleteClick() {
        setOpenDeleteForm(false);
    }
    /*handle Delete Button*/

    /*handle Edit Form*/
    function handleOpenEditClick() {
        setOpenEditForm(true);
    }
    function handleCloseEditClick() {
        setOpenEditForm(false);
    }
    /*handle Edit Form*/

    /* handle Done Click*/
    function handleDone() {
        handleDoneClick(toDo.id);
    }
    /* handle Done Click*/

    return (
        <div>
            <Card
                className="card-animation the-card"
                data-done={toDo.isCompleted}
                variant="outlined"
                sx={{
                    minWidth: 275,
                    background: "#17191b",
                    color: "white ",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
                    textAlign: "left",
                    position: "relative",
                    overflow: "hidden",
                    border: toDo.isCompleted ? "#4caf50" : "transparent",
                    borderRadius: toDo.isCompleted ? "0px" : "transparent",
                }}
            >
                <Box sx={{ p: 2 }}>
                    <Stack
                        direction="row"
                        sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="done-content"
                        >
                            <h4 style={{ textTransform: "capitalize" }}>
                                {toDo.title}
                            </h4>
                        </Typography>
                    </Stack>
                    <Typography
                        variant="body2"
                        sx={{ textTransform: "capitalize" }}
                        className="done-content"
                    >
                        {toDo.details}
                    </Typography>
                </Box>
                <Divider
                    sx={{ background: "white" }}
                    className="done-content"
                />
                <Box sx={{ p: 1, display: "flex", justifyContent: "right" }}>
                    <Stack direction="row" spacing={1}>
                        {/* Delete button */}
                        <Button
                            className="ToDo-button "
                            variant="text"
                            sx={{
                                borderRadius: "50%",
                                border: "2px solid #1976d2",
                                color: "white",
                            }}
                            onClick={handleDelete}
                        >
                            <DeleteForeverRoundedIcon />
                        </Button>
                        {/* Delete button */}

                        {/* Edit  button */}
                        <Button
                            variant="text"
                            className="ToDo-button"
                            sx={{
                                borderRadius: "50%",
                                border: "2px solid #1976d2",
                                color: "white",
                            }}
                            onClick={handleOpenEditClick}
                        >
                            <ModeEditRoundedIcon />
                        </Button>
                        {/* Edit  button */}

                        {/* Done  button */}
                        <Button
                            variant="text"
                            className="ToDo-button"
                            sx={{
                                borderRadius: "50%",
                                border: "2px solid #1976d2",
                                color: "white",
                            }}
                            onClick={handleDone}
                        >
                            <DoneRoundedIcon />
                        </Button>
                        {/* Done  button */}
                    </Stack>
                </Box>
                <EditToDo
                    open={openEditForm}
                    handleClose={handleCloseEditClick}
                    theDate={toDo}
                />
                <DeleteAlert
                    open={openDeleteForm}
                    handleClose={handleCloseDeleteClick}
                    theDate={toDo}
                />
            </Card>
        </div>
    );
}

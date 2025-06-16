import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import TheDoTo from "./TheDoTo";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { v4 as uuidv4 } from "uuid";

/* The Hooks */
import { useState } from "react";
import EmptyInputAlert from "./EmptyInputAlert";
import ExistingNoteAlert from "./ExistingNoteAlert";

export default function ToDoList() {
    let [openEmptyAlert, setOpenEmptyAlert] = useState(false);
    let [openExistingAlert, setOpenExistingAlert] = useState(false);
    let [toDoInput, setToDoInput] = useState("");
    let [theData, setTheDate] = useState([
        {
            id: uuidv4(),
            title: "My First todo",
            details: "first id details",
            isCompleted: false,
        },
    ]);
    let showDate = theData.map((data) => {
        return (
            <TheDoTo key={data.id} title={data.title} details={data.details} />
        );
    });
    /*Empty alert*/
    function handleCloseAlert() {
        setOpenEmptyAlert(false);
    }
    /*Empty alert*/

    /*Exisitng Alert*/
    function handleCloseExisingAlert() {
        setOpenExistingAlert(false);
    }
    /*Exisitng Alert*/

    /*handle the input*/
    function handleToDoInput(event) {
        setToDoInput(event.target.value);
    }
    /*handle the input*/

    /*handle the Add click*/
    function handleAddClick() {
        if (toDoInput.trim() === "") {
            setOpenEmptyAlert(true);
            return;
        }
        const isDuplicate = theData.some(
            (todo) =>
                todo.title.toLocaleLowerCase().trim() ===
                toDoInput.toLocaleLowerCase().trim()
        );
        if (isDuplicate) {
            setOpenExistingAlert(true);
            setToDoInput("");
            return;
        }
        let newData = {
            id: uuidv4(),
            title: toDoInput,
            details: "",
            isCompleted: false,
        };

        setTheDate([...theData, newData]);
        setToDoInput("");
    }
    /*handle the Add click*/

    return (
        <div>
            <CssBaseline />
            <Container maxWidth="sm" className="the-main-container">
                <Box
                    sx={{
                        bgcolor: "white",
                        minHeight: "100vh",
                        padding: "20px",
                        position: "relative",
                    }}
                >
                    <h1 style={{ fontSize: "50px", margin: "0" }}>
                        My To-Do List
                    </h1>
                    <Divider
                        variant="middle"
                        style={{ position: "relative", bottom: "14px" }}
                    />
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            marginBottom: "20px",
                        }}
                    >
                        <Grid size={8}>
                            <TextField
                                sx={{
                                    width: "100% !important",
                                    height: "100%",
                                }}
                                id="filled-basic"
                                label="Add Your ToDo"
                                variant="filled"
                                value={toDoInput}
                                onChange={handleToDoInput}
                            />
                        </Grid>
                        <Grid
                            size={4}
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    width: "100% !important",
                                    height: "100%",
                                }}
                                onClick={handleAddClick}
                            >
                                Add Task
                            </Button>
                        </Grid>
                    </Grid>
                    <ToggleButtonGroup
                        // value={alignment}
                        exclusive
                        // onChange={handleAlignment}
                        aria-label="text alignment"
                        sx={{ marginBottom: "20px" }}
                    >
                        <ToggleButton
                            value="left"
                            aria-label="left aligned"
                            sx={{ fontWeight: "bold", color: "#17191b" }}
                        >
                            All
                        </ToggleButton>
                        <ToggleButton
                            value="center"
                            aria-label="centered"
                            sx={{ fontWeight: "bold", color: "#17191b" }}
                        >
                            Completed
                        </ToggleButton>
                        <ToggleButton
                            value="right"
                            aria-label="right aligned"
                            sx={{ fontWeight: "bold", color: "#17191b" }}
                        >
                            Not Completed{" "}
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <Stack spacing={2}>{showDate}</Stack>
                    <EmptyInputAlert
                        open={openEmptyAlert}
                        handleClose={handleCloseAlert}
                    />
                    <ExistingNoteAlert
                        open={openExistingAlert}
                        handleClose={handleCloseExisingAlert}
                    />
                </Box>
            </Container>
        </div>
    );
}

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
import { createTheme, ThemeProvider } from "@mui/material/styles";

/* The Hooks */
import { useEffect, useState } from "react";
import EmptyInputAlert from "./EmptyInputAlert";
import ExistingNoteAlert from "./ExistingNoteAlert";

/*Context*/
import { UpdateContext } from "../Context files/UpdateContext";
import { DeleteContext } from "../Context files/DeleteContext";
import TheTheme from "./TheTheme";

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
    let [filterTheTodos, SetFilterTheTodos] = useState("all");
    let [theTheme, setTheTheme] = useState("#78909c");

    let filteredData = theData;
    let completedData = theData.filter((ele) => {
        return ele.isCompleted;
    });
    let notCompletedData = theData.filter((ele) => {
        return !ele.isCompleted;
    });
    if (filterTheTodos === "completed") {
        filteredData = completedData;
    } else if (filterTheTodos === "not Completed") {
        filteredData = notCompletedData;
    }

    let showDate = filteredData.map((data) => {
        return (
            <TheDoTo
                key={data.id}
                toDo={data}
                handleDeleteClick={handleDeleteClick}
                handleDoneClick={handleDoneClick}
            />
        );
    });

    /*get data from local storage*/
    useEffect(() => {
        let savedData = JSON.parse(localStorage.getItem("todos")) ?? [];
        setTheDate(savedData);
        let todosStatue = JSON.parse(localStorage.getItem("todosStatue")) ?? [];
        SetFilterTheTodos(todosStatue);
        let theTheme = JSON.parse(localStorage.getItem("the theme")) ?? [];
        setTheTheme(theTheme);
    }, []);
    /*get data from local storage*/

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
        localStorage.setItem("todos", JSON.stringify([...theData, newData]));
    }
    /*handle the Add click*/

    /*handle Delete Button*/
    function handleDeleteClick(id) {
        let filteredDate = theData.filter((ele) => {
            return ele.id !== id;
        });
        setTheDate(filteredDate);
        localStorage.setItem("todos", JSON.stringify(filteredDate));
    }
    /*handle Delete Button*/

    /*handle  Update The Date*/
    function updateTheToDo(id, theUpdate, theDetails) {
        let updatedData = theData.map((ele) => {
            return ele.id === id
                ? { ...ele, title: theUpdate, details: theDetails }
                : ele;
        });
        setTheDate(updatedData);
        localStorage.setItem("todos", JSON.stringify(updatedData));
    }
    /*handle  Update The Date*/

    /*handle Done the To-Do*/
    function handleDoneClick(id) {
        let doneTheToDo = theData.map((ele) => {
            return ele.id === id
                ? { ...ele, isCompleted: !ele.isCompleted }
                : ele;
        });
        setTheDate(doneTheToDo);
        localStorage.setItem("todos", JSON.stringify(doneTheToDo));
    }
    /*handle Done the To-Do*/

    /* handle filtering ther to todos*/
    function handleFilterTodos(event) {
        SetFilterTheTodos(event.target.value);
        localStorage.setItem("todosStatue", JSON.stringify(event.target.value));
    }
    /* handle filtering ther to todos*/

    /*select the theme*/
    function selectTheTheme(theme) {
        setTheTheme(theme);
    }
    /*select the theme*/

    /*handle the theme*/
    const theme = createTheme({
        palette: {
            primary: {
                main: theTheme,
            },
        },
    });
    /*handle the theme*/

    return (
        <div>
            <ThemeProvider theme={theme}>
                <DeleteContext.Provider
                    value={{
                        handleDeleteClick,
                    }}
                >
                    <UpdateContext.Provider
                        value={{
                            updateTheToDo,
                        }}
                    >
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
                                    style={{
                                        position: "relative",
                                        bottom: "14px",
                                    }}
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
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    handleAddClick();
                                                }
                                            }}
                                        />
                                    </Grid>
                                    <Grid
                                        size={4}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
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
                                <Grid
                                    className="toggle-area"
                                    container
                                    spacing={2}
                                    sx={{
                                        marginBottom: "20px",
                                    }}
                                >
                                    <Grid size={{ xs: 12, md: 8 }}>
                                        <ToggleButtonGroup
                                            value={filterTheTodos}
                                            exclusive
                                            onChange={handleFilterTodos}
                                            aria-label="text alignment"
                                        >
                                            <ToggleButton
                                                value="all"
                                                aria-label="left aligned"
                                                sx={{
                                                    fontWeight: "bold",
                                                    color: theTheme,
                                                }}
                                            >
                                                All
                                            </ToggleButton>
                                            <ToggleButton
                                                value="completed"
                                                aria-label="centered"
                                                sx={{
                                                    fontWeight: "bold",
                                                    color: theTheme,
                                                }}
                                            >
                                                Completed
                                            </ToggleButton>
                                            <ToggleButton
                                                value="not Completed"
                                                aria-label="right aligned"
                                                sx={{
                                                    fontWeight: "bold",
                                                    color: theTheme,
                                                }}
                                            >
                                                Not Completed
                                            </ToggleButton>
                                        </ToggleButtonGroup>
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 4 }}>
                                        <TheTheme
                                            selectTheTheme={selectTheTheme}
                                            theme={theTheme}
                                        />
                                    </Grid>
                                </Grid>

                                <Stack spacing={2}>{showDate}</Stack>

                                {/* --------------------------------------------------------- */}
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
                    </UpdateContext.Provider>
                </DeleteContext.Provider>
            </ThemeProvider>
        </div>
    );
}

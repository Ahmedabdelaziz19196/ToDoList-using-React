import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import TheDoTo from "./TheDoTo";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function ToDoList() {
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
                    <Stack spacing={2}>
                        <TheDoTo />
                        <TheDoTo />
                    </Stack>

                    <Grid
                        container
                        spacing={2}
                        sx={{
                            position: "absolute",
                            width: "calc(100% - 40px)",
                            bottom: "10px",
                            zIndex: 9999,
                        }}
                    >
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
                            >
                                Contained
                            </Button>
                        </Grid>
                        <Grid size={8}>
                            <TextField
                                sx={{
                                    width: "100% !important",
                                    height: "100%",
                                }}
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}

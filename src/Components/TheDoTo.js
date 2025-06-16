// import Grid from "@mui/material/Grid";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function TheDoTo({ title, details }) {
    return (
        <div>
            <Card
                className="the-card"
                variant="outlined"
                sx={{
                    minWidth: 275,
                    background: "#17191b",
                    color: "white ",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
                    textAlign: "left",
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
                        <Typography gutterBottom variant="h5" component="div">
                            <h4>{title}</h4>
                        </Typography>
                    </Stack>
                    <Typography variant="body2">{details}</Typography>
                </Box>
                <Divider sx={{ background: "white" }} />
                <Box sx={{ p: 1, display: "flex", justifyContent: "right" }}>
                    <Stack direction="row" spacing={1}>
                        <Button
                            className="ToDo-button"
                            variant="text"
                            sx={{
                                borderRadius: "50%",
                                border: "2px solid #1976d2",
                                color: "white",
                            }}
                        >
                            <DeleteForeverRoundedIcon />
                        </Button>
                        <Button
                            variant="text"
                            className="ToDo-button"
                            sx={{
                                borderRadius: "50%",
                                border: "2px solid #1976d2",
                                color: "white",
                            }}
                        >
                            <ModeEditRoundedIcon />
                        </Button>
                        <Button
                            variant="text"
                            className="ToDo-button"
                            sx={{
                                borderRadius: "50%",
                                border: "2px solid #1976d2",
                                color: "white",
                            }}
                        >
                            <DoneRoundedIcon />
                        </Button>
                    </Stack>
                </Box>
            </Card>
        </div>
    );
}
/*
<Grid container spacing={2}>
    <Grid
        size={4}
        sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
        }}
    >
        <Button
            className="ToDo-button"
            variant="text"
            sx={{
                background: "white",
                borderRadius: "50%",
                border: "2px solid rgb(148, 73, 71)",
                color: "rgb(148, 73, 71)",
            }}
        >
            <DeleteForeverRoundedIcon />
        </Button>
        <Button
            variant="text"
            className="ToDo-button"
            sx={{
                background: "white",
                borderRadius: "50%",
                border: "2px solid rgb(70, 108, 151)",
                color: "rgb(70, 108, 151)",
            }}
        >
            <ModeEditRoundedIcon />
        </Button>
        <Button
            variant="text"
            className="ToDo-button"
            sx={{
                background: "white",
                borderRadius: "50%",
                border: "2px solid rgba(83, 141, 71, 0.57)",
                color: "green",
            }}
        >
            <DoneRoundedIcon />
        </Button>
    </Grid>
    <Grid size={8}>
        <CardContent style={{ textAlign: "right" }}>
            <Typography variant="h4" component="div">
                my first to do
            </Typography>
            <Typography variant="h6" component="div">
                details
            </Typography>
        </CardContent>
    </Grid>
</Grid>;
*/

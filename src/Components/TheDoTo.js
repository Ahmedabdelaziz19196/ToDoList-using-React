import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

export default function TheDoTo() {
    return (
        <div>
            <Card
                className="the-card"
                sx={{
                    minWidth: 275,
                    background: "#252f88",
                    color: "white ",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
                }}
            >
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
                </Grid>
            </Card>
        </div>
    );
}

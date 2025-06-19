import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const colors = [
    { name: "blueGrey", value: "#78909c" },
    { name: "deepOrange", value: "#ff7043" },
    { name: "green", value: "#66bb6a" },
    { name: "indigo", value: "#5c6bc0" },
    { name: "amber", value: "#ffca28" },
];

export default function ColorSelect({ theme, selectTheTheme }) {
    function handleChange(event) {
        selectTheTheme(event.target.value);
        localStorage.setItem("the theme", JSON.stringify(event.target.value));
    }

    return (
        <Box className="theme" sx={{ minWidth: 120 }}>
            <FormControl fullWidth variant="standard">
                <InputLabel id="color-select-label">Theme</InputLabel>
                <Select
                    labelId="color-select-label"
                    id="color-select"
                    value={theme}
                    onChange={handleChange}
                    renderValue={(selected) => (
                        <Box
                            sx={{
                                width: 100,
                                height: 20,
                                borderRadius: "9px",
                                backgroundColor: selected,
                                margin: "auto",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        />
                    )}
                    sx={{
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "8px",
                    }}
                >
                    {colors.map((c) => (
                        <MenuItem
                            key={c.value}
                            value={c.value}
                            sx={{ justifyContent: "center", padding: "8px" }}
                        >
                            <Box
                                sx={{
                                    width: 100,
                                    height: 24,
                                    borderRadius: "9px",
                                    backgroundColor: c.value,
                                    marginRight: 1,
                                }}
                            />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

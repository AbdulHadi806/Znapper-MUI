import React from "react";

//importing MUI components
import {
    Link,
    AppBar,
    Toolbar,
    Container,
    Typography,
    useTheme,
    Button,
    Box,
    Paper,
    Grid
} from "@mui/material";
import TextField from "@mui/material/TextField";



export default function MuhammadDanish() {
    const theme = useTheme();
    const arr = ["Graphic Design", " Web Design", " Logo Design"];
    const inputArr = ['First name', 'Last name', 'Email address', 'Phone Number']
    return (
        <>
            <div className="container">
                <div>
                    <Typography
                        variant="h4"
                        sx={{ textTransform: "uppercase", fontWeight: "light" }}
                    >
                        Muhammad Danish
                    </Typography>
                    <Typography md = {{display: 'block', maxWidth: 'md'}}>
                        Jarad helped found Mostly Serious after cutting his teeth at boutique firms, startups, and as an interactive consultant for some of the largest agencies in the US. His original vision for Mos tly Serious helps drive us today: to build a culture-driven agency that met deadlines, was easy to work with, earned consistent results for clients, and could tackle amost any project.
                    </Typography>
                    {arr.map((val) => {
                        return (
                            <Link sx={{ fontSize: "small", color: "primary.dark" }}>
                                {val}
                            </Link>
                        );
                    })}
                </div>
                <Box
                    sx={{

                        display: "flex",
                        flexDirection: "column",
                        bgcolor: 'background.dark',
                        width: 300

                    }}
                    justifyContent="center"
                >
                    {inputArr.map((val) => {
                        return (<TextField label={val} id="margin-normal"
                            margin="normal" sx={{ p: 1 }} />)
                    })}
                    <Button variant="contained">Contained</Button>

                </Box>
            </div>
            <div>

            </div>
        </>
    );
}

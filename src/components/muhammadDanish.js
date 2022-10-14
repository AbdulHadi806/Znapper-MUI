import React from "react";

//importing MUI component
import {
  Container,
  Typography,
  useTheme,
  Button,
  Box,
  MenuItem,
} from "@mui/material";
import TextField from "@mui/material/TextField";

export default function MuhammadDanish() {

  const arr = ["Graphic Design", " Web Design", " Logo Design"];
  const inputArr = ["First name", "Last name", "Email address", "Phone Number"];
  return (
    <>
    <Container sx = {{pt: 6, pb: 5}} maxWidth = 'xl'>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{ textTransform: "uppercase", fontWeight: "light" }}
          >
            Muhammad Danish
          </Typography>
          {arr.map((val) => {
            return (
              <MenuItem key = {Math.random()} sx={{ display: "inline", fontSize: "small", color: "primary.dark", pr:1 }}>
                {val}
              </MenuItem>
            );
          })}
          <Typography sx={{ display: "block", width: 900, my: 3 }}>
            Jarad helped found Mostly Serious after cutting his teeth at
            boutique firms, startups, and as an interactive consultant for some
            of the largest agencies in the US. His original vision for Mos tly
            Serious helps drive us today: to build a culture-driven agency that
            met deadlines, was easy to work with, earned consistent results for
            clients, and could tackle amost any project. image.png
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "background.dark",
            width: 300,
          }}
          justifyContent="center"
        >
          {inputArr.map((val) => {
            return (
              <TextField key = {Math.random()}
                label={val}
                id="margin-normal"
                margin="normal"
                sx={{ p: 1 }}
              />
            );
          })}
          <Button variant="contained" sx = {{color: 'primary.light'}}>Contained</Button>
        </Box>
      </Box>
      </Container>
    </>
  );
}

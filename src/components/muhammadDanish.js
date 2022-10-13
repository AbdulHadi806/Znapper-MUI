import React from "react";

//importing MUI components
import {
  Link,
  Container,
  Typography,
  useTheme,
  Button,
  Box,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { maxWidth } from "@mui/system";

export default function MuhammadDanish() {
  const theme = useTheme();
  const arr = ["Graphic Design", " Web Design", " Logo Design"];
  const inputArr = ["First name", "Last name", "Email address", "Phone Number"];
  return (
    <>
    <Container maxWidth = 'lg'>
      <Box
        xs={{
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
          <Typography md={{ display: "block", maxWidth: "md", mt: 7 }}>
            Jarad helped found Mostly Serious after cutting his teeth at
            boutique firms, startups, and as an interactive consultant for some
            of the largest agencies in the US. His original vision for Mos tly
            Serious helps drive us today: to build a culture-driven agency that
            met deadlines, was easy to work with, earned consistent results for
            clients, and could tackle amost any project. image.png
          </Typography>
          {arr.map((val) => {
            return (
              <Link sx={{ fontSize: "small", color: "primary.dark" }}>
                {val}
              </Link>
            );
          })}
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
              <TextField
                label={val}
                id="margin-normal"
                margin="normal"
                sx={{ p: 1 }}
              />
            );
          })}
          <Button variant="contained">Contained</Button>
        </Box>
      </Box>
      </Container>
    </>
  );
}

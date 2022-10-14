import React from "react";
import {
  Container,
  Typography,
  useTheme,
  Button,
  Box,
  MenuItem,
  Grid,
} from "@mui/material";

function OtherZnappers() {
  const arr = ["Graphic Design", " Web Design", " Logo Design"];

  return (
    <Box sx={{ bgcolor: "background.dark" }}>
      <Container sx={{ py: 6 }} maxWidth="xl">
        <Grid container>
          <Grid item xs={12} align="center">
            <Typography variant="h4" sx={{ textTransform: "uppercase", pb: 6 }}>
              Meet other Znappers
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <img src="images/image-1.png"></img>
              <Box>
                <Typography>Muhammad Danish</Typography>
                {arr.map((val) => {
                  return (
                    <MenuItem
                      key={Math.random()}
                      sx={{
                        display: "inline",
                        fontSize: "small",
                        color: "primary.dark",
                      }}
                    >
                      {val}
                    </MenuItem>
                  );
                })}
                <Typography>
                  My experience includes all aspects of design including
                  extensive knowledge of web design. I consider the entire User
                  Experience, combining that with excellent use of color,
                  special consideration and typography.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <img src="images/image-1.png"></img>
              <Box>
                <Typography>Muhammad Danish</Typography>
                {arr.map((val) => {
                  return (
                    <MenuItem
                      key={Math.random()}
                      sx={{
                        display: "inline",
                        fontSize: "small",
                        color: "primary.dark",
                      }}
                    >
                      {val}
                    </MenuItem>
                  );
                })}
                <Typography>
                  My experience includes all aspects of design including
                  extensive knowledge of web design. I consider the entire User
                  Experience, combining that with excellent use of color,
                  special consideration and typography.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
            <img src="images/image-1.png"></img>
              <Box>
                <Typography>Muhammad Danish</Typography>
                {arr.map((val) => {
                  return (
                    <MenuItem
                      key={Math.random()}
                      sx={{
                        display: "inline",
                        fontSize: "small",
                        color: "primary.dark",
                      }}
                    >
                      {val}
                    </MenuItem>
                  );
                })}
                <Typography>
                  My experience includes all aspects of design including
                  extensive knowledge of web design. I consider the entire User
                  Experience, combining that with excellent use of color,
                  special consideration and typography.
                </Typography>
                </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default OtherZnappers;

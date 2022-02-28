import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export const AppHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fee Calculator
          </Typography>
          <IconButton
            aria-label="github fee-calculator repository"
            color="secondary"
            href="https://github.com/amimaro/fee-calculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

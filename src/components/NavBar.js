import { useState } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/AccessibilityRounded";

export default function NavBar() {
  const [anchorEL, setAnchorEL] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography
          variant="h4"
          sx={{ flexGrow: 1 }}
          style={{ textAlign: "left" }}
        >
          Food online
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Home</Button>
          <Button
            onClick={(e) => {
              setAnchorEL(e.currentTarget);
              setOpen(true);
            }}
            color="inherit"
            id="resources-btn"
            aria-controls={open ? "resources-menu" : null}
            aria-haspopup="true"
            aria-expanded={open ? true : false}
          >
            Resources
          </Button>
          <Button color="inherit">Abut Us</Button>
          <Button color="inherit">Contac - Us</Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEL={anchorEL}
          open={open}
          MenuListProps={{
            "aria-labelledby": "resources-btn",
          }}
        >
          <MenuItem>Blog</MenuItem>
          <MenuItem>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

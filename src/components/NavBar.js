import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/AccessibilityRounded";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h4" component={"div"} sx={{ flexGrow: 1 }}>
          Food online
        </Typography>
        <Stack direction="row">
          <Button color="inherit">Home</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

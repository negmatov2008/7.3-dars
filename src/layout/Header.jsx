import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Badge, Button } from "@mui/material";
import { useSelector } from "react-redux";

function Header() {
  const how = useSelector((state) => state.cart.products.length);
  console.log(how);
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "20px" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700, fontSize: "30px" }}
          >
            Shopping Market
          </Typography>
          <Button sx={{ width: "60px" }}>
            <Badge badgeContent={how} color="error">
              <LocalMallIcon color="action" />
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

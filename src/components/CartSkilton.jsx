import React from "react";

import Skeleton from "@mui/material/Skeleton";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
function CartSkilton() {
  return (
    <div className="div">
      <Skeleton
        animation="wave"
        variant="rounded"
        width="100%"
        height={140}
        sx={{ marginBottom: "10px" }}
      />
      <Skeleton
        animation="wave"
        variant="regtungelar"
        width="90px"
        height={35}
        sx={{ marginBottom: "10px" }}
      />
      <Skeleton
        sx={{ marginBottom: "10px" }}
        animation="wave"
        variant="regtungelar"
        width="390px"
        height={60}
      />
      <Skeleton
        animation="wave"
        sx={{ marginBottom: "10px" }}
        variant="rounded"
        width="40px"
        height={40}
      />
    </div>
  );
}

export default CartSkilton;

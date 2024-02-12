import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Cart";

function Cart(product) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart(product));
  };
  const { title, images, id, discrption } = product;
  return (
    <Card sx={{ marginBottom: "30px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={images[0]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {discrption}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} size="large">
          <ShoppingCartIcon color="action" />
        </Button>
      </CardActions>
    </Card>
  );
}

export default Cart;

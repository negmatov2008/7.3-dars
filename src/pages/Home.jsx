import Grid from "@mui/material/Unstable_Grid2";
import Cart from "../components/Cart";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import filterImages from "../Filter/filterImages";
import CartSkilton from "../components/CartSkilton";

function Home() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const GetProduct = async () => {
      setLoading(true);
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      filterImages(data);
      setProduct(data);
      setLoading(false);
    };
    GetProduct();
  }, []);

  return (
    <>
      <Box
        sx={{ margin: "0 auto", maxWidth: "80%", display: "flex", gap: "40px" }}
      >
        <Grid container spacing={2} disableEqualOverflow>
          {loading
            ? [1, 2, 3, 4, 5, 6].map((p) => (
                <Grid xs={12} md={4}>
                  <CartSkilton />
                </Grid>
              ))
            : product.map((p) => (
                <Grid xs={12} md={4}>
                  <Cart {...p} />
                </Grid>
              ))}
        </Grid>
      </Box>
    </>
  );
}

export default Home;

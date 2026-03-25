import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import ProductItem from "./ProductItem";

import {
    Container,
    Typography,
    TextField,
    MenuItem,
    Grid,
    Box
} from "@mui/material";

function ProductList() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.items);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    let filteredProducts = [...products];

    if (search) {
        filteredProducts = filteredProducts.filter(p =>
            p.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (category) {
        filteredProducts = filteredProducts.filter(p =>
            p.category === category
        );
    }

    if (sort === "low") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    return (

        <Container sx={{ mt: 4 }}>

            <Typography variant="h4" gutterBottom>
                Products
            </Typography>

            <Box sx={{ mb: 3 }}>

                <TextField
                    label="Search Product"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setSearch(e.target.value)}
                />

                <TextField
                    select
                    label="Category"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <MenuItem value="">All Categories</MenuItem>
                    <MenuItem value="Electronics">Electronics</MenuItem>
                    <MenuItem value="Fashion">Fashion</MenuItem>
                    <MenuItem value="Food">Food</MenuItem>
                    <MenuItem value="Books">Books</MenuItem>
                </TextField>

                <TextField
                    select
                    label="Sort by Price"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setSort(e.target.value)}
                >
                    <MenuItem value="">Sort by Price</MenuItem>
                    <MenuItem value="low">Low to High</MenuItem>
                    <MenuItem value="high">High to Low</MenuItem>
                </TextField>

            </Box>

            <Grid container spacing={3}>

                {filteredProducts.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}

            </Grid>

        </Container>
    );
}

export default ProductList;
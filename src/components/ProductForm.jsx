import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productSlice";
import { useNavigate } from "react-router-dom";

import {
    Container,
    TextField,
    Button,
    Typography,
    MenuItem,
    Box
} from "@mui/material";

function ProductForm() {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !price || !image || !category) {
            alert("Please fill all fields");
            return;
        }

        dispatch(addProduct({ title, price, image, category }));
        navigate("/");
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>

            <Typography variant="h4" gutterBottom>
                Add Product
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>

                <TextField
                    label="Product Title"
                    fullWidth
                    margin="normal"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <TextField
                    label="Price"
                    fullWidth
                    margin="normal"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <TextField
                    label="Image URL"
                    fullWidth
                    margin="normal"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <TextField
                    select
                    label="Category"
                    fullWidth
                    margin="normal"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <MenuItem value="">Select Category</MenuItem>
                    <MenuItem value="Electronics">Electronics</MenuItem>
                    <MenuItem value="Fashion">Fashion</MenuItem>
                    <MenuItem value="Food">Food</MenuItem>
                    <MenuItem value="Books">Books</MenuItem>
                </TextField>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                >
                    Add Product
                </Button>

            </Box>
        </Container>
    );
}

export default ProductForm;
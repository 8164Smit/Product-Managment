import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateProduct } from "../features/productSlice"
import { useNavigate, useParams } from "react-router-dom"

import {
    Container,
    TextField,
    Button,
    Typography,
    MenuItem,
    Box
} from "@mui/material"

function EditProduct() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const products = useSelector(state => state.products.items)
    const product = products.find(p => p.id == id)

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")

    useEffect(() => {
        if (product) {
            setTitle(product.title)
            setPrice(product.price)
            setImage(product.image)
            setCategory(product.category)
        }
    }, [product])

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(updateProduct({
            id,
            product: { title, price, image, category }
        }))

        navigate("/")
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Edit Product
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
                    <MenuItem value="Electronics">Electronics</MenuItem>
                    <MenuItem value="Fashion">Fashion</MenuItem>
                    <MenuItem value="Food">Food</MenuItem>
                    <MenuItem value="Books">Books</MenuItem>
                </TextField>

                <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    sx={{ mt: 2 }}
                >
                    Update Product
                </Button>

            </Box>
        </Container>
    )
}

export default EditProduct
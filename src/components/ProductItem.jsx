import { useDispatch } from "react-redux"
import { deleteProduct } from "../features/productSlice"
import { Link } from "react-router-dom"

import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    Grid
} from "@mui/material"

function ProductItem({ product }) {

    const dispatch = useDispatch()

    return (
        <Grid item xs={12} sm={6} md={4}>

            <Card>

                <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                />

                <CardContent>
                    <Typography variant="h6">
                        {product.title}
                    </Typography>

                    <Typography color="text.secondary">
                        Rs {product.price}
                    </Typography>

                    <Typography variant="body2">
                        {product.category}
                    </Typography>
                </CardContent>

                <CardActions>

                    <Button
                        component={Link}
                        to={`/edit/${product.id}`}
                        variant="contained"
                        color="warning"
                    >
                        Edit
                    </Button>

                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => dispatch(deleteProduct(product.id))}
                    >
                        Delete
                    </Button>

                </CardActions>

            </Card>

        </Grid>
    )
}

export default ProductItem
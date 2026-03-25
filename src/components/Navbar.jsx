import { Link } from "react-router-dom"

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container
} from "@mui/material"

function Navbar() {

    return (
        <AppBar position="static">
            <Container>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            textDecoration: "none",
                            color: "white"
                        }}
                    >
                        Ethics Store
                    </Typography>

                    <Button
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/add"
                    >
                        Add Product
                    </Button>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar
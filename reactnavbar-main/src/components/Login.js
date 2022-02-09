import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { fontFamily } from '@mui/system';




const theme = createTheme();


export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        <b>INPTKEY</b>
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            InputProps={{ style: { fontSize: 16 } }}
                            InputLabelProps={{ style: { fontSize: 16 } }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            InputProps={{ style: { fontSize: 16 } }}
                            InputLabelProps={{ style: { fontSize: 16 } }}
                        />
                        <Button
                            style={{
                                fontSize: "1.9rem",
                                fontWeight: "normal"
                            }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Connexion
                        </Button>
                        <Grid container style={{
                            textAlign: "center",
                        }}>
                            <Grid item xs>
                                <Link href="#" variant="body2"
                                    style={{
                                        fontSize: "1.5rem",
                                        textDecoration: "none"
                                    }}
                                >
                                    Informations de compte oubliées?
                                </Link>
                                <Link href="#" variant="body2"
                                    style={{
                                        fontSize: "1.5rem",
                                        textDecoration: "none"
                                    }}
                                >
                                    <p>Directives pour la Réservation des Salles</p>
                                </Link>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

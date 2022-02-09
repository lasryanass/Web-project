import { Button } from '@mui/material';
import React from 'react'
import './Accueil.css';

const Accueil = () => {
    return (
        <div class="container">
            <div class="row my-3">
                <div class="col">
                    <Button id="button" variant="contained" href="login">
                        <p class="pag">ESPACE ADMINISTRATEUR</p>
                    </Button>

                </div>
                <div class="col">
                    <Button id="button" variant="contained" href="login">
                        <p class="pag">ESPACE CLIENT</p>
                    </Button>

                </div>
            </div>

        </div>

    );
};




export default Accueil
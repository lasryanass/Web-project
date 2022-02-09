import React from 'react'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import './Footer.css';


function Footer(props) {
    return (
        <Typography marginTop='100px' variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            < Link color="inherit" href="https://mui.com/" >
            </Link > {' '}
            {new Date().getFullYear()}
            {'.'}
            <p className='CopyR' >Institut National des Postes et Télécommunications.</p>
            <p>Le système INPTKey, ainsi que les systèmes, données et autres ressources dont l'accès nécessite une authentification INPTKey, sont réservés aux utilisateurs légitimes de l’INPT. L'utilisation de ces ressources peut être contrôlée et une utilisation inappropriée du système INPTKey ou de ces ressources peut entraîner des mesures disciplinaires et des poursuites civiles et pénales.</p>
        </Typography >
    );
}
export default Footer;

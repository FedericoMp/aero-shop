import React from 'react';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import { getCurrentYear } from '../utils';
import './styles/Footer.css';

const Footer = () => {
    return (
        <footer className='footer-wrap'>
            <Container className='footer-container'>
                <a href='https://github.com/FedericoMp/aero-shop' 
                    target='_blank' rel='noopener noreferrer'
                        className='footer-link'>
                        <GitHubIcon className='github-icon'/> Aero Shop - { getCurrentYear() }
                </a>
            </Container>
        </footer>
    )
}

export default Footer;
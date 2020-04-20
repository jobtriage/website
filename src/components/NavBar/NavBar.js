import React from 'react'
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Typography from '../../UI/Typography/Typography';

const NavBar = () => {
    const theme = useTheme();
    const Root = css({
        width: '75vw',
        margin: '40px auto',
        display: 'flex',
        justifyContent: 'space-between',
        img: {
            width: '55px',
        },
        a: {
            color: theme.palette.secondary.main
        }
    });

    return (
        <nav css={Root}>
            <img src='/images/Logo.svg' alt='Job Triage' />
            <a href='https://github.com/jobtriage/jobtriage' target='_blank'>GitHub</a>
        </nav>
    )
};

export default NavBar;
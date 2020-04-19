import React from 'react'
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const NavBar = () => {
    const theme = useTheme();
    const styles = css({
        color: theme.palette.secondary.main
    });

    return (
        <nav>
            <h1 css={styles}>Hello emotion</h1>
            <img src='/images/Logo.svg' alt='Job Triage' />
        </nav>
    )
};

export default NavBar;
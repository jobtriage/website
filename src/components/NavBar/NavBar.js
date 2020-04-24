import React from 'react';
import Link from 'next/link';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const NavBar = () => {
    const theme = useTheme();
    const Root = css({
        margin: '40px auto',
        display: 'flex',
        justifyContent: 'space-between',
        img: {
            width: '55px',
        },
        a: {
            color: theme.palette.secondary.main,
            marginLeft: '2.5rem'
        }
    });

    return (
        <nav css={Root}>
            <img src='/images/Logo.svg' alt='Job Triage' />
            <div>
                <a href='https://github.com/jobtriage/jobtriage' target='_blank'>GitHub</a>
                <Link href='/about'>
                    <a>
                        About
                    </a>
                </Link>
            </div>
        </nav>
    )
};

export default NavBar;
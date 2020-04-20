import React from 'react'
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

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
        ul: {
            listStyle: 'none',
            display: 'flex',
            li: {
                margin: '0px 30px',
            }
        }
    })

    return (
        <nav css={Root}>
            <img src='/images/Logo.svg' alt='Job Triage' />
            <section>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Contribution</li>
                    <li>GitHub</li>
                </ul>
            </section>
        </nav>
    )
};

export default NavBar;
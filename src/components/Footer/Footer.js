import React from 'react';
import { css } from '@emotion/core';

const Footer = () => {
    const root = css({
        div: {
            width: '100vw',
            height: '1.5px',
            backgroundColor: '#f3f3f3'
        },
        p: {
            width: '75vw',
            margin: '50px auto',
            textAlign: 'center'
        }
    })
    return (
        <div css={root}>
            <div></div>
            <p>
                Released v0.1.0 under MIT License. Copyright &copy; 2020 Job Triage.
           </p>
        </div>

    )
};

export default Footer;
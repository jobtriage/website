import React from 'react'
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Typography from '../../UI/Typography/Typography';

const Contribution = () => {
    const theme = useTheme();
    const root = css({
        width: '75vw',
        margin: '60px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        a: {
            color: theme.palette.secondary.main
        },
    })
    const types = css({
        margin: '40px',
        textAlign: 'center',
        width: '535px',
    });
    const divider = css({
        width: '100%',
        height: '2px',
        backgroundColor: '#000'
    })
    return (
        <div css={root}>
            <div>
                <Typography component='h1'>Contributions</Typography>
                <div css={divider}></div>
            </div>
            <Typography css={types} component='p'>Job Triage is completely open source, free and it always will be. Contribute to Job Triage by creating  <a href="https://github.com/jobtriage/jobtriage/issues" target="_blank">issues</a> and <a href="https://github.com/jobtriage/jobtriage/pulls" target="_blank">Pull requests</a>.</Typography>
        </div>
    )
};

export default Contribution;
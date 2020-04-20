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
        p: {
            width: '535px',
        },
        a: {
            color: theme.palette.primary.main
        }
    })
    const types = css({
        margin: '40px',
        textAlign: 'center',
    })
    return (
        <div css={root}>
            <Typography component='h1'>Contributions</Typography>
            <Typography css={types} component='p'>Job Triage is completely open source and free and it always will be. Contribute to Job Triage by creating  <a href="#">issues</a> and <a href="#">Pull requests</a>.</Typography>
        </div>
    )
};

export default Contribution;
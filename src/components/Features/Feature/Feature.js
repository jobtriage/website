import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Typography from '../../../UI/Typography/Typography';

const Feature = (props) => {
    const { title, description, url } = props;
    const theme = useTheme();
    const root = css({
        marginTop: '5em',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        img: {
            width: '100px',
            height: '100px'
        },
    });

    const margin = css({
        marginTop: '1.2em',
        marginBottom: '0.5em',
        color: theme.palette.primary.main
    })

    return (
        <div css={root}>
            <img src={url} alt='Priority' />
            <Typography css={margin} component='h3'>{title}</Typography>
            <Typography component='p'>{description}</Typography>
        </div>
    )
};

export default Feature;
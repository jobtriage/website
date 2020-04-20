import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Typography from '../../../UI/Typography/Typography';

const Feature = (props) => {
    const { title, description, url } = props;
    const theme = useTheme();

    const root = css({
        display: 'flex',
        width: '313px',
        flexDirection: 'column',
        alignItems: 'center',
        img: {
            width: '60px',
            height: '60px'
        },
        '@media (max-width: 800px)': {
            margin: '85px auto'
        },
        margin: '85px',
        section: {
            textAlign: 'center',
        }
    })
    const typesMargin = css({
        margin: '10px 0px',
        color: theme.palette.primary.main
    })

    return (
        <div css={root}>
            <img src={url} alt='Priority' />
            <section>
                <Typography css={typesMargin} component='h3'>{title}</Typography>
                <Typography component='p'>{description}</Typography>
            </section>
        </div>
    )
};

export default Feature;
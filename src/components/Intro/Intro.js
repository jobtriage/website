import React from 'react'
import { css } from '@emotion/core';
import Button from '../../UI/Button/Button';
import Typography from '../../UI/Typography/Typography';

const Intro = () => {

    const root = css({
        margin: '130px auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media (max-width: 800px)': {
            flexDirection: 'column'
        },
        img: {
            width: '40vw',
            '@media (max-width: 800px)': {
                width: '95vw',
                margin: '20px'
            }
        }
    });

    const leftSection = css({
        maxWidth: '30vw',
        '@media (max-width: 800px)': {
            maxWidth: '95vw',
        }

    });

    const typographyMargin = css({
        margin: '20px 0px'
    });

    const button = css({
        margin: '50px 0px',
    })


    return (
        <div css={root}>
            <section css={leftSection}>
                <Typography css={typographyMargin} component='h3'>Job Triage provides an interactive way to manage your job applications.</Typography>
                <Typography component='p'>
                    Job searching is a very exhaustive process. Managing application is very critical in this.
                    Our app can help you in many ways with your application and make precess less painful.
                </Typography>
                <Button css={button} type='button'>
                    Go To The App
                </Button>
            </section>
            <section>
                <img src='/images/Intro3.svg' alt='Intro' />
            </section>
        </div>
    );
}

export default Intro;
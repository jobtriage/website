import React from 'react';
import { css } from '@emotion/core';
import Feature from './Feature/Feature';
import Typography from '../../UI/Typography/Typography';

const Features = () => {
    const root = css({
        width: '75vw',
        margin: '60px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    });

    const container = css({
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around'
    });
    const divider = css({
        width: '100%',
        height: '2px',
        backgroundColor: '#000'
    });

    return (
        <div css={root}>
            <div>
                <Typography component='h1'>Features</Typography>
                <div css={divider}></div>
            </div>
            <div css={container}>
                <section>
                    <Feature
                        url='/images/Priority.svg'
                        title='Priority Basesd'
                        description='Manage your application with Kanban based system.'
                    />
                    <Feature
                        url='/images/Logs.svg'
                        title="Time Logs"
                        description='Manage your application with Kanban based system.'
                    />
                </section>
                <section>
                    <Feature
                        url='/images/Self.svg'
                        title="Self Analysis"
                        description='Manage your application with Kanban based system.'
                    />
                    <Feature
                        url='/images/Free.svg'
                        title="Completly Free"
                        description='Manage your application with Kanban based system.'
                    />
                </section>
            </div>
        </div>
    )
};

export default Features;
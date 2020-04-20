import { css } from '@emotion/core';

const global = css({
    '*': {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box'
    },
    html: {
        width: '100vw'
    },
    body: {
        width: '75vw',
        margin: '0 auto',
        fontFamily: 'Montserrat sans-serif'
    },
    a: {
        textDecoration: 'none'
    }
});

export default global;
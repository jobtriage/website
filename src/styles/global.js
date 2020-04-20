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
        fontFamily: 'Montserrat sans-serif'
    },
    a: {
        textDecoration: 'none'
    }
});

export default global;
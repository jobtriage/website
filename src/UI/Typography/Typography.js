import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const Typography = (props) => {
    const {
        component: Component = 'p',
        children,
        ...more
    } = props;

    const calcCSS = (type) => {
        switch (type) {
            case 'h1':
                return {
                    fontSize: '31px',
                    lineHeight: '38px',
                    fontWeight: 'bold'
                }

            case 'h3':
                return {
                    fontSize: '23px',
                    lineHeight: '32px',
                    fontWeight: '600'
                }

            case 'h6':
                return {
                    fontSize: '13px',
                    lineHeight: '18px',
                    fontWeight: '150'
                }

            case 'p':
                return {
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: '400'
                }
        }
    }

    const root = css({
        ...calcCSS(Component),
        color: '#3f3d3d'
    });

    return <Component css={root} {...more}>{children} </Component>
};

export default Typography;
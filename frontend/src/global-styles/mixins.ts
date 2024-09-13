import { css } from 'styled-components';

import { IFlexProps } from '../interfaces/interfaces';

export const flex = ({ direction, content, items }: IFlexProps) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${content};
    align-items: ${items};
`;

export const title_color_gradient = css`
    background-image: linear-gradient(to top, #fff 20%, #887b27, #fff 90%);
    color: transparent;
    background-clip: text;
`;

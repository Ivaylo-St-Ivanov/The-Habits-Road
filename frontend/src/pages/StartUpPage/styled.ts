import styled, { keyframes } from 'styled-components';

import { IFlexProps } from '../../interfaces/interfaces';
import { flex, title_color_gradient } from '../../global-styles/mixins';
import { colors } from '../../global-styles/colors';

export const StartUpPageWrapper = styled.main`
    width: 100%;
    height: 100vh;
    background-image: url('/images/start-up-page.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const Overlay = styled.div<IFlexProps>`
    width: 100%;
    height: 100%;
    background-color: #1f1f1fd4;
    ${flex({
        direction: 'column',
        content: 'space-evenly',
        items: 'center'
    })};
    color: ${colors.primary_light};
`;

const showTitle = keyframes`
    from {
        opacity: 0;
        filter: blur(0.25rem);
        transform: translateY(-100%);
    }
    to {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
    }
`;

export const H1 = styled.h1`
    ${title_color_gradient}
    animation: ${showTitle} 1.5s forwards;
    margin-bottom: 0.5rem;
`;

export const H3 = styled.h3`
    ${title_color_gradient}
    animation: ${showTitle} 1.5s forwards;
`;

export const BtnAndFormWrapper = styled.div`
    position: relative;
    width: 35%;
    max-width: 27rem;
    height: 10%;
`;

export const FirstStepBtn = styled.button`
    background-color: ${colors.black_background};
    padding: 0.35rem 1.5rem;
    color: ${colors.primary_light};
    border-radius: 1.5rem;
    font-size: 1.25rem;
    letter-spacing: 0.1rem;
    transition: all 1s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 8px ${colors.box_shadow_light};
    }
`;

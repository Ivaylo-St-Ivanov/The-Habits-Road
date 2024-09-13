import styled, { keyframes } from 'styled-components';

import { colors } from '../../global-styles/colors';
import { flex } from '../../global-styles/mixins';

const showForm = keyframes`
    0% {
        opacity: 0;
        transform: scale(0);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

export const Form = styled.form`
    width: 100%;
    position: absolute;
    top: -3rem;
    box-shadow: 0 0 1px ${colors.box_shadow_light};
    padding: 2rem;
    border-top-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    backdrop-filter: blur(0.25rem);
    ${flex({
        direction: 'column',
        items: 'center'
    })};
    animation: ${showForm} 1.3s both;
`;

export const CloseFormBtn = styled.button`
    position: absolute;
    top: -0.65rem;
    right: -0.65rem;
    border-radius: 50%;
    background-color: ${colors.btn_X};
    color: ${colors.black_text};
    font-size: 0.65rem;
    font-weight: 600;
    transition: all 1s ease;

    &:hover {
        box-shadow: 0 0 8px ${colors.box_shadow_light};
    }
`;

export const EmailInput = styled.input`
    width: 100%;
    box-shadow: 0 0 4px ${colors.box_shadow_light};
    border-radius: 0.5rem;
    background: transparent;
    padding-left: 0.5rem;
    color: ${colors.white_text};
    margin-bottom: 2rem;
`;

export const ErrorMessage = styled.span`
    position: absolute;
    bottom: 0.35rem;
    left: 0;
    right: 0;
    color: red;
    letter-spacing: 0.1rem;
`;

export const SubmitBtn = styled.input`
    background-color: ${colors.black_background};
    color: ${colors.primary_light};
    font-weight: 500;
    letter-spacing: 0.2rem;
    border: none;
    border-radius: 1.5rem;
    width: 50%;
    cursor: pointer;
    transition: all 1s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 8px ${colors.box_shadow_light};
    }
`;

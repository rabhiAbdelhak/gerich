import {css} from 'styled-components';

export const miniMobile = (props) => {
    return css`
    @media (max-width: 350px){
        ${props}
    }
    `
}

export const mobile = (props) => {
    return css`
    @media (max-width: 768px){
        ${props}
    }
    `
}

export const tablette = (props) => {
    return css`
    @media (max-width: 992px){
        ${props}
    }
    `
}

export const largeScreen = (props) => {
    return css`
    @media (min-width: 992px){
        ${props}
    }
    `
}

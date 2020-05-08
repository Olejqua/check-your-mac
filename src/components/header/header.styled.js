import styled from 'styled-components';
import { Link } from 'preact-router/match';

export const HeaderStyled = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 44px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f0f0f0;
    z-index: 50;
`;

export const LinkStyled = styled(Link)`
    color: #000;
    text-decoration: none;
    padding-left: 7px;
    
    &:hover {
        opacity: .65;
    }

    &:active {
        opacity: .65;
    }
`;

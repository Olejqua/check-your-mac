import styled from 'styled-components';

export const FullScreen = styled.div`
    position: relative;
    background-color: ${props => props.bgColor};
    
    & > div {
    background-color: transparent;
    width: 100%;
    height: 100%;
    }
`;

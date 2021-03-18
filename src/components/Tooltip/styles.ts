import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 6px;
  position: relative;
  display: inline-block;
 
  & span.tooltipText {
    visibility: hidden;
    min-width: 120px;
    max-width: 320px;
    background: ${props => props.theme.body.backgroundQuaternary};
    color: ${props => props.theme.body.defaultText};
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
    margin-bottom: 60%;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
  
    position: absolute;
    z-index: 1;
  }

  &:hover span.tooltipText {
    visibility: visible;
  }

  & span.tooltipText::after {
    content: " ";
    position: absolute;
    top: 100%; 
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${props => props.theme.body.backgroundQuaternary} transparent transparent transparent;
  }
`;

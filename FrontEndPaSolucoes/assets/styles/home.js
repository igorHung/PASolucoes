import styled from 'styled-components'

export const Container = styled.div`
    height:100vh;
    background-color:#C5F9C4;
    opacity:54%;
    display:flex;
    
`;

export const DefaultInput = styled.input`
    placeholder:${props =>props.placeholder?props.placeholder:""};
    background-color:inherit;
    border-top:transparent;
    border-left:transparent;
    border-right:transparent;
    border-bottom:2px solid #000;   
    margin-bottom:25px;
    width:50%;
    height:35px;
    text-decoration:none;
    padding:15px;
    font-size:15px;
    transition: border 0.5s;
    &:focus-visible{
        border-top:transparent;
        border-left:transparent;
        border-right:transparent;
        color:#000;
        border-bottom:2px solid green; 
        outline:0;
        box-shadow: inherit;
    }
    &:active{
        border-top:transparent;
        border-left:transparent;
        border-right:transparent;
        color:#000;
        outline:0;
        box-shadow: inherit;
    }

`;
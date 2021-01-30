import styled from 'styled-components'

export const Container = styled.div`
    height:100vh;
    background-color:#C5F9C4;
    opacity:54%;
    display:flex;
    justify-content:space-between;
    background-image: url(${props => props.BackImg});
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
        
`;
export const WelcomeDiv = styled.div`
    height:100%;
    width:40%;
    display:flex;
    flex-direction:column;
    align-items: left;
    justify-content: center;
    text-align:left;
    margin-left:40px;
`;
export const LoginDiv = styled.div`
    width:40%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
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

export const Text = styled.span`
    font-size:${props => props.fontSize?props.fontSize:"1px"};
    color:${props =>props.color?props.color:"white"};
`;

export const DefaultButton = styled.button`
    background-color:#1ad015;
    border:2px solid #1ad015;
    height:6%;
    width:20%;
    box-shadow: inherit;
`;

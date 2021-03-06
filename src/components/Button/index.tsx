import styled from 'styled-components';


const Button = styled.button`
    background-color: ${({theme})=> theme.colors.secondary};
    color: ${({theme})=> theme.colors.contrastText};
    border-radius: ${({theme})=> theme.borderRadius};
    border: none;
    outline: none;
    text-decoration: none;

    width: 95%;
    height: 4rem;
    border-radius: .4rem;
`;

Button.Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;



export default Button;
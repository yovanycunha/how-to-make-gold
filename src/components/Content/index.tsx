import styled from 'styled-components';

const Content = styled.div`
    margin: auto;
    max-width: 34rem;
    height: 90%;
    padding: 0;
    
`;

Content.Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: .5rem;
`;

Content.InputContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 70px 70px 70px 70px 70px;
`;

Content.ChartContainer = styled.div`


`;

export default Content;
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
    border: none;
    width: 95%;
    height: 4rem;
    border-radius: .4rem;
    outline: none;
`;

const ImageBase = styled.div`
    background-image: url(${props => props.icon});
    background-size: cover;
    height: 4rem;
    width: 4rem;
`;

const InputContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
`;

export default function Input({onChange, icon, ...props}) {
    return(
        <InputContainer>
            <ImageBase icon={icon}/>
            <InputBase
                onChange={onChange}
                {...props}
                />
        </InputContainer>
    )
}

Input.defaultProps = {
    value: '',
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number,
  };
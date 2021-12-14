import React, { useState } from 'react';
import styled from 'styled-components';
import tomatos from '../images/tomatos.jpg';
import { device } from '../utils/devices';
import { interestedProducer } from '../actions/UserActions';


const Wrapper = styled.div`
  height: 80vh;
  background: url(${tomatos});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.laptop}{
    height: 40vh;
  }

  h2 {
    font-family: ${props => props.theme.headline};
    color: white;
    font-weight: 400;
    font-size: 48px;
    text-align: center;
    text-shadow: 0 0 10px rgba(0,0,0,0.12);
  }
`;

const Form = styled.form`

  @media ${device.laptop}{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 1rem;
    font-size: 18px;
    font-family: ${props => props.theme.sans};
    text-align: center;
    border: 0;
    outline: 0;
    appearance: none;
    border-radius: 0;
    width: 90vw;
    margin: 0 auto;
    box-sizing: border-box;
    display: block;

    @media ${device.laptop}{
      width: 400px;
      margin: 0;
    }
  }

  button {
    padding: 1rem 2rem;
    appearance: none;
    background: rgb(173,247,182);
    border: 0;
    font-size: 17px;
    font-family: ${props => props.theme.sans};
    cursor: pointer;
    outline: 0;
    width: 90vw;
    margin: 0 auto;
    box-sizing: border-box;
    display: block;

    @media ${device.laptop}{
      width: auto;
      margin: 0;
    }

    &:hover {
      background: ${props => props.theme.primary};
    }
  }
`;

const Subscribe = (props) => {
  
  const [input, setInput] = useState({});

  const handleChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  return (
    <Wrapper>
      <h2>Interested in becoming a Local Guru seller?</h2>
      <Form>
        <input name='email' value={input.email} type='email' placeholder='Leave us your email' onChange={handleChange} />
        <button onClick={(event) => {
          event.preventDefault();
          interestedProducer(input.email);
          setInput({ email: '' });
        }}>&rarr;</button>
      </Form>
    </Wrapper>
  )
};

export default Subscribe;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { db } from '../Firebase';

const Wrapper = styled.div`
  width: 90vw;
  margin: 8rem auto 4rem;
  max-width: 1000px;
`;

const FAQ = () => {

    const [loaded, setLoaded] = useState(false);
    const [values, setValues] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await db.collection("pages").doc("faq").get();
            setValues(res.data())
            setLoaded(true);
          } catch (e) {
            console.log(e);
          }
        };
  
        if (!loaded) {
          fetchData();
        }
    }, [loaded]);
    
    if(values.delivery){
        return(
            <>
            <Wrapper>
                <h2>Delivery</h2>
                {values.delivery.map(item => (
                    <>
                    <h4>{item.question}</h4>
                    <p>{item.answer}</p>
                    </>
                ))}<br></br>
                <h2>Billing</h2>
                {values.billing.map(item => (
                    <>
                    <h4>{item.question}</h4>
                    <p>{item.answer}</p>
                    </>
                ))}<br></br>
                <h2>Produce</h2>
                {values.produce.map(item => (
                    <>
                    <h4>{item.question}</h4>
                    <p>{item.answer}</p>
                    </>
                ))}
            </Wrapper>
            <Footer/>
            </>
        )
    } else {
        return (
            <>
            <Wrapper>
            </Wrapper>
            <Footer/>
            </>
        )
    }
};

export default FAQ;

import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from './Layout';
import { Back } from './Back.js';

  export default function AnEvent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const { eventId } = useParams();
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch(`https://vef2-20222-v3-synilausn.herokuapp.com/events/${eventId}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    },[eventId])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Layout title={items.name}>
            <div className="desc"> {items.description}</div>
            <ul>
                {items.registrations?.map(item => (
                    <li className="registered" key={item.name}>
                        <p>{item.name}</p> 
                        <p>{item.comment}</p>
                    </li> 
                ))}
            </ul>
            <Back />
        </Layout>
        
      );
    }
  }

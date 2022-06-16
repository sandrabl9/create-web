import React, { useState, useEffect } from 'react';
import { CardCollection } from './CardCollection';

export const Collections = () => {
  
  const [collections,setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchCollections = async () => {
      const response = await fetch(
        'https://create-web-e8e99-default-rtdb.firebaseio.com/collections.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedCollections = [];

      for (const key in responseData) {
        loadedCollections.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          img: responseData[key].img
          
        });
      }
      
      setCollections(loadedCollections);
      setIsLoading(false);
    };
    ;
      fetchCollections().catch(error => {
      setIsLoading(false);
      // setHttpError(error.message);
      setHttpError('Error al cargar las colecciones')
    });

  }, []);

  if (isLoading) {
    return ( <section>
      <p>Cargando...</p>
    </section>
    );
  }

  if (httpError) {
    return (
      <section >
      <p>{httpError}</p>
    </section>
    )

  }

  const collectionsList = collections.map(col => <CardCollection
    key={col.id} 
    id={col.id}
    name={col.name} 
    description={col.description} 
    img={col.img}/>
    );
    
  return <div>
    Collections 

    {collectionsList}

  </div>;
};

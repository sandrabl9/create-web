import React, { useState, useEffect } from "react";

export const Collections = () => {
  
  const [collections,setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchCollections = async () => {
      const response = await fetch(
        "https://create-web-e8e99-default-rtdb.firebaseio.com/collections.json"
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
      setHttpError(error.message);
    });

  }, []);

  if (isLoading) {
    return ( <section>
      <p>Loading...</p>
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

  const collectionsList = collections.map(col =>({
    id: col.id,
    name: col.name,
    description: col.description,
    img: col.img,
    
  }))
  console.log('here')


  return <div>
    Collections 

    {
      collectionsList.map( c => 
        <ol key={c.id}>
          {c.name}
          <img src={c.img} alt='mobile' />
          
        </ol>
      )
    }

  </div>;
};

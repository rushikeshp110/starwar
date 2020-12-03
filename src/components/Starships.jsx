import React from "react";
import {useQuery,gql} from "@apollo/client";


function Starships(){
  const test = gql`
  {
    starships{
      name
      id
    }
}
  `;
  const {loading,error,data} = useQuery(test);
  if (loading) return(<p>Loading....</p>);
  if (error) return(<p>error occur</p>)

  return (
    <div>
      <h2>Starships list{''}</h2>
      {data.starships.map((starship,id)=>(
        <p key={id}>{starship.name}</p>
      ))}
    </div>
  );
}

export default Starships ;

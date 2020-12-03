import React from "react";
import {useQuery,gql} from "@apollo/client";

function Planets(){
  const test = gql`
  {
    planets{
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
      <h2>Planets list{''}</h2>
      {data.planets.map((planet,id)=>(
        <p key={id}>{planet.name}</p>
      ))}
    </div>
  );
}

export default Planets ;

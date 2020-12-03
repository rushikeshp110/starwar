import React from "react";
import {useQuery,gql} from "@apollo/client";

function Persons(){
  const test = gql`
  {
    persons{
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
      <h2>Persons list{''}</h2>
      {data.persons.map((person,id)=>(
        <p key={id}>{person.name}</p>
      ))}
    </div>
  );
}

export default Persons ;

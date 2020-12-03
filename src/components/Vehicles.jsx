import React from "react";
import {useQuery,gql} from "@apollo/client";

function Vehicles(){
  const test = gql`
  {
    vehicles{
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
      <h2>Vehicles list{''}</h2>
      {data.vehicles.map((vehicle,id)=>(
        <p key={id}>{vehicle.name}</p>
      ))}
    </div>
  );
}

export default Vehicles ;

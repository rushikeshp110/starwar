import React,{useState} from "react";
import {useQuery,gql} from "@apollo/client";
import Persons from "./components/Persons" ;
import Starships from "./components/Starships" ;
import Vehicles from "./components/Vehicles" ;
import Planets from "./components/Planets" ;
import { Card, TextButton } from '@dailykit/ui';
import {
   Table,
   TableHead,
   TableBody,
   TableRow,
   TableCell,
   AvatarGroup,
   Avatar,
   TagGroup,
   Tag,
   Dropdown
} from '@dailykit/ui'
function App() {
     function expand(event){
       return render(<Persons />)
     }
     const selectedOption = option => console.log(option)
     const searchedOption = option => console.log(option)
     return (
       <div>
       <div className="App">
    <Table>
      <TableCell>
        <Starships />
      </TableCell>
      <TableCell>
        <Planets />
      </TableCell>
      <TableCell>
        <Persons />
      </TableCell>
      <TableCell>
        <Vehicles />
      </TableCell>
    </Table>
     </div>
        </div>
     )


}

export default App;

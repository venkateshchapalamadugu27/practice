import React from 'react'

export default function ListRendering() {

//  let emplist=["venki","sanju","ranga"]
  
 let emplist=[
     {
         name:"venki",
         salary:"50000",
         email:"venki@gmai.com"
   },

   {
    name:"sanju",
    salary:"500000",
    email:"sanju@gmai.com"
},

{
    name:"ranga",
    salary:"500000",
    email:"ranga@gmai.com"
},
        ]
 

    return (
        <div >
            
            <h1>ListRendering</h1>
            {/* {
           emplist.map(element =>(
               <h1>{element}</h1>
            ) )
             
        } */}
        {
        emplist.map(
            empdata =>
            <>
                <p>{empdata.name}</p>  <p>{empdata.salary}</p>  <p>{empdata.email}</p>
            </>
        ) 
}
        </div>
    )
}

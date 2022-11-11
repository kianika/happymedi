import React from "react";
import { Link } from "react-router-dom";



export default function Page() {
  return (
   
   <div>
    <Link
            to={{
              pathname: `/contact` // your data array of objects
            }}
          >
          Contact Us
          </Link> 
   </div>
    
  );
}


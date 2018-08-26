import React from 'react';

// functional compenent (simpler abstractions, no state no lifecycle)
function SearchBox(props){
    console.log(props);
    return(
     <div>
         <input onChange={undefined}
         placeholder={props.Inputplaceholder}></input>
         <label> {props.label}</label>
     </div>
    );
}

export default SearchBox;
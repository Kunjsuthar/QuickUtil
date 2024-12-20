import React from "react";
import Cookies from "js-cookie";

function CookieExample()
{
    const handleClick= () =>
    {
        //set cookie    
        Cookies.set('name','John Doe',{expires:7});
        //get cookie
        const name=Cookies.get('name');
        console.log(name);
        //remove cookie






















        
        Cookies.remove('name');
    };

    return(
        <div>
            <button onClick={handleClick}>Set Cookie</button>
        </div>
    );
}
export default CookieExample;
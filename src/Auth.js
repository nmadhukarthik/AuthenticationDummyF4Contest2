//import { useEffect, useRef } from "react"
import axios from "axios";


class Auth{
    async login({info}) 
    {
      try {
        const response = await axios({
          url: "https://dummyjson.com/auth/login",
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username:`${info.username}`,
            password:`${info.password}`,
            })
        });
        console.log(response.data);
        return { success: true };
      } catch (error) {
        alert("Login Failed");
        return { success: false };
      }
    }
}

export default Auth;

// class Auth {
//   async loginUser(credentials) {
    
//   }
// }

// async function Auth () 
// {
//   const response = await fetch('https://dummyjson.com/auth/login', {
// method: 'POST',
// headers: { 'Content-Type': 'application/json' },
// body: JSON.stringify({
// username:${usernameState},
// password:${passwordState},
// })
// })
// .then(res => res.json())
// .then(console.log);

// }




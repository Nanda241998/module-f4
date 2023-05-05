import { useState } from "react";
import { useEffect } from "react";
import { json } from "react-router";


function Profile() {
  const [userState, setUserState] = useState(null);
  const [token,setToken]=useState('');

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      fetch(`https://dummyjson.com/users/${id}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Failed to fetch user data");
          }
        })
        .then((data) => {
          setUserState(data);
        })
        .catch((error) => {
          console.log(error.message);
        });
        setToken(localStorage.getItem("token"))
    }
  }, []);

  return (
    <div className="profile">
      <h2>Profile</h2>
      {userState ? (
        <div>
          <img src={userState.image} alt="Img"></img>
          <p>Username: {userState.username}</p>
          <p>Email: {userState.email}</p>
          <p>First Name: {userState.firstName}</p>
          <p>Last Name: {userState.lastName}</p>
          <p>ID: {userState.id}</p>
          <p>Gender: {userState.gender}</p>



        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
      }


export default  Profile




// "id": 15,
// "username": "kminchelle",
// "email": "kminchelle@qq.com",
// "firstName": "Jeanne",
// "lastName": "Halvorson",
// "gender": "female",
// "image": "https://robohash.org/autquiaut.png?size=50x50&set=set1",
// "token"

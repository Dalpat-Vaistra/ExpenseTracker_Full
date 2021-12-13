import axios from "axios";

function Profile(props) {
  return (
    <center>
      <h1>Welcome to Profile page</h1>
      <ul>
        <li>{props.name}</li>
        <li>{props.email}</li>
      </ul>
    </center>
  );
}

export async function getStaticProps() {
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbHBhdGRvZGl5YUBnbWFpbC5jb20iLCJpZCI6IjYxYjFlNzY3NGU4NzQwZDVkN2ExYWE4OCIsImlhdCI6MTYzOTIwNDQwNX0.7Zu0oOfieGYR82I3zCfz-79InqiOrEdWoHE__xYpQf0";
  //   if (typeof window !== "undefined") {
  //     token = localStorage.getItem("token");
  //   } else {
  //     token = "";
  //   }

  const result = await axios({
    url: "http://localhost:3030/api/user",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  if (!result) alert("Something Went Wrong, Please, Try Again");
  console.log(result.data);

  return {
    props: {
      name: result.data.data.name,
      email: result.data.data.email,
    },
  };
}

export default Profile;

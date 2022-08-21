import React, { useState, useEffect } from "react";
import axios from "axios";

const SpaceX = () => {
  const [launches, setLaunch] = useState(null);

  const baseURL = "https://api.spacexdata.com/v3/launches";

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setLaunch(response.data);
    });
  }, []);

  return (
    <div style={{ textAlign: "center", flexDirection: "column" }}>
      <h1>List of spaceX Launches:</h1>

      {launches?.map((launch) => {
        console.log("Tshidiso is chechicking the launch", launch);
        return (
          <div
            key={launch.launch_date_unix}
            style={{
              heigh: 200,
              width: 200,
              backgroundColor: "#d9dbdb",
              marginTop: 20,
            }}
          >
            <img alt={launch.links} src={launch.links.mission_patch}  width={170}
                      height={180} />
            <p>flight nummber:{launch.flight_number}</p>-
            <p>mission name:{launch.mission_name}</p>-
            <p>rocket id:{launch.rocket.rocket_id}</p>-
            <p>rocket name:{launch.rocket.rocket_name}</p>-
            <p>rocket type:{launch.rocket.rocket_type}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SpaceX;

// import React, { useState } from 'react'
// import axios from "axios";

// const baseURL = "https://api.spacexdata.com/v3/launches";

// export default function App() {
//   const [launch, setLaunch] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setLaunch(response.data);
//     });
//   }, []);

//   function createLaunch() {
//     axios
//       .launch(baseURL, {
//         title: "Postman Launches",
//         body: "This is a new launch."
//       })
//       .then((response) => {
//         setLaunch(response.data);
//       });
//   }

//   if (!launch) return "No post!"

//   return (
//     <div>
//       <h1>{launch.title}</h1>
//       <p>{launch.body}</p>
//       <button onClick={createLaunch}>Create Launch</button>
//     </div>
//   );
// }

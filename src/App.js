import React, { useEffect, useState, createContext } from "react";
import Child from "./Child";
import axios from "axios";

export const GlobalData = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(posts);
  return (
    <>
      <h1>SAMCOM TECHNOBRAINS</h1>
      <GlobalData.Provider value={posts}>
        <Child />
      </GlobalData.Provider>
    </>
  );
}
export default App;

import React, { useEffect, useState } from "react";
import UserComponent from "./UserComponent";
import "./styles.css";

export default function App() {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetchedData();
  }, [setName]);

  const fetchedData = () => {
    //console.log('Am I working right')
    const apiUrl = "https://randomuser.me/api/?results=10";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setName(data.results);
      });
  };
  console.log(name);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <UserComponent users={name} />
    </div>
  );
}

import React from "react";

const UserComponent = ({ users }) => {
  const cardStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  };
  const spanStyles = {
    margin: "10px 10px",
    display: "block"
  };
  return (
    <div style={cardStyles}>
      {users.map((user, i) => (
        <li key={i} style={{ listStyle: "none" }}>
          <img
            src={user.picture.thumbnail}
            alt="profile"
            style={{ borderRadius: "17px" }}
          />
          <span style={spanStyles}>
            {user.name.title} {user.name.first}
          </span>
        </li>
      ))}
    </div>
  );
};

export default UserComponent;

import React from "react";

const UserComponent = ({ users }) => {
  return (
    <>
      {users.map((user, i) => (
        <div key={i}>
          <span>{user.name.title}</span>
          <span> {user.name.first}</span>
        </div>
      ))}
    </>
  );
};

export default UserComponent;

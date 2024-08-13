import React from "react";
import User from "./User";

const Users = (props) => {
  const { onRemoveUser, users } = props;
  return (
    <div className="users">
      {users.map((user, index) => {
        return <User key={index} user={user} onRemoveUser={onRemoveUser} />;
      })}
    </div>
  );
};

export default Users;

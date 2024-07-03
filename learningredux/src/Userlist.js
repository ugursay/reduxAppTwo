import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "./redux/userSlice";
import UserWrite from "./redux/UserWrite";

function Userlist() {
  const dispatch = useDispatch();

  const { users } = useSelector((store) => store.user);
  // console.log(users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      {users && users.map((user) => <UserWrite key={user.id} user={user} />)}
    </div>
  );
}

export default Userlist;

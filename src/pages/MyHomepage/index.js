import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";

export default function MyHomepage() {
  const user = useSelector(selectUser);
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}

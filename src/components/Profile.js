import { useDispatch, useSelector } from "react-redux";

import { setName } from "../actions/creators";

const Profile = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.profile.name);

  const storeName = (event) => {
    dispatch(setName(event.target.value));
  };

  return (
    <div>
      <input
        type="text"
        id="name"
        onChange={storeName}
        value={name}
        autoComplete="off"
      />
      What you typed:
      <span id="display-name">{name}</span>
    </div>
  );
};

export default Profile;

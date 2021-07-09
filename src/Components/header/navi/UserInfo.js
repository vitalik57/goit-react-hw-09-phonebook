import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/auth/authActions";
import { displayNames, getAuthBoolean } from "../../../redux/auth/authSelector";

const UserInfo = () => {
  const dispatch = useDispatch();
  const signOut = () => dispatch(logOut());
  const displayName = useSelector(displayNames);
  const auth = useSelector(getAuthBoolean);

  // с шопа содрал
  return auth ? (
    <>
      <div>
        <strong>{displayName}</strong>
        <button type="button" onClick={signOut}>
          Log Out
        </button>
      </div>
    </>
  ) : null;
};
// const mapStateToProps = state => ({
//   displayName: state.auth.tokens.displayName,
//   auth: Boolean(state.auth.tokens.idToken)
// });
export default UserInfo;

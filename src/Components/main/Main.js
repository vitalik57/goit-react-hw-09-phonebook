import React, { Suspense } from "react";
import { connect, useSelector } from "react-redux";
import { Switch } from "react-router";
import { getAuth } from "../../redux/auth/authSelector";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoate from "../../routes/PublicRoute";

const Main = () => {
  const auth = useSelector(getAuth);
  return (
    <main>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Switch>
          {mainRoutes.map(item =>
            item.private ? (
              <PrivateRoute {...item} key={item.path} auth={auth} />
            ) : (
              <PublicRoate {...item} key={item.path} auth={auth} />
            )
          )}
        </Switch>
      </Suspense>
    </main>
  );
};
// const mapState = state => ({
//   auth: state.auth.tokens.idToken
// });
// export default connect(mapState)(Main);
export default Main;

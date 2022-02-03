import { Switch, Route } from "react-router-dom";
import { Register } from "./Register";
import { Login } from "./Login";
import { SendMail } from "./SendMail";
import { Home } from "./Home";
import { ResetPassword } from "./ResetPassword";
import { ProtectedRoute } from "./ProtectedRoutes";

export function Links() {
  return (
    <Switch>
      {/* REGISTER */}
      <Route path="/register">
        <Register />
      </Route>

      {/* RESET PASSWORD */}
      <Route path="/send-mail">
        <SendMail />
      </Route>

      <Route exact path="/reset-password/:id/:token">
        <ResetPassword />
      </Route>

      {/* HOME */}
      <ProtectedRoute path="/home">
        <Home />
      </ProtectedRoute>

      {/* LOGIN */}
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}

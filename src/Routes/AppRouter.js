import { useRoutes } from "raviger";
import Home from "../Pages/Home";
import ShowDetails from "../Pages/ShowDetails";

const routes = {
  "/": () => <Home />,
  "/showdetails": () => <ShowDetails />,
};

export default function AppRouter() {
  let route = useRoutes(routes);
  return <>{route}</>;
}

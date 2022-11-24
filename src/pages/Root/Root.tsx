import { Outlet } from "react-router";
const Root = () => {
  return (
    <div>
      <p>This is root</p>
      <Outlet />
    </div>
  );
};
export default Root;

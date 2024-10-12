import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/* <MainContainer /> */}
      {/* What will be render in outlet?  as you know children will go wherewver my outlet is. children path config will reder here. means "/" pe <mainContainer/> and dynamic url pe <WatchVedio> */}
      <Outlet />
    </div>
  );
};
export default Body;

// side bar= grid ka 2 span
// MainContainer = grid ka 10 span

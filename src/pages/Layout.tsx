/* itt hatátozuk meg az oldal fő szerkezetét */
//hova is kerünek be a page-k
import { Outlet } from "react-router";

function Layout() {
  return (
    <div>
      Layout
      <Outlet />
    </div>
  );
}

export default Layout;

import { Link } from "react-router";

function Admin() {
  return (
    <div>
      Admin Oldal
      <Link to="uj-termek">Új termék</Link>
    </div>
  );
}

export default Admin;

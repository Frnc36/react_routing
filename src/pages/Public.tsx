import { Link } from "react-router";

function Public() {
  return (
    <section>
      <h2>Public Oldal</h2>
      <p>Itt jelennek meg a termékek</p>
      <Link to="/termek/6">6-ös termék megtekintése</Link>
    </section>
  );
}

export default Public;

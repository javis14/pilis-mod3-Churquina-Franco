import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          {/* <img src={palettoLogo} alt='Logo' className='logo' /> */}
          <h3>LOGO \[T]/</h3>
        </Link>
        <div className="nav-links-container">
          {true ? (
            <Link className="nav-link" to="/location/create">
              New Location
            </Link>
          ) : (
            <span className="nav-link">New Location</span>
          )}

 
        </div>
      </div>{" "}
      <Outlet />
    </>
  );
};

export default Navigation;

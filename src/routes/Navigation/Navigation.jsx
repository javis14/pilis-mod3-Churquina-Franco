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
              Nueva Paleta
            </Link>
          ) : (
            <span className="nav-link">Nueva Paleta</span>
          )}

          {!true ? (
            <span
              className="nav-link"
              // onClick={handleSignOut}
            >
              Cerrar Sesión
            </span>
          ) : (
            <Link className="nav-link sign-in" to="/login">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>{" "}
      <Outlet />
    </>
  );
};

export default Navigation;

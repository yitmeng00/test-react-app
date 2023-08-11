// Destructuring props and state, instead of passing param `props` and return `props.totalCounters`, can just pass in {totalCounters}
// or u can pass the param `props` then add const {totalCounters} = props above the return
const NavBar = ({ totalCounters }) => {
    // lifecycle hooks is not working in functional component
    console.log("NavBar - Rendered");
    return (
        <nav className="navbar navbar-light bg-light">
            <a href="#" className="navbar-brand">
                Navbar{" "}
                <span className="badge badge-pill bg-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};

export default NavBar;

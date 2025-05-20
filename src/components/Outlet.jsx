import { Outlet } from "react-router-dom";

const MainOutlet  = () => {
    return (
        <div className="container">
            <Outlet />
        </div>
    );
}

export default MainOutlet;
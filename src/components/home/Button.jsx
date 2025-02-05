import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = () => {
    return (
        <Link to="/booking">
            <div className="btn-style hidden xl:flex-between-x">
                <p>Book Now</p>
                <FaArrowRightLong />
            </div>
        </Link>
    );
};

export default Button;

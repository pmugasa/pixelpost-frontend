import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  faRightFromBracket,
  faPaperPlane,
  faBoxArchive,
  faCircleUser,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = ({ packedItems, receivedParcel, handleLogout }) => {
  return (
    <>
      <nav className="bg-primary flex p-2 w-screen">
        <div className=" hidden">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            PixelPost
          </Link>
        </div>

        <ul className="menu menu-horizontal flex justify-center space-x-2  w-full mx-auto ">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} size="lg" />
              <span className="hidden lg:block">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/received" className="indicator">
              <div className="indicator">
                <span className="indicator-item indicator-end badge badge-xs badge-secondary">
                  {receivedParcel.length}
                </span>
                <FontAwesomeIcon icon={faInbox} size="lg" />
                <span className="hidden lg:block">Received</span>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/packing-requests">
              <div className="indicator">
                <span className="indicator-item indicator-end badge badge-xs badge-secondary">
                  {packedItems.length}
                </span>
                <FontAwesomeIcon icon={faBoxArchive} size="lg" />
                <span className="hidden lg:block">New Parcel</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/ready-to-send">
              <FontAwesomeIcon icon={faPaperPlane} size="lg" />
              <span className="hidden lg:block">Ready To Send</span>
            </Link>
          </li>

          <li>
            <Link to="/profile">
              <FontAwesomeIcon icon={faCircleUser} size="lg" />
              <span className="hidden lg:block">Profile</span>
            </Link>
          </li>
          <li onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
            <span className="hidden lg:block">Logout</span>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;

import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

export default function CategoryFilter() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center justify-content-lg-end popular-categories">
        <Dropdown className="dropdown dropdown-filter">
          <Dropdown.Toggle
            className="btn btn-dropdown dropdown-toggle"
            id="dropdownCategory"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {" "}
            <span>Categories</span>
          </Dropdown.Toggle>
          <Dropdown.Menu
            as="ul"
            className="dropdown-menu dropdown-menu-light"
            aria-labelledby="dropdownCategory"
            style={{ margin: 0 }}
          >
            <li>
              <Link className="dropdown-item active" to="#">
                Attractives
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Active
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Nature
              </Link>
            </li>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropdown dropdown-filter">
          <Dropdown.Toggle
            className="btn btn-dropdown dropdown-toggle"
            id="dropdownCategory"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {" "}
            <span>Duration</span>
          </Dropdown.Toggle>
          <Dropdown.Menu
            as="ul"
            className="dropdown-menu dropdown-menu-light"
            aria-labelledby="dropdownCategory"
            style={{ margin: 0 }}
          >
            <li>
              <Link className="dropdown-item active" to="#">
                4 Hours
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                8 Hours
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                2 Days
              </Link>
            </li>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropdown dropdown-filter">
          <Dropdown.Toggle
            className="btn btn-dropdown dropdown-toggle"
            id="dropdownCategory"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {" "}
            <span>Review / Rating</span>
          </Dropdown.Toggle>
          <Dropdown.Menu
            as="ul"
            className="dropdown-menu dropdown-menu-light"
            aria-labelledby="dropdownCategory"
            style={{ margin: 0 }}
          >
            <li>
              <Link className="dropdown-item active" to="#">
                Newest
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Oldest
              </Link>
            </li>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropdown dropdown-filter">
          <Dropdown.Toggle
            className="btn btn-dropdown dropdown-toggle"
            id="dropdownCategory"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {" "}
            <span>Price range</span>
          </Dropdown.Toggle>
          <Dropdown.Menu
            as="ul"
            className="dropdown-menu dropdown-menu-light"
            aria-labelledby="dropdownCategory"
            style={{ margin: 0 }}
          >
            <li>
              <Link className="dropdown-item active" to="#">
                $10 - $100
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                $100 - $1.000
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                $1.000 - $10.000
              </Link>
            </li>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}
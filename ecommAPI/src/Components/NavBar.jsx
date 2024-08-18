import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar bg="dark" expand="md">
            <Navbar.Brand href="/customers">Welcome to E-Commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav classname="mr-auto">
                    <Nav.Link as= {NavLink} to="/customers" activeClassName="active">
                    Customers
                    </Nav.Link>

                    <Nav.Link as= {NavLink} to="/products" activeClassName="active">
                    Products
                    </Nav.Link>

                    <Nav.Link as= {NavLink} to="/orders" activeClassName="active">
                    Orders
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;
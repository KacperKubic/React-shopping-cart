import { Container, FormControl, Navbar, Dropdown, Badge } from "react-bootstrap";


const Nav = () => {
    return ( 
        <Navbar bg="dark" variant="dark" style={{height: 55}}>
            <Container>
                <Navbar.Brand>
                    <a href="/">Shopping cart project</a>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl style={{width: 500}} placeholder="Search for a product" className="m-auto"/>
                </Navbar.Text>
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant="success">
                            <Badge>{10}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{minWidth: 370}}>
                            <span style={{padding: 10}}>Cart is empty!</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>

     );
}
 
export default Nav;
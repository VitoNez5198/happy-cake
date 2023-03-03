import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar className="bg-danger" variant="danger">
        <Container className="justify-content-start  text-white">
          <Link to="/" className="text-decoration-none text-white ms-3">Home 🏠</Link>
          <Link to="/contact" className="text-decoration-none text-white ms-3">Contacto 📗</Link>
          <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="text-white ms-3 fw-bold">
                        Happy Cake 🍰 
                    </Navbar.Text>
                </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
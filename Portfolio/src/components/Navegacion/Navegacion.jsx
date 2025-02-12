import { Nav, Container, Navbar } from "react-bootstrap"

function Navegacion() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">Ivan Gomez</Navbar.Brand>
            <Nav>
                <Nav.Link href="#Acerca">Sobre mi</Nav.Link>
                <Nav.Link href="#skills">Habilidades</Nav.Link>
                <Nav.Link href="#proyectos">Proyectos</Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Navegacion

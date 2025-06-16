import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Inicio() {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh',}}>
            <Row className="w-100">
                <Col md={8} lg={6} className="mx-auto">
                    <Card className="text-center shadow-lg" style={{ backgroundColor: '#001f3f', border: 'none' }}>
                        <Card.Body>
                            <Card.Title as="h1" className="mb-4 text-white">Welcome to AGUSShop!</Card.Title>
                            <Card.Text className="mb-4 text-white">
                                Discover our amazing products and start shopping now.
                            </Card.Text>
                            <Link to="/productos">
                                <Button variant="outline-light" size="lg" style={{ backgroundColor: '#ff007f', borderColor: '#ff007f', color: 'white' }}>Enjoy</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Inicio;


/*import { Link } from "react-router-dom"

function Inicio() {
    return(
        <div>
            <h1>Welcome to our shooping page!</h1>
            <Link to="/productos"><button>Comenzar</button></Link>
            
        </div>
    )
}

export default Inicio*/
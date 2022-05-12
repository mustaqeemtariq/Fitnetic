import React from "react";
import { Link } from "react-router-dom";
import { Col,Row, Button, Container } from "react-bootstrap";

const QuestionCard=({quest, id})=>{
     return(
         <Container style={{ justifyContent: 'center', paddingTop: "3vh", paddingBottom:"2vh"}}>
        <Row style={{ minHeight:"10vh", maxHeight:"20%", textDecoration:"none", minWidth: "35vw", maxWidth: "70%"  }} className="shadow p-3 mb-5 bg-white rounded">
        <Col sm={12} md={12} lg={12} >
            <h5 >
               QUESTION
            </h5>
         </Col>
         <Col sm={12} md={12} lg={12}>
            <pre >
               {quest}
            </pre>
         </Col>
         <Col md={12} lg={12} sm={12} style={{ display: "flex" }}>
         <Link to={`/api/dashboard/answers/${id}`} style={{ marginLeft: "auto", marginTop: "5vh" }}>
            <Button  variant="dark" type="button" >
                Answer               
            </Button>
            </Link>
        </Col>              
         </Row>
         </Container>
     )
}
export default QuestionCard
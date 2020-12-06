import React from 'react'
import BigCard from '../Home/BigCard'
import {Container,Row,Col} from "react-bootstrap"
import '../../css/info.css'
const Info=()=>{
  return (
    <section className="info mt-5 mb-5 p-5">
      <Container>
        <Row>
          <Col>
            <BigCard
              title="What We Do"
              text="Godsway Dzoboku, principal of Outwood Academy Portland, in Worksop, Nottinghamshire, has re-organised classroom desks into rows, with each child being given a personalised pack of rulers, pens and other classroom equipment"
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <BigCard
              title="What We Do"
              text="Godsway Dzoboku, principal of Outwood Academy Portland, in Worksop, Nottinghamshire, has re-organised classroom desks into rows, with each child being given a personalised pack of rulers, pens and other classroom equipment"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );

}

export default Info
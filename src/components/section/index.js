import React from 'react'
import {
  Card, CardTitle, CardText, Col, Row
} from 'reactstrap';


const Section = ({ data }) => (
  <Row className="row-eq-height">
    { data.sort(
      (a, b) => a.node.frontmatter.order - b.node.frontmatter.order
      ).map(value => (
        <Col key={value.id} className="mb-2" lg="12" md="12">
          <Card body className='shadow-sm bg-white h-100'>
            <CardTitle>
              <h2>{value.node.frontmatter.title}</h2>
            </CardTitle>
            <CardText>
              <div dangerouslySetInnerHTML={{ __html: value.node.html }} />
            </CardText>
          </Card>
        </Col>
    ))}
  </Row>
)

export default Section

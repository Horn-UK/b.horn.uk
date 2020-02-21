import React from 'react'
import {
  Card, CardBody, CardHeader, CardText, Col, Row
} from 'reactstrap';


const Section = ({ data }) => (
  <Row className="row-eq-height">
    { data.sort(
      (a, b) => a.node.frontmatter.order - b.node.frontmatter.order
      ).map(value => (
        <Col key={value.id} className="mb-2" lg="12" md="12">
          <Card>
            <CardHeader>
              {value.node.frontmatter.title}
            </CardHeader>
            <CardBody>
              <CardText>
                <div dangerouslySetInnerHTML={{ __html: value.node.html }} />
              </CardText>
            </CardBody>
          </Card>
        </Col>
    ))}
  </Row>
)

export default Section

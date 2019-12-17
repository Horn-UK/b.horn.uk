import React from 'react'
import { Jumbotron, Container} from 'reactstrap'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SectionBox from '../components/section'

const IndexPage = ({ data }) => (
  <Layout>
    <Container>
      <Jumbotron>
        <h1 className="display-3">{data.site.siteMetadata.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Jumbotron>
      <SectionBox data={data.allMarkdownRemark.edges} />
    </Container>
  </Layout>
)


export const query = graphql`
  query NameQuery {
    site {
      siteMetadata {
        title
      }
    },

    markdownRemark(frontmatter: { tag : { eq: "header" } } ) {
      html
    },

    allMarkdownRemark(filter: { frontmatter: { tag: { eq: "body" } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            order
          }
        }
      }
    }
  }
`

export default IndexPage

import React from "react"
import { graphql } from "gatsby"
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Img from 'gatsby-image';

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
      
        {data.allShopifyArticle.edges.map(({ node }) => (
          <div key={node.id}>


            <h3
              className={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.title}
              
            </h3>

            {node.content} 

          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {

  allShopifyArticle (limit:4) {
    edges {
      node {
        id
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
               }
             }
          }
        }
        author {
          email
          name
        }
        title
        content
        publishedAt(formatString: "ddd, MMMM Do, YYYY")
      }
    }
  }
}

`
import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout';
import Box from '../components/box';



export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <Box>
      
        {data.allShopifyArticle.edges.map(({ node }) => (
          <div key={node.id}>
           <h3
             
            >
              {node.title}
              
            </h3>
<img src={node.image.src} alt={node.id} />
           < p> {node.content} </p>

           


          </div>
        ))}
        </Box>

      </div>
    </Layout>
  )
}

export const query = graphql`
  query {

  allShopifyArticle (limit:7) {
    edges {
      node {
        id
        image {
          src
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
        contentHtml
        publishedAt(formatString: "ddd, MMMM Do, YYYY")
      }
    }
  }
}

`
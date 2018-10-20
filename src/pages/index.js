import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout';
import Img from 'gatsby-image';
import styled from "styled-components";
import Box from '../components/box';


export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
      
        <h4>{data.allShopifyProduct.title} </h4>
        <Box>
        {data.allShopifyProduct.edges.map(({ node }) => (

          <div key={node.id}>
<Img fluid={node.images[0].localFile.childImageSharp.fluid}/>

            <h3
               
            >
              {node.title}
              
            </h3>

            <p>USD ${node.variants[0].price} </p>
            <p> {node.vendor} </p>

          </div>
        ))}
        </Box>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allShopifyProduct (limit: 10) {
    edges {
      node {
        id
        title
        handle
        descriptionHtml
        productType
        vendor
        variants {
        	price
        }
        images {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
               }
             }
          }
        }
        
      }
    }
  }
  }
`
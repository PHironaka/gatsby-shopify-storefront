import React from "react"
import Layout from "../components/layout"

export default ({ pageContext: { product } }) => (
    <Layout>
      <div>
        <h1>{product.title}</h1>
        <img src={product.images[0].originalSrc} alt={product.title} />
        <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />

      </div>
    </Layout>
 
)



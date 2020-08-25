
export const query = graphql`
  query {
    coffee: file(relativePath: {eq: "portfolio/coffee.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
import { graphql, useStaticQuery } from 'gatsby';

function useSiteMetadata() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return siteMetadata;
}

export default useSiteMetadata;

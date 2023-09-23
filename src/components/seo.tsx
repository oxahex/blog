import { graphql, useStaticQuery } from "gatsby";
import React, { ReactElement } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  children?: ReactElement;
}
const SEO = ({ description: d, title: t, children }: SEOProps) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const description = d || site.siteMetadata.description;
  const title = t || site.siteMetadata.title;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {children}
    </>
  );
};

export default SEO;
import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Flex, Text } from "@chakra-ui/react";

interface TagSectionProps {
  currentTag: string | undefined;
}

const Navigation = ({ currentTag }: TagSectionProps) => {
  const data = useStaticQuery(graphql`
    query Tags {
      allMdx {
        group(field: { frontmatter: { tags: SELECT } }) {
          count: totalCount
          name: fieldValue
        }
        totalCount
      }
    }
  `);

  return (
    <Flex
      as="nav"
      width="100%"
      height="100%"
      justifyContent="center"
      columnGap="0.5rem"
      rowGap="0.2rem"
      flexWrap="wrap"
      padding={{ base: "0 1rem", md: "0" }}
    >
      {Object.values(data.allMdx.group).map((tag) => {
        const { count, name } = tag as {
          name: string;
          count: number;
        };
        return (
          <Link key={name} to={`/tags/${name}`}>
            <Flex justifyContent="center" alignItems="flex-start">
              <Text
                fontSize={{ base: "0.9rem", md: "1rem" }}
                fontWeight={600}
                _hover={{ textDecoration: "underline" }}
              >
                {name}
              </Text>
              <Text fontSize="0.6rem" fontWeight={600}>
                {count}
              </Text>
            </Flex>
          </Link>
        );
      })}
    </Flex>
  );
};

export default Navigation;

import React from "react";
import { Link } from "gatsby";
import { Box, Flex, Text } from "@chakra-ui/react";

interface PostCardProps {
  id: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  tags: readonly (string | null)[];
}

const PostCard = ({
  id,
  title,
  description,
  slug,
  createdAt,
  tags,
}: PostCardProps) => {
  return (
    <Box as="li" padding="1rem">
      <Link to={`/posts/${slug}`}>
        <Box overflow="hidden" width="100%" height="100%">
          <Flex direction="column">
            <Text fontSize="1rem" fontWeight={600}>
              {title}
            </Text>
            <Text fontSize="0.8rem" marginBottom="0.3rem">
              {description}
            </Text>
            <Text fontSize="0.6rem">{createdAt}</Text>
          </Flex>
        </Box>
      </Link>
    </Box>
  );
};

export default PostCard;

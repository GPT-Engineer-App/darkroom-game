import React from "react";
import { Box, Container, Heading, Text, Button, Image, Link, VStack } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="xl" centerContent>
      <VStack spacing={4}>
        <Box d="flex" alignItems="center" justifyContent="center" p={5}>
          <Image borderRadius="md" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcm9vbSUyMGdhbWV8ZW58MHx8fHwxNzEwMDM5NjM5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="A Dark Room Game" />
        </Box>
        <Heading as="h1" size="xl" textAlign="center">
          A Dark Room
        </Heading>
        <Text fontSize="md" textAlign="center">
          Embark on an enigmatic journey in a desolate and dark room. Start with a cold, dimly lit hut and build your world amidst the shadows.
        </Text>
        <Link href="http://adarkroom.doublespeakgames.com/" isExternal>
          <Button rightIcon={<FaExternalLinkAlt />} colorScheme="teal">
            Play Now
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;

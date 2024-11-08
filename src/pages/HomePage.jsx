import {
  Box,
  Button,
  Center,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import instagram from "../assets/icons/instagram.png";
import youtube from "../assets/icons/youtube.png";
import telegram from "../assets/icons/telegram.png";
import rasm from '../assets/images/rasm.jpg'
function HomePage() {
  return (
    <Center mt={{ base: 10, md: 20 }} px={{ base: 5, md: 20 }} ml={{ base: 0, md: 20 }}>
      <Box
        maxW={{ base: "100%", lg: 1300 }}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        gap={10}
      >
        <VStack align="flex-start" spacing={4}>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} color="white">
            Hi, It’s Khasanboy
          </Heading>
          <Box display="flex" gap={2}>
            <Text fontSize={{ base: "xl", md: "2xl" }} color="white">
              I am a
            </Text>
            <Text fontSize={{ base: "xl", md: "2xl" }} color="#00ffee" textShadow="0 0 25px #00ffee">
              Frontend Developer
            </Text>
          </Box>
          <Text color="white" fontSize={{ base: "md", md: "lg" }}>
          Frontend development is the process of building the visual and interactive parts of a
           website or web application that users see and interact with. Here’s an overview of what 
           frontend development encompasses, the skills needed, and the tools commonly used.
          </Text>
          <Box display="flex" gap={4}>
            <a href="https://www.instagram.com/hasanboy_3001/">
              <Image
                borderRadius={18}
                background="#00ffee"
                boxShadow="0 0 25px #00ffee"
                w={{ base: 8, md: 10 }}
                src={instagram}
              />
            </a>
            <a href="https://www.youtube.com/@chess_gambits_learning">
              <Image
                borderRadius={18}
                background="#00ffee"
                boxShadow="0 0 25px #00ffee"
                w={{ base: 8, md: 10 }}
                src={youtube}
              />
            </a>
            <a href="https://t.me/hasanboy_3001">
              <Image
                borderRadius={70}
                background="#00ffee"
                boxShadow="0 0 25px #00ffee"
                w={{ base: 8, md: 10 }}
                src={telegram}
              />
            </a>
          </Box>
          <Box>
            <Link to="/contact">
              <Button colorScheme="black-alpha" background="#00ffee" color="black">
                Contact me
              </Button>
            </Link>
          </Box>
        </VStack>

        <Image
          boxShadow="0 0 25px #00ffee"
          src="https://img.freepik.com/premium-photo/man-working-desk-with-laptop-productive-work-flat-design-generative-ai_176697-2787.jpg"
          boxSize={{ base: "200px", md: "300px", lg: "450px" }}
          borderRadius="full"
          fit="cover"
          alt="Naruto Uzumaki"
          mt={{ base: 5, md: 0 }}
        />
      </Box>
    </Center>
  );
}

export default HomePage;

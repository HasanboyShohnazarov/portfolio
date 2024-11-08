import { Box, SimpleGrid, Text, Heading, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import img from '../assets/images/certificate.gif';
import img1 from '../assets/images/certificate-foundation.JPG';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

function ServicesPage() {
  return (
    <Box color="white" py={{ base: 10, md: 15 }} px={{ base: 3, md: 5 }}>
      <Heading fontSize={{ base: "2xl", md: "4xl" }} textAlign="center" mb={10}>
        Services
      </Heading>
      
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 10 }}>
        
        <MotionBox
          m={{ base: 4, md: 6 }}
          bg="teal.400"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          boxShadow="lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Heading as="h3" size={{ base: "md", md: "lg" }} mb={4}>
            UI Design
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }}>
            I have used Chakra UI, Ant Design, Material UI and other libraries to create sites with impressive designs.
          </Text>
        </MotionBox>

        <MotionBox
          m={{ base: 4, md: 6 }}
          bg="teal.400"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          boxShadow="lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Heading as="h3" size={{ base: "md", md: "lg" }} mb={4}>
            Frontend Development
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }}>
            I studied JavaScript, HTML, CSS, TypeScript, ReactJS, NextJS, Tailwind CSS, and RestAPI as part of my frontend training.
          </Text>
        </MotionBox>

        {/* Responsive image container */}
        <Box display="flex" flexDirection={{ base: "column", md: "row" }} justifyContent="space-between" w="100%" gap={4}>
          <MotionImage
          ml={3}
            src={img}
            w={{ base: "90%", md: "100%" }}
            h={{ base: "auto", md: "500px" }}
            alt="Certificate"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          />
          <MotionImage
          ml={3}
            src={img1}
            w={{ base: "90%", md: "100%" }}
            h={{ base: "auto", md: "500px" }}
            alt="Certificate"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          />
        </Box>
        
      </SimpleGrid>
    </Box>
  );
}

export default ServicesPage;

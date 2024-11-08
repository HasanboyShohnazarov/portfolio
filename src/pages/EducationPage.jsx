import React from 'react';
import { Box, Text, VStack, HStack, Circle } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const EducationPage = () => {
  const timelineData = [
    { year: "2023", title: "Foundation", description: "I studied on the foundation course from January 20, 2023 and received a certificate on March 24, 2023" },
    { year: "2023", title: "Frontend", description: "I studied the frontend programming course from May 7, 2022. and I received the certificate on December 13, 2022." },
    { year: "2024", title: "Acer", description: "I made a mockup of 6 pages of the 2024 Acer site, and of course chakra ui library and backend were used on this site" },
    { year: "2024", title: "Chakra UI", description: "In 2024 I studied Chakra UI, Material UI, Ant Design and other libraries and Rest API and so far I have done a lot of work on the frontend." },
  ];

  return (
    <VStack mt={5} position="relative" spacing={10} align="center">
      {/* Timeline Line */}
      <Box position="absolute" height="100%" width="2px" bg="#00ffee" />

      {timelineData.map((item, index) => (
        <HStack
          key={index}
          w="full"
          spacing={6}
          align="center"
          justify={{ base: "center", md: index % 2 === 0 ? "flex-start" : "flex-end" }}
          px={{ base: 4, md: 0 }}
        >
          {/* Left Side for Even */}
          {index % 2 === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Box
                ml={{ base: 0, md: 360 }}
                p={{ base: 4, md: 6 }}
                maxW={{ base: "90%", md: "350px" }}
                bg="black"
                color="white"
                border="2px solid"
                borderColor="#00ffee"
                borderRadius="lg"
                position="relative"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: "lg",
                  boxShadow: "0 0 20px #00ffee",
                  zIndex: -1,
                }}
              >
                <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }} mb={2}>
                  {item.title}
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }}>{item.description}</Text>
              </Box>
            </motion.div>
          )}

          {/* Year and Circle */}
          <VStack spacing={3}>
            <Text color="white" fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>{item.year}</Text>
            <Circle size={{ base: "8px", md: "10px" }} bg="#00ffee" />
          </VStack>

          {/* Right Side for Odd */}
          {index % 2 !== 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Box
                mr={{ base: 0, md: 360 }}
                p={{ base: 4, md: 6 }}
                maxW={{ base: "90%", md: "350px" }}
                bg="black"
                color="white"
                border="2px solid"
                borderColor="#00ffee"
                borderRadius="lg"
                position="relative"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: "lg",
                  boxShadow: "0 0 20px #00ffee",
                  zIndex: -2,
                }}
              >
                <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }} mb={2}>
                  {item.title}
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }}>{item.description}</Text>
              </Box>
            </motion.div>
          )}
        </HStack>
      ))}
    </VStack>
  );
};

export default EducationPage;

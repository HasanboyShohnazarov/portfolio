import React from 'react';
import { Box, Container, Heading } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';

const HeaderPage = () => {
  return (
    <>
      <Container maxW={{ base: "100%", lg: 1300 }} px={{ base: 4, md: 5 }} py={4}>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" gap={3} mt={{ base: 0, md: 5 }} alignItems="center">
            <Heading color="white" fontSize={{ base: "lg", md: "xl" }}>
              Khasanboy
            </Heading>
            <Heading textShadow="0 0 25px #00ffee" color="#00ffee" fontSize={{ base: "lg", md: "xl" }}>
              Shokhnazarov
            </Heading>
          </Box>

          <Box display="flex" gap={{ base: 3, md: 5 }} mt={{ base: 3, md: 5 }} flexWrap="wrap">
            {['/', '/education', '/services', '/contact'].map((path, index) => (
              <NavLink key={index} to={path}>
                {({ isActive }) => (
                  <Box
                    as="span"
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight="bold"
                    color={isActive ? '#00ffee' : 'white'}
                    position="relative"
                    _hover={{
                      _before: {
                        width: '100%',
                        transition: 'width 0.3s ease-in-out',
                      },
                    }}
                    _before={{
                      content: '""',
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      height: '2px',
                      width: isActive ? '100%' : '0%',
                      backgroundColor: '#00ffee',
                      transition: 'width 0.3s ease-in-out',
                    }}
                  >
                    {path.slice(1) || 'Home'}
                  </Box>
                )}
              </NavLink>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HeaderPage;

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  Button,
  Input,
  Textarea,
  Text,
  Heading,
  Center,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [additionalStatus, setAdditionalStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setAdditionalStatus('');

    emailjs
      .sendForm('service_qufwugi', 'template_hjsln72', form.current, {
        publicKey: 'rpEGacnUoyLczMv4X'
      })
      .then(
        () => {
          setStatus('Success! Your message has been sent.');
          setAdditionalStatus('We appreciate your feedback.');
          form.current.reset();
        },
        (error) => {
          setStatus(`Failed to send message. Error: ${error.text}`);
          setAdditionalStatus('Please try again later.');
        }
      );
  };

  return (
    <>
      <Center mt={10}>
        <Heading
          fontSize={{ base: '3xl', md: '4xl' }}
          color="white"
          mr={3}
        >
          Contact
        </Heading>
        <Heading
          textShadow="0 0 25px #00ffee"
          fontSize={{ base: '3xl', md: '4xl' }}
          color="#00ffee"
        >
          Me
        </Heading>
      </Center>
      
      <Box
        mt={8}
        p={6}
        maxW={{ base: '90%', md: '700px' }}
        mx="auto"
        bgGradient="linear(to-br, #00bcd4, #00ffee)"
        borderRadius="lg"
        boxShadow="lg"
      >
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Box mb={4}>
            <Text color="#fff" fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" htmlFor="user_name">
              Your name
            </Text>
            <Input
              id="user_name"
              name="user_name"
              placeholder="Your name"
              borderRadius="md"
              borderColor="#fff"
              _hover={{ borderColor: '#00ffee' }}
              _focus={{ borderColor: '#00ffee', boxShadow: '0 0 5px #00ffee' }}
              mb={4}
            />
          </Box>

          <Box mb={4}>
            <Text color="#fff" fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" htmlFor="user_email">
              Your email
            </Text>
            <Input
              id="user_email"
              name="user_email"
              type="email"
              placeholder="Email"
              borderRadius="md"
              borderColor="#fff"
              _hover={{ borderColor: '#00ffee' }}
              _focus={{ borderColor: '#00ffee', boxShadow: '0 0 5px #00ffee' }}
              mb={4}
            />
          </Box>

          <Box mb={4}>
            <Text color="#fff" fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" htmlFor="message">
              Your message
            </Text>
            <Textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              borderRadius="md"
              borderColor="#fff"
              _hover={{ borderColor: '#00ffee' }}
              _focus={{ borderColor: '#00ffee', boxShadow: '0 0 5px #00ffee' }}
              mb={4}
              color="#fff"
              _placeholder={{ color: '#b0b0b0' }}
            />
          </Box>

          <Button
            w="full"
            bg="#00ffee"
            color="black"
            type="submit"
            _hover={{ bg: '#00bcd4' }}
            _active={{ transform: 'scale(0.98)' }}
            transition="all 0.2s ease"
          >
            Send
          </Button>
        </motion.form>

        {status && (
          <Box mt={4} p={4} color={status.startsWith('Failed') ? 'red.500' : 'green.500'}>
            {status}
          </Box>
        )}

        {additionalStatus && (
          <Box mt={2} p={4} color={additionalStatus.startsWith('Please') ? 'red.500' : 'blue.500'}>
            {additionalStatus}
          </Box>
        )}
      </Box>
    </>
  );
};

export default ContactPage;

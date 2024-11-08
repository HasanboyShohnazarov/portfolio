import { Box, Button, Center, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <>
   
      <Box >
      <Center><Heading color={"#00ffee"}>
      You are lost!
    </Heading>
    </Center> 
    <Center>
   <Heading color='#00ffee'><Link  to={"/"}>back to home page</Link></Heading>
   </Center>
  
 <Link to={'/'}> <Center> <Button background={'#00ffee'} color={'black'}>click</Button></Center></Link> 
 
     <Center>  <Image w={900} src="https://www.cloudns.net/blog/wp-content/uploads/2023/10/Error-404-Page-Not-Found.png"/>
     </Center> 
    </Box>
   
    </>
  )
}

export default NotFoundPage
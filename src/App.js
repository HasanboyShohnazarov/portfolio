import logo from './logo.svg';
import './App.css';
import HeaderPage from './pages/HeaderPage';
import { Container } from '@chakra-ui/react';
function App() {
  return (
   <>
<Container maxW={"1300px"} px={20}>
   <HeaderPage/>
   </Container>
   </>
  );
}

export default App;

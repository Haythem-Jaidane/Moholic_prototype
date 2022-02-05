import { Button, Alert, AlertIcon, Box, AlertTitle, AlertDescription, CloseButton, Input, Text } from '@chakra-ui/react';
import { Container, Heading } from '@chakra-ui/layout';
import { useMoralis } from 'react-moralis';
import { useState } from 'react';
import React from 'react';
/*import { Route ,Switch } from 'react-router-dom';
import { Home } from './Home'
import { Profile } from './Profile'*/

const SignUp = () => {
  const { signup } = useMoralis();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Box>
      <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
      <Input
        placeholder="Password" 
        type="password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <Button onClick={() => signup(email, password, email)}>Sign up</Button>
    </Box>
  );
};

const Login = () => {
  const { login } = useMoralis();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Box>
      <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <Button onClick={() => login(email, password)}>Login</Button>
    </Box>
  );
};

function App() {
  const { authenticate, isAuthenticating, isAuthenticated, authError, logout , user } = useMoralis();

 /* return 
    <Switch>  
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
      </Switch>
   */   
  

  if (isAuthenticated) {
    return (
    <Container>
      <Heading>Welcome to Moholic , {user.attributes.username} </Heading>
      <Button onClick={() => logout()}>Logout</Button>
    </Container>
    ); 
  }

  return(
    <Container>
    <Heading mb={6}>Moholic</Heading> 
    {authError && (
        <Alert status="error">
         <AlertIcon />
         <Box flex="1">
          <AlertTitle>Authentication has failed</AlertTitle>
          <AlertDescription display="block">{authError.message}</AlertDescription>
         </Box>
        <CloseButton position='absolute' right='8px' top='8px' />
        </Alert>
      )}
      <Button mb={5} isLoading={isAuthenticating} onClick={() => authenticate() }>
        Authenticate via Metamask
      </Button>
      <Text mb={5}>
        <em></em>
      </Text>
      <SignUp />
      <Text mb={5}></Text>
      <Text mb={5}>
        <em></em>
      </Text>
      <Login />
    </Container>
);
}
export default App;
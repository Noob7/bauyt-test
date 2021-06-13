
import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import {useEffect, useState} from 'react';
import { getPublicGists } from './services/gistService';
import GistList from './components/GistList';

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

const App = () => {

  const [gists, setGists] = useState([]);
  const [userGists, setUserGists] = useState([])

  useEffect(() => {
   // To get around doing async oprtations in hooks we need some extra work
    let isMounted = true;   
    getPublicGists().then(data=>{
      if (isMounted) setGists(data.data);    // add conditional check
      }).catch(err => alert(err)) 
    return () => { isMounted = false }; // use cleanup to toggle value, if unmounted
  }, []);

  return (
    <Wrapper className="App" data-testid="app">
      <Header setUserGists = {setUserGists}/>
      <GistList gists={gists} userGists={userGists} setUserGists = {setUserGists}/>
      <GlobalStyles />
    </Wrapper>
  );
}


export default App;


import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import {useEffect, useState} from 'react';
import { getPublicGists } from './services/gistService';
import GistList from './components/GistList';

const App = () => {

  const [gists, setGists] = useState([]);

  useEffect(() => {
    getPublicGists().then(data=>setGists(data.data)).catch(err => alert(err)) 
  }, []);

  return (
    <Wrapper className="App" data-testid="app">
      <Header />
      <GistList gists={gists}/>
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;

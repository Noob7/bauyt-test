import React,{useState} from 'react'
import PropTypes from 'prop-types';

import styled from 'styled-components'
import Octicon from 'react-octicon'


import Search from './Search';
import { getGistForUser } from '../services/gistService';


function Header({setUserGists}) {

const [text, setText] = useState('');
const [spinner, setSpinner] =  useState(false);


  const searchUserGists = async () => {
    if(!text){alert('Please type in a username to search gists for')}
    try{
      setSpinner(true);
      const data = await getGistForUser(text);
      if(!data.data.length){
        alert(`No gists found for ${text} !`);
        setText('')
        return
      }
      setUserGists(data.data)  
    } catch(e)
    { alert('User not Found!!!');
      setText('')
      console.log(e)
    }finally{
      setSpinner(false);
    }
  }

  
  return (
    <Wrapper>
      <Octicon name="mark-github" mega/>
      <Search text={text} setText={setText} />
      <SearchIcon data-testid="searchIcon" onClick={searchUserGists} />
      <Spinner enabled={spinner} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled(Octicon).attrs({
  name:'search'
})`
cursor: pointer;
`

const Spinner = styled.img.attrs({
  src:'/spinner.gif'
})`
display: ${props=>props.enabled?'inline':'none'};
width:20px;
height: 20px;
background-color: #24292e;
`

Header.propTypes = {
  setUserGists: PropTypes.func.isRequired,
};

export default Header

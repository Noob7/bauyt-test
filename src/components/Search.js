import React from 'react'
import PropTypes from 'prop-types';

import styled from 'styled-components'
import Octicon from 'react-octicon'

const Search = ({text, setText}) => {
  return (
    <Wrapper>
      <InputBox >
      <Octicon name="search" />
      <Input data-testid="searchInput" placeholder="Search Gists for the username" value={text} onChange={(e)=>setText(e.target.value)}/>
      </InputBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus{
    outline: 0;
  }
`;

Search.propTypes = {
  text: PropTypes.string,
  setText: PropTypes.func.isRequired,
};

export default Search

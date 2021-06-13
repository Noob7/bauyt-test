import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import Octicon from "react-octicon";

import Gist from "./Gist";

const Container = styled.div`
  padding: 10px 40px;
`;

const StyledTrashCan = styled(Octicon).attrs({
  name: "trashcan",
})`
  color: red;
`;

const Heading = styled.p``;
const BlueText = styled.span`
  color: #0366d6;
`;
const RedText = styled.span`
  color: red;
`;

const Clear = styled.span`
  margin-left: 30px;
  cursor: pointer;
`;

const GistList = ({ gists, userGists, setUserGists }) => {
  // We are using the same component to show both userGists and public gists. If user gists are non-empty
  // we show those or else we show public gists

  // this method clears userGists and reverts to showing public gists
  const clearUserGists = () => {
    setUserGists([]);
  };

  return (
    <Container>
      {!!userGists.length && (
        <>
          <Heading>
            Showing results for:{" "}
            <BlueText>{userGists[0].owner.login} </BlueText>
            <Clear onClick={clearUserGists}>
              <StyledTrashCan />
              <RedText>Clear</RedText>
            </Clear>
          </Heading>
          {userGists.map((userGist) => (
            <Gist gist={userGist} />
          ))}
        </>
      )}

      {!userGists.length && gists.map((gist) => <Gist gist={gist} />)}
    </Container>
  );
};

GistList.propTypes = {
  gists: PropTypes.arrayOf(PropTypes.object),
  userGists: PropTypes.arrayOf(PropTypes.object),
  setUserGists: PropTypes.func.isRequired,
};

export default GistList;

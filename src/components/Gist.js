import PropTypes from "prop-types";
import styled from "styled-components";
import Octicon from "react-octicon";

const Container = styled.div`
  font-size: 12px;
  width: 60%;
  margin: 20px auto;
  padding-bottom: 10px;
  border-bottom: 1px solid #dedede;
`;

const GistHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const GistUser = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;
const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;
const UserName = styled.span`
  color: #0366d6;
`;

const GistActions = styled.div`
  display: flex;
  grid-gap: 15px;
  justify-content: space-between;
`;
const GistAction = styled.div`
  display: flex;
  grid-gap: 4px;
  justify-content: left;
  align-items: center;
`;

const GistSubContext = styled.div`
  font-size: 10px;
  display: flex;
  grid-gap: 10px;
`;

const GistContent = styled.div`
  padding: 10px 0;
`;

const GistInfo = styled.div``;
const GistFiles = styled.div`
  color: #0366d6;
  display: flex;
  grid-gap: 20px;
  padding: 10px 0;
`;
const GistFile = styled.div`
  display: flex;
  align-items: center;
`;
const GistFileName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 150px;
  display: inline-block;
`;

const UnstyledAnchor = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Gist = ({ gist }) => {
  console.log(gist);
  return (
    <Container>
      <GistHeader>
        <GistUser>
          <Avatar src={gist.owner.avatar_url} />
          {/* Adding test id for testing */}
          <UserName data-testid="name">{gist.owner.login}</UserName>
        </GistUser>
        <GistActions>
          <GistAction>
            <Octicon name="file" />
            {Object.keys(gist.files).length} File
            {Object.keys(gist.files).length > 1 ? "s" : ""}
          </GistAction>
          {/* <GistAction>
            <Octicon name="repo-forked" />
            Forks
          </GistAction> */}
          <GistAction>
            <Octicon name="comment" />
            {gist.comments} Comment
            {gist.comment > 1 || gist.comments === 0 ? "s" : ""}
          </GistAction>
          {/* <GistAction>
            <Octicon name="star" />
            Stars
          </GistAction> */}
        </GistActions>
      </GistHeader>
      <GistSubContext>
        <label>Created at: 11/17/20</label>
        <label>Last updated at: 11/17/20</label>
      </GistSubContext>
      <GistContent>
        <GistInfo>{gist.description}</GistInfo>
        <GistFiles>
          {Object.keys(gist.files)
            .slice(0, 4)
            .map((fileItem) => (
              <UnstyledAnchor href={gist.files[fileItem].raw_url}  target="_blank">
                <GistFile>
                  <Octicon name="file" />
                  <GistFileName>{gist.files[fileItem].filename}</GistFileName>
                </GistFile>
              </UnstyledAnchor>
            ))}
        </GistFiles>
      </GistContent>
    </Container>
  );
};

// Only describing the properties we are actually using
Gist.propTypes = {
  gist: PropTypes.shape({
    comments: PropTypes.number,
    description: PropTypes.string,
    owner: {
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    },
    files: PropTypes.object,
  }),
};

export default Gist;

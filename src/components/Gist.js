import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 10px;
`;

const Row = styled.div`
  display: flex;
  grid-gap: 5px;
  align-items: center;
  justify-content: space-between;
`;

const Col = styled.div`
  background-color: lightgray;
  display: flex;
  justify-content: left;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;
const UserName = styled.span`
  color: #0366d6;
  font-size: 12px;
`;

const Gist = ({ gist }) => {
  console.log(gist);
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col>
              <Avatar src={gist.owner.avatar_url} />
            </Col>
            <Col>
              <UserName>{gist.owner.login}</UserName>
            </Col>
          </Row>
        </Col>
        <Col>
        <Row>
            <Col>
            File
            </Col>
            <Col>
            Forks
            </Col>
            <Col>
            Comments
            </Col>
            <Col>
            Stars
            </Col>
        </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Gist;

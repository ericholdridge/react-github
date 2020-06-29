/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from "../GlobalComponents/Container/Container";

const Navigation = ({setActive}) => {
  return(
    <Container>
      <nav className="navigation" css={styles}>
        <button onClick={() => setActive("Overview")}>Overview</button>
        <button onClick={() => setActive("Repositories")}>Repositories</button>
        <button onClick={() => setActive("Followers")}>Followers</button>
      </nav>
    </Container>
  )
}

const styles = css`
  width: 100%;
  border-bottom: 1px solid #e1e4e8;
  margin: 20px 0;
  padding: 0 0 10px 0;
  display: flex;
  button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 16px;
    padding: 0 10px;
    outline: none;
    &:nth-child(1) {
      padding-left: 0;
    }
  }
`

export default Navigation;
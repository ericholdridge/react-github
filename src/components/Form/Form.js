/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from "../GlobalComponents/Container/Container";

const Form = ({search, setSearch, getData}) => {
  return(
    <div className="form" css={styles}>
      <Container>
          <input type="text" placeholder="Search for user..." onChange={(e) => setSearch(e.target.value)} value={search}/>
          <button onClick={getData}>Search User</button>
      </Container>
    </div>
  )
}

const styles = css`
  width: 100%;
  background: #24292e;
  padding: 20px 0;
  .container {
    height: 35px;
    input,button {
      height: 100%;
      border: none;
      outline: none;
      padding: 0 10px;
    }
    input {
      width: 400px;
      border-radius: 6px 0 0 6px;
    }
    button {
      color: #000;
      font-weight: 600;
      cursor: pointer;
    }
  }
`

export default Form;
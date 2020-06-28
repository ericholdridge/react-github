/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from "../GlobalComponents/Container/Container";

const Form = ({search, setSearch, getData}) => {
  return(
    <nav className="navbar" css={styles}>
      <Container>
        <form onSubmit={getData}>
          <input type="text" placeholder="Search for user..." onChange={(e) => setSearch(e.target.value)} value={search}/>
        </form>
      </Container>
    </nav>
  )
}

const styles = css`
  width: 100%;
  .container {
    padding: 20px 0;
    form {
      display: block;
      input {
        width: 400px;
        height: 35px;
        padding: 0 0 0 10px;
      }
    }
  }
`

export default Form;
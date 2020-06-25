/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from "../GlobalComponents/Container/Container";

const Navbar = () => {
  return(
    <nav className="navbar" css={styles}>
      <Container>
        <form action="">
          <input type="text" placeholder="Search for user..."/>
        </form>

        <div className="navItems">
          <a href="">Overview</a>
          <a href="">Repositories</a>
          <a href="">Projects</a>
          <a href="">Packages</a>
        </div>
        
      </Container>
    </nav>
  )
}

const styles = css`
  width: 100%;
  padding: 40px 0 20px 0;
  border-bottom: 1px solid #e1e4e8;
  .container {
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    form {
      display: block;
      input {
        width: 400px;
        height: 35px;
        padding: 0 0 0 10px;
      }
    }
    a {
      padding: 0 20px;
      color: #000;
      text-decoration: none;
    }
  }
`

export default Navbar;
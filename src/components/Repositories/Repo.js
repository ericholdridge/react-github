/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Repo = ({repo, link, language}) => {
  return(
    <div className="repo" css={styles}>
      <a href={link}>{repo}</a>
      <span>{language}</span>
    </div>
  
  )
}

const styles = css`
  width: 100%;
  max-width: 380px;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin: 0 0 10px 0;
  border: 1px solid gray;
  cursor: pointer;
  a {
    text-decoration: none;
    color: rgb(3, 102, 214);
    margin: 30px 0 0 10px;
  }
  span {
    display: block;
    margin: 20px 0 0 10px;
  }
`;

export default Repo;
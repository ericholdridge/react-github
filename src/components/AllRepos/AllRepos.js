/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const AllRepos = ({repos}) => {
  return(
    <div className="allRepos" css={styles}>
      {
        repos.map(repo => {
        return <div className="userRepos"><span>{repo.name}</span></div>
        })
      }
    </div>  
  )
}
const styles = css`
width: 100%;
display: flex;
flex-direction: column;
max-height: 600px;
overflow-x: hidden;
.userRepos {
  width: 100%;
  margin: 0 0 10px 0;
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e1e4e8;
  span {
    color: #0366d6;
    font-weight: 600;
    font-size: 16px;
  }
}
`

export default AllRepos;
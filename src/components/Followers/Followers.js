/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Followers = ({followers}) => {
  return(
    <div className="followers" css={styles}>
      {
        followers.map(follower => {
        return <div className="userFollowers"><img src={follower.avatar_url} alt=""/><span>{follower.login}</span></div>
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
  .userFollowers {
    width: 100%;
    margin: 0 0 10px 0;
    display: flex;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #e1e4e8;
    img {
      width: 50px;
      height: 50px;
    }
    span {
      margin: 0 0 0 12px;
    }
  }
`

export default Followers;
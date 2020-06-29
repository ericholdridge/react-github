/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const User = ({user}) => {
  return(
      <div css={styles} className="user">
        <div className="userImage">
          <img src={user.avatar_url} alt="github user"/>
        </div>
        <div className="userInfo">
          <h2 className="name">{user.name}</h2>
          <span className="username">{user.login}</span>
        </div>
        <div className="userBio">
          <p>{user.bio}</p>
        </div>
        <div className="userFollowers">
          <span>{user.followers} followers</span>
          <span>{user.following} following</span>
        </div>
        <div className="contact">
          <span>{user.location}</span>
          <span><a href="www.eholdridge.com">{user.blog}</a></span>
        </div>
      </div>
  )
}

const styles = css`
  width: 100%;
  .userImage {
    img {
      width: 290px;
      height: 290px;
      border-radius: 50%;
      display: block;
    }
  }
  .userInfo {
    padding: 20px 0 0 0;
  }
  .userBio {
    padding: 14px 0;
  }
  .contact {
    padding: 20px 0;
    span {
      display: block;
      a {
        text-decoration: none;
        color: #000;
      }
    }
  }
  
`

export default User;
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const ProfilePicture = ({profileOverview}) => {
  return(
    <div css={styles}>
      {
          
          profileOverview.map(repo => {
            if(repo.id == 274293926) {
              return <img src={repo.owner.avatar_url} alt=""/>
            }
          })
        }
    </div>
  )
}

const styles = css`
  width: 100%;
  max-width: 300px;
  height: 300px;
  img {
    width: 100%;
    height: 300px;
    display: block;
  }
`

export default ProfilePicture;
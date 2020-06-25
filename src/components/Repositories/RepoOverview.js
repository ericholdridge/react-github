/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Repo from "./Repo"

const RepoOverview = ({profileOverview}) => {
  return(
    <div css={styles} className="repoOverview">
        {
          
          profileOverview.map(repo => {
            return <Repo repo={repo.name} link={repo.html_url} language={repo.language}/>
          })
          
        }
    </div>
  )
}

const styles = css`
  width: 100%;
  max-width: 800px;
  flex-wrap: wrap;
  justify-content: space-between;
`

export default RepoOverview;
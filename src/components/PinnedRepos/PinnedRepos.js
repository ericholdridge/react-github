/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Navigation from "../Navigation/Navigation";
import Container from "../GlobalComponents/Container/Container";

const PinnedRepos = ({overview}) => {
  return(
    <div className="pinnedRepos" css={styles}>
      <span>Pinned</span>
      <div className="wrapRepos">
        {
          overview.map(repo => {
          return <div className="repo"><a href={repo.html_url}>{repo.name}</a><span>{repo.language}</span></div>
          })
        }
      </div>
    </div>
  )
}

const styles = css`
  width: 100%;
  padding: 20px 0 0 0;
  max-width: 850px;
  span {
    display: block;
    padding: 0 0 6px 0;
  }
  .wrapRepos {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .repo {
      width: 100%;
      max-width: 410px;
      height: 100px;
      border: 1px solid #e1e4e8;
      border-radius: 6px;
      margin: 0 0 10px 0;
      a {
        margin: 16px 0 0 10px;
        color: #0366d6;
        font-weight: 600;
        text-decoration: none;
        display: block;
      }
      span {
        display: block;
        margin: 30px 0 0 10px;
        font-size: 12px;
      }
    }
  }
`

export default PinnedRepos;
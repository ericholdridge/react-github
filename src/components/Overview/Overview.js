/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from "../GlobalComponents/Container/Container";
import User from "../User/User";
import Navigation from "../Navigation/Navigation";
import PinnedRepos from "../PinnedRepos/PinnedRepos";
import AllRepos from "../AllRepos/AllRepos";
import Followers from "../Followers/Followers";

const Overview = ({user, overview, active, setActive, followers, repos}) => {
  return(
    <section className="overview" css={styles}>
      <Container>
        <User user={user}/>
        <div className="wrap">
          <Navigation active={active} setActive={setActive}/>
          {active === "Overview" && <PinnedRepos overview={overview} active={active}/>}
          {active === "Repositories" && <AllRepos overview={overview} active={active} repos={repos}/>}
          {active === "Followers" && <Followers overview={overview} active={active} followers={followers}/>}
        </div>
      </Container>
    </section>
  )
}

const styles = css`
  width: 100%;
  min-height: 80vh;
  display: flex;
  > .container {
    display: flex;
    justify-content: space-between;
    margin: auto;
    min-height: 560px;
    max-height: 560px;
    .navigation {
      width: 100%;
      min-width: 850px;
    }
    .user {
      width: 100%;
      max-width: 300px;
      margin: 20px 0 0 0;
    }
    .pinnedRepos {
      width: 100%;
      min-width: 850px;
    }
    .followers {
      width: 100%;
      min-width: 850px;
    }
  }
`

export default Overview;
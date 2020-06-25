/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from "../GlobalComponents/Container/Container"
import Navbar from "../Navbar/Navbar";
import RepoOverview from "../Repositories/RepoOverview"
import ProfilePicture from "../Repositories/ProfilePicture";

const Main = ({profileOverview}) => {
  return(
    <section className="main" css={styles}>
      <Navbar />
      <Container>
        <ProfilePicture profileOverview={profileOverview}/>
        <RepoOverview profileOverview={profileOverview}/>
      </Container>
    </section>
  )
}

const styles = css`
  width: 100%;
  min-height: 100vh;
  .container {
    display: flex;
    justify-content: space-between;
    .repoOverview {
      display: flex;
    }
  }
`

export default Main;
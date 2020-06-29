/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {useState, useEffect} from 'react'
import './App.css'
import Axios from 'axios'
import Form from "./components/Form/Form"
import Overview from "./components/Overview/Overview";

const App = () => {
  const [search, setSearch] = useState("ericholdridge")
  const [user, setUser] = useState([])
  const [overview, setOverview] = useState([])
  const [active, setActive] = useState("Overview");
  const [repos, setRepos] = useState([])
  const [followers, setFollowers] = useState([])

  const getData = () => {
    handleUser()
    handleOverview()
    handleRepos()
    handleFollowers()
  }

  useEffect(() => {
    getData()
  }, []);

  // Handle the user search
  const handleUser = () => {
    Axios(`https://api.github.com/users/${search}`).then(({data}) => {
      setUser(data)
    })
  }

  // Display the 8 repos
  const handleOverview = () => {
    Axios(`https://api.github.com/users/${search}/repos?per_page=8&sort=asc`).then(({data}) => {
      setOverview(data)
    })
  }

  // Display all of the users repos
  const handleRepos = () => {
    Axios(`https://api.github.com/users/${search}/repos`).then(({data}) => {
      setRepos(data)
    })
  }

  // Get followers
  const handleFollowers = () => {
    Axios(`https://api.github.com/users/${search}/followers`).then(({data}) => {
      setFollowers(data)
    })
  }

  return (
    <div className="App">
      <Form search={search} setSearch={setSearch} getData={getData}/>
      <Overview user={user} overview={overview} active={active} setActive={setActive} followers={followers} repos={repos}/>
    </div>
  );
}

export default App;

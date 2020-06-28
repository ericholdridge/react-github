import React, {useState, useEffect} from 'react'
import './App.css'
import Axios from 'axios'
import Form from "./components/Form/Form"
import Container from "./components/GlobalComponents/Container/Container"

const App = () => {
  const [search, setSearch] = useState("ericholdridge")
  const [user, setUser] = useState()
  const [overview, setOverview] = useState()
  const [repos, setRepos] = useState()
  const [followers, setFollowers] = useState()

  // Github followers
  // https://api.github.com/users/${search}/followers

  const getData = (e) => {
    e.preventDefault()
    handleUser()
    handleOverview()
    handleRepos()
    handleFollowers()
  }

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

  // Display all of the user repos
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
      <Container>

      </Container>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react'
import './App.css'
import Axios from 'axios'
import Main from "./components/Main/Main"

const App = () => {
  const [search, setSearch] = useState("ericholdridge")
  const [profileOverview, setProfileOverview] = useState([])
  // Get the github users
  // https://api.github.com/users/${search}

  // Get the github repos
  // https://api.github.com/users/${search}/repos

  // Github overview page
  // https://api.github.com/users/${search}/repos?per_page=8&sort=asc

  // Github followers
  // https://api.github.com/users/${search}/followers

  useEffect(() => {
    handleOverview()
  }, [])

  // Get the github overview data when page loads
  const handleOverview = () => {
    Axios(`https://api.github.com/users/${search}/repos?per_page=8&sort=asc`).then(({data}) => {
        const repoOverview = data
        console.log(repoOverview)
        setProfileOverview(repoOverview)
      })
  }

  return (
    <div className="App">
      <Main profileOverview={profileOverview}/>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  // ----------------------
  // BUILD TIME DATA FETCHING USING GRAPHQL
  // ----------------------

  // ----------------------
  // RUNTIME DATA FETCHING
  // ----------------------
  const [starsCount, setStarsCount] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    
   const getData=async (url = '', data = {})=> {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      //'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
    
    const resultData=await getData(url="https://api.github.com/repos/gatsbyjs/gatsby")
    setStarsCount(resultData.stargazers_count)
    
  }, [])

  return (
    <Layout>
      <h1>Examples Gatsby</h1>
      <h2>Build Time</h2>
      <p>
        This data from GitHub is fetched using gatsby-source-graphql at build
        time. This data will only update when the site is rebuilt by Gatsby, but
        removes the need and latency to hit the GitHub API when the site loads.
        Without needing to hit an API, the site will load faster for visitors
        because the data was already loaded when the site built. This is
        especially beneficial for users with slower internet connections or if
        you want to allow your site to be visited offline using a plugin like
        {` `}
        <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-offline/">
          gatsby-plugin-offline
        </a>
        .
      </p>

      <h2>Runtime</h2>
      <p>
        This data from GitHub is fetched using the Fetch API at runtime. This
        data will update every time you refresh this page.{` `}
      </p>
      <p>Star count for the Gatsby repo: {starsCount}</p>
    </Layout>
  )
}

export default IndexPage

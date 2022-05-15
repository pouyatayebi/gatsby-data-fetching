import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
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
    fetch(`https://api.github.com/repos/gatsbyjs/gatsby`,{method:'GET',headers:{})
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setStarsCount(resultData.stargazers_count)
        console.log('resultData',resultData)
      }) // set data for the number of stars
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

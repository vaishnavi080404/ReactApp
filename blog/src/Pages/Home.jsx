import React from 'react'
import Blog from '../components/Blog'
import Pagination from '../components/Pagination'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
        <Header />
        <div>
            <Blog />
            <Pagination />
        </div>
    </div>
  )
}

export default Home
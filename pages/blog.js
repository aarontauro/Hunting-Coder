import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.newBlogs)

  return (
    <div className='container mt-10 mx-auto'>
      {/* Wrap the cards in a flex container */}
      <div className="flex flex-wrap">
        {blogs.map((blogItem) => {
          return (
            <div className="p-4 lg:w-1/3" key={blogItem.slug}>
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{blogItem.name}</h1>
                <p className="leading-relaxed mb-3">{blogItem.content.substr(0, 140)}</p>
                <Link className="text-indigo-500 inline-flex items-center" href={`/blogpost/${blogItem.slug}`}>Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/blogs')
  const newBlogs = await res.json()

  // Pass data to the page via props
  return { props: { newBlogs } }
}

export default Blog

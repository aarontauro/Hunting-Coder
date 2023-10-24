import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const slug = (props) => {
    const [blog, setBlog] = useState(props.newBlog);

    return (
        <div className='container w-1/2 mt-10 mx-auto'>
            <div className="p-4 rounded-lg shadow-md bg-white">
                <h2 className="text-2xl font-semibold">{blog && blog.name}</h2>
                <div className="prose mt-5">
                    {blog && blog.content}
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.query;
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    const newBlog = await res.json()

    // Pass data to the page via props
    return { props: { newBlog } }
}

export default slug

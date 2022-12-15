import Link from 'next/link'
import React from 'react'

const fetchSinglePost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
}

export default async function Post({ children, params }) {

    const { id } = params
    const post = await fetchSinglePost(id)

    return (
        <>
            <div className="show_slowly">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <Link style={{ color: "#0073f7" }} href={`/posts/${id}/comments`}>Show comments</Link>
                {children}
            </div>
        </>
    )
}

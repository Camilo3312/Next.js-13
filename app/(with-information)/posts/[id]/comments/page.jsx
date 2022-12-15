import React from 'react'

const fetchSinglePost = async (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(res => res.json())
}

export default async function CommentPage({ params }) {

    const { id } = params
    const comments = await fetchSinglePost(id)

    return (
        <>
            <div className='show_slowly' style={{ padding: '5px 20px', margin: '20px 0', background: '#1d1d1d', borderRadius: '20px'}} >
                {
                    comments.map(item => (
                        <div className="comment">
                            <h4>{item.name}</h4>
                            <p>{item.body}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

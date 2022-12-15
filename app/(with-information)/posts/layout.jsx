import React from 'react'

export default function PostLayout({ children }) {
    return (
        <>
            <div style={{fontSize:'13px', margin: '10px 0', color: '#8a8a8a'}}>Home &bull; Posts</div>

            { children }
        </>
    )
}

import Link from 'next/link'
import React from 'react'
import { ButtonLike } from '../ButtonLike/ButtonLike'
import styles from './ListOfPosts.module.scss'

const serverFetch = () => {

    // Static props
    // return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
    // .then(res => res.json())

    // Server side props 
    return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
        .then(res => res.json())

    // Incremental static regeneration
    // return fetch('https://jsonplaceholder.typicode.com/posts', {
    //     next: {
    //         revalidate: 60
    //     }
    // })
    // .then(res => res.json())
}

export async function ListOfPosts() {
    const data = await serverFetch()

    return (

        <div className={`${styles.posts_list} show_slowly`}>
            {
                data.map(item => (
                    <div key={item.id} className={styles.post}>
                        <Link className={styles.link} href={`/posts/${item.id}`}>
                            <h3>{item.title}</h3>
                        </Link>
                        <p className={styles.body}>{item.body}</p>
                        <ButtonLike />
                    </div>
                ))
            }
        </div>
    )
}
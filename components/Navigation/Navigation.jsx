import React from 'react'
import Link from "next/link"
import styles from './Navigation.module.scss'

const navigation = [
    {
        label: 'Home',
        route: '/'
    },
    {
        label: 'About',
        route: '/about'
    },
    {
        label: 'Posts',
        route: '/posts'
    }
]

export default function Navigation() {
    return (
        <header className={styles.header}>
            
            <nav className={styles.navigation}>
                <ul>
                    {navigation.map(item => <li key={item.route}>
                        <Link href={item.route} >
                            {item.label}
                        </Link>
                    </li>)}
                </ul>
            </nav>
        </header>
    )
}

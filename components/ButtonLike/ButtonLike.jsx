'use client'

import React, { useState } from 'react'
import styles from './ButtonLike.module.scss'
import Image from 'next/image'
import { IconLike, IconLiked } from '../icons'

export const ButtonLike = () => {
    const [like, setLike] = useState(false)

    return (

        <button className={like ? styles.button_liked : styles.button_like} onClick={() => setLike(!like)}>
            {!like ? <IconLike className={styles.icon_like} /> : <IconLiked className={styles.icon_liked} />}
        </button>

    )
}


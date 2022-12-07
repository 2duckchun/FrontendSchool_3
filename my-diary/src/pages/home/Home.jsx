import styles from './Home.module.css'
import React from 'react'
import DiaryForm from './DiaryForm'

export default function Home() {
    return (
        <main className={styles.cont}>
            <aside className={styles.side_menu}>
                <DiaryForm></DiaryForm>
            </aside>
            <ul className={styles.content_list}>
                다이어리 리스트
            </ul>
        </main>
    )
}

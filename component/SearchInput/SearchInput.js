import React from 'react'
import { SearchRounded } from '@mui/icons-material'
import styles from "./SearchInput.module.css"
function SearchInput({...rest}) {
  return (
    <div className={styles.wrapper}>
        <SearchRounded/>
        <input className={styles.input} {...rest} />
    </div>
  )
}

export default SearchInput
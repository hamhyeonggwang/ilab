import * as React from 'react'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import cs from 'classnames'

import { useDarkMode } from '@/lib/use-dark-mode'
import styles from './styles.module.css'

function ToggleThemeButton() {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const onToggleTheme = React.useCallback(() => {
    toggleDarkMode()
  }, [toggleDarkMode])

  return (
    <button
      className={cs(styles.themeToggle, !hasMounted && styles.hidden)}
      onClick={onToggleTheme}
      aria-label="Toggle dark mode"
    >
      {hasMounted && isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
    </button>
  )
}

export function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        Copyright {new Date().getFullYear()} I.Lab
      </div>
      <div className={styles.settings}>
        <ToggleThemeButton />
      </div>
    </footer>
  )
}

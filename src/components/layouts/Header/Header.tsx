import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';



export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`${styles.header}${scrolled ? ` ${styles.scrolled}` : ''}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link to="/" className={styles.logo} aria-label="Из нуля в сотку">
            Из нуля в сотку
          </Link>

          {/* Desktop nav */}
          <nav className={styles.nav}>
            <Link to="/pricing" className={styles.navLink}>Тарифы</Link>
          </nav>

          {/* Desktop actions */}
          <div className={styles.auth}>
            <Link to="/login" className={styles.loginBtn}>Войти</Link>
            <Link to="/register" className={styles.registerBtn}>Регистрация</Link>
          </div>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className={styles.mobileMenu}>
            <Link to="/pricing" className={styles.mobileLink}>Тарифы</Link>
            <div className={styles.mobileAuth}>
              <Link to="/login" className={styles.loginBtn}>Войти</Link>
              <Link to="/register" className={styles.registerBtn}>Регистрация</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

import PsychoSupport from '../../../assets/images/psychologist_session_support.png';
import styles from './MentalSupport.module.css';


export const MentalSupport = () => {
  return (
    <section id="ментальная-поддержка" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.layout}>
          {/* Image column */}
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <div style={{ overflow: 'hidden' }}>
                <img
                  src={PsychoSupport}
                  alt="Анонимная психологическая поддержка для учеников"
                  loading="lazy"
                  className={styles.image}
                />
              </div>
            </div>
            <p className={styles.imageCaption}>Безопасное пространство для каждого.</p>
          </div>

          {/* Text column */}
          <div className={styles.textCol}>
            <p className={styles.sectionLabel}>Психологическая помощь — 01_SUPPORT</p>

            <h2 className={styles.heading}>
              Твоё спокойствие —<br />
              залог <em className={styles.headingItalic}>высоких</em><br />
              результатов.
            </h2>

            <div className={styles.textGrid}>
              <p className={styles.paragraph}>
                Подготовка к ЕГЭ — это марафон, требующий не только знаний, но и
                эмоциональной устойчивости. Мы создали систему, где ты можешь получить
                профессиональную помощь в любой момент.
              </p>
              <p className={styles.paragraph}>
                Наши психологи работают анонимно. Ты можешь обсудить страхи перед экзаменами,
                выгорание или личные переживания, не опасаясь осуждения или огласки.
              </p>
              <p className={styles.paragraphWide}>
                Мы верим, что ментальное здоровье — это фундамент успеха. Ты не один на пути
                к сотке, и мы здесь, чтобы поддержать тебя на каждом этапе.
              </p>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div>
                  <span className={styles.statValue}>24/7</span>
                </div>
                <p className={styles.statLabel}>Поддержка</p>
              </div>
              <div className={styles.statItem}>
                <div>
                  <span className={styles.statValue}>100%</span>
                </div>
                <p className={styles.statLabel}>Анонимно</p>
              </div>
              <div className={styles.statItem}>
                <div>
                  <span className={styles.statValue}>TOP</span>
                </div>
                <p className={styles.statLabel}>Психологи</p>
              </div>
            </div>

            <a href="#" className={styles.cta}>
              Узнать подробнее
              <svg className={styles.ctaArrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

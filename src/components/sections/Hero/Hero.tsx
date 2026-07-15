import { Link } from 'react-router-dom';
import heroImage from '../../../assets/images/student_learning_online.webp';
import styles from './Hero.module.css';


const tickerItems = [
  'МАТЕМАТИКА → 100 БАЛЛОВ',
  'ФИЗИКА → 100 БАЛЛОВ',
  'ИНФОРМАТИКА → 100 БАЛЛОВ',
  'РУССКИЙ → 100 БАЛЛОВ',
];

const stats = [
  'Наставники из МГУ/ВШЭ',
  'Геймификация обучения',
  'Анонимный психолог',
  'Родительский контроль',
];

export const Hero = () => {
  return (
    <section id="путь-к-сотке" className={styles.hero}>
      <div className={styles.grid}>

        {/* Left */}
        <div className={styles.left}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              <span className={styles.eyebrowText}>ИЗ НУЛЯ В СОТКУ / ЕГЭ 2025</span>
            </div>
            <div className={styles.dividerLine} />
          </div>

          <div>
            <h1 className={styles.heading}>
              <span className={styles.headingLine}>Твой путь</span>
              <span className={styles.headingLine}>к заветной</span>
              <span className={styles.headingLine}>
                <span className={styles.headingUnderline}>
                  сотне.
                  <svg
                    className={styles.underlineSvg}
                    viewBox="0 0 300 24"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 16 C 60 4, 140 22, 220 10 S 290 14, 298 8"
                      stroke="hsl(237,90%,51%)"
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                      style={{
                        strokeDasharray: 600,
                        strokeDashoffset: 0,
                      }}
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <p className={styles.desc}>
              Подготовка к ЕГЭ как увлекательная игра: кланы, квесты, наставники из топ-вузов
              и поддержка психолога. Начни бесплатно прямо сейчас.
            </p>

            <div className={styles.actions}>
              <Link to="/" className={styles.btnPrimary}>
                Бесплатная неделя
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link to="/pricing" className={styles.btnOutline}>
                Выбрать тариф
              </Link>
            </div>
          </div>

          <div className={styles.statsBar}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statItem}>
                {i > 0 && <span className={styles.statDot} />}
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className={styles.right}>
          <img
            src={heroImage}
            alt="Студент увлеченно готовится к ЕГЭ онлайн"
            loading="lazy"
            className={styles.heroImage}
          />

          {/* Status card */}
          <div className={styles.statusCard}>
            <div className={styles.statusHeader}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(237,90%,51%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
              </svg>
              <span className={styles.statusHeaderText}>Статус обучения</span>
            </div>
            <div className={styles.progressRow}>
              <span className={styles.progressDot} />
              <div className={styles.progressBar}>
                <div className={styles.progressFill} />
              </div>
              <span className={styles.progressDotEnd} />
            </div>
            <p className={styles.progressLabel}>ПРОГРЕСС: 85% К ЦЕЛИ</p>
            <div className={styles.statusBadge}>
              <span className={styles.pingDot}>
                <span className={styles.pingRipple} />
                <span className={styles.pingCore} />
              </span>
              <span className={styles.statusBadgeText}>В процессе</span>
            </div>
          </div>

          {/* Vertical ticker */}
          <div className={styles.verticalTicker} aria-hidden="true">
            <div className={styles.tickerInner}>
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span key={i} className={styles.tickerItem}>{item}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

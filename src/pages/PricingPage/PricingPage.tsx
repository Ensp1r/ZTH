import { Link } from 'react-router-dom';
import styles from './PricingPage.module.css';

const tiers = [
  {
    tierLabel: 'TIER 01 · START',
    title: 'Базовый',
    price: '2 990',
    duration: '3 МЕСЯЦА · ОНЛАЙН',
    badge: 'Доступно',
    badgeStyle: 'badgeDefault' as const,
    cardStyle: '' as const,
    btnStyle: 'cardBtnDefault' as const,
    features: [
      'Доступ к видеолекциям',
      'Базовые домашние задания',
      'Чат с наставником',
      'Еженедельные тесты',
      'Проверка ошибок',
    ],
  },
  {
    tierLabel: 'TIER 02 · PRO',
    title: 'Продвинутый',
    price: '4 990',
    duration: '6 МЕСЯЦЕВ · ОНЛАЙН',
    badge: 'Популярно',
    badgeStyle: 'badgeFeatured' as const,
    cardStyle: 'cardFeatured' as const,
    btnStyle: 'cardBtnFeatured' as const,
    features: [
      'Все материалы базового',
      'Личный куратор из МГУ',
      'Разбор сложных задач',
      'Индивидуальный план',
      'Психологическая поддержка',
      'Пробные ЕГЭ ежемесячно',
      'Приоритетная поддержка',
    ],
  },
  {
    tierLabel: 'TIER 03 · ELITE',
    title: 'Премиум',
    price: '7 990',
    duration: '9 МЕСЯЦЕВ · ОНЛАЙН',
    badge: 'Премиум',
    badgeStyle: 'badgePremium' as const,
    cardStyle: '' as const,
    btnStyle: 'cardBtnPremium' as const,
    features: [
      'Полное сопровождение',
      'Личный ментор 24/7',
      'Помощь с поступлением',
      'Профиль для родителей',
      'Закрытые вебинары',
      'Три пробных ЕГЭ в месяц',
    ],
  },
];

const tickerWords = ['ЛИЦЕНЗИЯ РФ', 'АВТОРСКИЕ МЕТОДИКИ', 'НАУЧНЫЙ ПОДХОД', 'ТОП-ВУЗЫ', 'НАСТАВНИКИ'];

export const PricingPage = () => {
  return (
    <div className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className={styles.heroLabel}>НАШИ ТАРИФЫ</p>
          <h1 className={styles.heroHeading}>
            Три пути<br />к сотне<span className={styles.heroHeadingDot}>.</span>
          </h1>
          <p className={styles.heroDesc}>
            Независимо от вашего текущего уровня, наши программы разработаны как точная
            система подготовки — эффективная, технологичная и ориентированная на ваш успех.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <main className={styles.pricingSection}>
        <div className={styles.cards}>
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`${styles.card}${tier.cardStyle ? ` ${styles[tier.cardStyle]}` : ''}`}
            >
              <div>
                <span className={`${styles.badge} ${styles[tier.badgeStyle]}`}>
                  {tier.badge}
                </span>
              </div>
              <p className={styles.tierLabel}>{tier.tierLabel}</p>
              <h2 className={styles.cardTitle}>{tier.title}</h2>
              <div className={styles.priceRow}>
                <span className={styles.priceFrom}>от</span>
                <span className={styles.price}>{tier.price} ₽</span>
                <span className={styles.pricePeriod}>/мес</span>
              </div>
              <p className={styles.cardDuration}>{tier.duration}</p>
              <div className={styles.divider} />
              <ul className={styles.featureList}>
                {tier.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <svg className={styles.featureCheck} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/register" className={`${styles.cardBtn} ${styles[tier.btnStyle]}`}>
                Выбрать
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom ticker */}
        <div className={styles.bottomTicker}>
          <div className={styles.tickerTrack}>
            {[0, 1, 2].map((g) => (
              <div key={g} className={styles.tickerGroup}>
                {tickerWords.map((w, i) => (
                  <span key={i}>
                    <span className={styles.tickerWord}>{w}</span>
                    <span className={styles.tickerSep}>·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>

    </div>
  );
}

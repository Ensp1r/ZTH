import { AlertCircle } from 'lucide-react';
import { Card, CardContent } from '../../components/ui';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <Card className={styles.cardWrapper}>
        <CardContent className={styles.cardContent}>
          <div className={styles.header}>
            <AlertCircle className={styles.icon} />
            <h1 className={styles.title}>
              404 Page Not Found
            </h1>
          </div>

          <p className={styles.description}>
            Мы не смогли найти такую страницу. Попробуйте позже
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
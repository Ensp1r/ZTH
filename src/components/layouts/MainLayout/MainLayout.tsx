import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <>
      <main style={{ minHeight: '100vh' }}>
        <Outlet /> 
      </main>
    </>
  );
};
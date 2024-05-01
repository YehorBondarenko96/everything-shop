import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { AppWrapper } from './App.styled';
import { HomePage } from './pages/HomePage/HomePage';
import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

const ChairCard = lazy(() => import('./pages/ChairCard/ChairCard'));
const ShoesCard = lazy(() => import('./pages/ShoesCard/ShoesCard'));

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage/>}/>
          <Route path="/chair-card/:id" element={<ChairCard />} />
          <Route path="/shoes-card/:id" element={<ShoesCard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;

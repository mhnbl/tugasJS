import { LearningTopicsProvider } from './context/LearningTopicsContext';
import LearningTopics from './component/LTopics/LearningTopics';

function App() {
  const brandName = `MHNBL`;

  return (
    <LearningTopicsProvider>
      <h1>Welcome to {brandName} Learning Hub</h1>
      <h3>Organize your learning journey with ease</h3>
      <LearningTopics />
    </LearningTopicsProvider>
  );
}

export default App;
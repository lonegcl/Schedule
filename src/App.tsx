import { useState } from 'react';
import { Layout } from './components/layout';
import { YearlyScheduling } from './components/yearly-scheduling';
import { CreateScheduleWizard } from './components/create-schedule/wizard';

export default function App() {
  const [currentView, setCurrentView] = useState<'calendar' | 'create'>('create');

  if (currentView === 'create') {
    return <CreateScheduleWizard onBack={() => setCurrentView('calendar')} />;
  }

  return (
    <Layout>
      <YearlyScheduling onCreateClick={() => setCurrentView('create')} />
    </Layout>
  );
}

import { useRoutes } from 'react-router-dom';

import Router from './Router';

function App() {

  const element = useRoutes(Router)


  return (
    <div className="App">
      {
        element
      }
    </div>
  );
}

export default App;

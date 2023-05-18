import { useRoutes } from 'react-router-dom';
import Router from './Router';
import { useStateValue } from './context/StateProvider';

function App() {
  const { product, openControl } = useStateValue()
  const element = useRoutes(Router)
  const openArr = product[0].map((arr) => {
    return { id: arr.code }
  })
  openControl(openArr)

  return (
    <div className="App">
      {
        element
      }
    </div>
  );
}

export default App;

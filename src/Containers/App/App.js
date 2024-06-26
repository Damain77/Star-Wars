import routesConfig from '@routes/routesConfig';
import styles from './App.module.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../../Components/Header/Header';


const App = () =>{

  return(
    <>
      <Router>
        <div className={styles.wrapper}>
          <Header />
          <Routes>
            {routesConfig.map(({path,element}, index) => (
              <Route
                key={index}
                path={path}
                element={element}
              />
            ))} 
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;

import { useEffect, useState } from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage'


import HomePage from './Page/HomePage/HomePage';
import AdminsPage from './Page/AdminsPage';
import FinancePage from './Page/FinancePage';
import SettingsPage from './Page/SettingsPage';
import TeachersPage from './Page/TeachersPage';
import StatisticPage from './Page/StatisticPage';
import GroupsPage from './Page/GroupsPage';
import './assets/style/index.scss';
import './assets/style/theme/light.scss';
import SideBar from './container/SideBar/SideBar';
import Header from './container/Header';
import LoginPage from './Page/LoginPage';


const token = 'asdasdasdasdadasdad';
// const token = window.localStorage.getItem('sessionToken')



function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme : light)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');


  const switchTheme = ()=>{
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const appLoad =()=>{
    console.log('ok');
  }

  return (
    <div className={`app ${theme}`} onLoad={appLoad}>
      <Router>
            {
              token ? (
                <div className="app-inner">
                  <div className="app-inner-left">
                    <SideBar/>
                  </div>
                  <div className="app-inner-right">
                      <div className="app-inner-right-top">
                        <Header/>
                      </div>
                      <div className="app-inner-right-page">
                        <Routes>
                          <Route index path='/' element={<HomePage/>}/>
                          <Route path='/admins' element={<AdminsPage/>}/>
                          <Route path='/finance' element={<FinancePage/>}/>
                          <Route path='/groups' element={<GroupsPage/>}/>
                          <Route path='/teachers' element={<TeachersPage/>}/>
                          <Route path='/statistic' element={<StatisticPage/>}/>
                          <Route path='/settings' element={<SettingsPage/>}/>
                        </Routes>
                      </div>
                  </div>
                </div>
              ) : (
                <LoginPage/>
              )
            }      
      </Router>
    </div>
  );
}

export default App;

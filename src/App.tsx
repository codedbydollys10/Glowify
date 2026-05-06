import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from './lib/supabaseClient'
import {
  dashboardPagePath,
  defaultAuthenticatedPage,
  defaultDashboardPage,
  type DashboardPage,
} from './lib/dashboardPages'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import './styles/App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [initialPage, setInitialPage] = useState<DashboardPage>(defaultAuthenticatedPage)
  const [signupInProgress, setSignupInProgress] = useState(false)

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setIsAuthenticated(true)
      }
    }

    checkSession()

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      // Ignore auth state changes during signup process
      if (signupInProgress && event === 'SIGNED_IN') {
        return;
      }
      setIsAuthenticated(!!session)
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [signupInProgress])

  const handleLogin = (page: DashboardPage = defaultAuthenticatedPage) => {
    setInitialPage(page)
    setIsAuthenticated(true)
  }

  const handleSignupStart = () => {
    setSignupInProgress(true)
  }

  const handleSignupComplete = () => {
    setSignupInProgress(false)
    setInitialPage(defaultDashboardPage)
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ?
            <Navigate to={dashboardPagePath(initialPage)} replace /> :
            <Login
              onLogin={(page) => handleLogin(page || defaultAuthenticatedPage)}
              onSignupStart={handleSignupStart}
              onSignupComplete={handleSignupComplete}
            />
        }
      />
      <Route
        path="/dashboard"
        element={
          isAuthenticated ?
            <Navigate to={dashboardPagePath(initialPage)} replace /> :
            <Navigate to="/" replace />
        }
      />
      <Route
        path="/dashboard/:page"
        element={
          isAuthenticated ?
            <Dashboard /> :
            <Navigate to="/" replace />
        }
      />
      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? dashboardPagePath(initialPage) : '/'} replace />}
      />
    </Routes>
  )
}

export default App

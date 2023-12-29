import { Outlet } from 'react-router-dom'
import './App.css'
import ProfileCard from './components/ProfileCard'
import Progress from './components/Progress'
import RegFormProvider from './providers/RegFormProvider'

function App() {

  return (
    <RegFormProvider>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-7">
            <Progress />
            <Outlet />
          </div>
          <div className="col-12 col-md-5">
            <ProfileCard />
          </div>
        </div>
      </div>
    </RegFormProvider>
  )
}

export default App

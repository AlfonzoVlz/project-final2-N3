import { Card } from './components/Card'
import { DetailsPerfil } from './components/DetailsPerfil'
import { Seach } from './components/Seach'

function App() {


  return (
    <div className='min-h-screen bg-[#20293A]'>
      <Seach />
      <DetailsPerfil />
      <Card/>
    </div>
  )
}

export default App

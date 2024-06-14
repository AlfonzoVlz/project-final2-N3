import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import { DetailsPerfil } from './components/DetailsPerfil'
import heroImagen from './assets/hero-image-github-profile.png'


function App() {
  const[data, setData] = useState(null)
  const[user, setUser] = useState('')

  const fetchUser = async() =>{
    try {
      const rs = await fetch(`https://api.github.com/users/${user}`)
    const rsJson = await rs.json()
    setData(rsJson)

    } catch (error) {
      console.log('Error fetching Data', error.message)
      
    }
    
  }

  return (

    <div className='min-h-screen bg-[#20293A]'>
      <div className='relative  '>
        <figure>
          <img src={heroImagen} alt="heroImagen" className='h-[40vh] w-full' />
        </figure>
        <div className='flex justify-center absolute top-[5%] w-full h-max'>

          <button onClick={fetchUser} className='h-16 w-16 p-5 rounded-lg-md bg-[#20293a]'>
            <svg className='bg-[#20293a]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="#97A3B6"  />
              <path d="M20 20L17 17" stroke="#97A3B6" />
            </svg>
          </button>

          
          <input onChange={(e) => setUser(e.target.value)} type="text" className=' p-3 h-16 w-1/3  bg-[#20293a] rounded-r-lg outline-none text-white' placeholder='Username' />
        </div>
      </div>
      <DetailsPerfil data={data}/>
      <Card />
    </div>



  )
}

export default App

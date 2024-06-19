import React, { useState, useEffect } from 'react';
import { Card } from './components/Card';
import { DetailsPerfil } from './components/DetailsPerfil';
import heroImagen from './assets/hero-image-github-profile.png';

function App() {
  const [data, setData] = useState(null);
  const [user, setUser] = useState('');
  const [repos, setRepos] = useState([]);

  const fetchUser = async () => {
    try {
      const rs = await fetch(`https://api.github.com/users/${user}`);
      const rsJson = await rs.json();
      setData(rsJson);
      fetchRepos();
    } catch (error) {
      console.log('Error fetching Data', error.message);
    }
  };

  const fetchRepos = async () => {
    try {
      const rs = await fetch(`https://api.github.com/users/${user}/repos`);
      if (rs.ok) {
        const reposData = await rs.json();
        setRepos(reposData);
      } else {
        console.error('Failed to fetch user repositories:', rs.statusText);
      }
    } catch (error) {
      console.error('Error fetching user repositories:', error.message);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchUser();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <div className='min-h-screen bg-[#20293A]'>
      <div className='relative'>
        <figure>
          <img src={heroImagen} alt='heroImagen' className='h-[40vh] w-full object-cover' />
        </figure>
        <div className='flex justify-center absolute top-[5%] w-full'>
          <button onClick={fetchUser} className='h-16 w-16 p-5 rounded-l-lg bg-[#20293a]'>
            <svg
              className='bg-[#20293a]'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='11' cy='11' r='7' stroke='#97A3B6' />
              <path d='M20 20L17 17' stroke='#97A3B6' />
            </svg>
          </button>
          <input
            onChange={(e) => setUser(e.target.value)}
            type='text'
            className='p-3 h-16 sm:w-1/3 bg-[#20293a] rounded-r-lg outline-none text-white'
            placeholder='Username'
          />
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <DetailsPerfil data={data} />
        <Card repos={repos} fetchRepos={fetchRepos} />
      </div>
    </div>
  );
}

export default App;


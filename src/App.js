import { useEffect, useState, lazy, Suspense } from 'react';

import './App.css';
const Profile = lazy(() => import('./components/Profile/Profile'));

function App() {
  const [imageId, setImageId] = useState([]);
  useEffect(() => {
    const getProfile = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setImageId(data);
    };
    getProfile();
  }, []);
  console.log(imageId);

  return (
    <div className='App'>
      <div className='profile-list'>
        <Suspense fallback={<h1>Loading...</h1>}>
          {imageId.map((img) => (
            <Profile
              key={img.id}
              src={`https://avatars.dicebear.com/api/avataaars/${img.id}.svg`}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
}

export default App;

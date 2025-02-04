import React, { useEffect, useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [usersList, setUsersList] = useState([]);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Ошибка сети");
        return response.json();
      })
      .then((data) => {
        setUsersList(data);
        
        const randomUser = data[Math.floor(Math.random() * data.length)];
        setUser(randomUser);
      })
      .catch((error) => setError(error.message));
  }, []);

  
  const handleRandomize = () => {
    if (usersList.length > 0) {
      const randomUser = usersList[Math.floor(Math.random() * usersList.length)];
      setUser(randomUser);
    }
  };

  if (error) return <p>Ошибка: {error}</p>;
  if (!user) return <p>Загрузка...</p>;

  return (
    <div>
      <button onClick={handleRandomize}>Случайный пользователь</button>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Телефон: {user.phone}</p>
    </div>
  );
}

export default UserProfile;
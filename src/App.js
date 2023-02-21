import React from 'react';
import AvatarGroup from './AvatarGroup';

const avatar = [
  { id: 1, name: 'John Doe', image: './image/foto-1.png' },
  { id: 2, name: 'Jane Smith', image: './image/foto-2.jpg' },
  { id: 3, name: 'Bob Johnson', image: './image/foto-3.png' },
  { id: 4, name: 'Nara Sasimytha', image: './image/foto-4.png' },
  { id: 5, name: 'Fahira Ayu', image: './image/foto-5.png' },
];

const App = () => {
  return (
    <div>
      <AvatarGroup avatars={avatar} size={50} />
    </div>
  );
};

export default App;

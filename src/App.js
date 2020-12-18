import logo from './logo.svg';
import './App.css';
import Avatar from './Avatar/Avatar';

function App() {
  return (
    <div className="App">
      <Avatar url="https://www.w3schools.com/howto/img_avatar.png" width={150} shape="square" />
      <Avatar url="https://www.w3schools.com/howto/img_avatar.png" width={150} shape="circle" />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import TotalLike from './components/TotalLike';

function App() {
  return <>
  <TotalLike />
  <Card 
    image="https://images.unsplash.com/photo-1544546491-1ecfecfcc75a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
    subject="Merry Christmas!"
    days={4}
  />
  <Card 
    image="https://images.unsplash.com/photo-1501213045308-cfe6e352d850?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80"
    subject="Happy New Year!"
    days={15}
  />
  </>;
}

export default App;

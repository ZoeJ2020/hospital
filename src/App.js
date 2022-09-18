import './App.css';

function App() {

  const bg = document.querySelector('.background-image');
  const windowWidth = window.innerWidth / 5;
  const windowHeight = window.innerHeight / 5 ;

  bg.addEventListener('mousemove', () => {
    const mouseX = clientX / windowWidth;
    const mouseY = clientY / windowHeight;
  
    bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hover me</h1>
        <div className="background-image"></div>
      </header>
    </div>
  );
}

export default App;

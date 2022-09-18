import './App.css';

function App() {

  const bg = document.querySelector('.background-image');
  // const windowWidth = window.innerWidth / 5;
  // const windowHeight = window.innerHeight / 5 ;

  bg.addEventListener('mousemove', (e) => {
    e.preventDefault();

    // // const mouseX = e.clientX / windowWidth;
    // const mouseY = e.clientY / windowHeight;
  
    // bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;

    console.log('bg eventlistener is working');
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

import './App.css';

function App() {

  console.log('JS has loaded');

  // const bg = document.querySelector('.background-image');
  // const windowWidth = window.innerWidth / 5;
  // const windowHeight = window.innerHeight / 5 ;

  // bg.addEventListener('mousemove', (e) => {
  //   e.preventDefault();

    // const mouseX = e.clientX / windowWidth;
    // const mouseY = e.clientY / windowHeight;
  
    // bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;

  //   console.log('bg eventlistener is working');
  // });

  const logLoad = (e) => {
    console.log('body has loaded');

    console.log(e);

      // const bg = document.querySelector('.background-image');
      // const windowWidth = window.innerWidth / 5;
      // const windowHeight = window.innerHeight / 5 ;

      // bg.addEventListener('mousemove', (e) => {
      //   e.preventDefault();

      //   const mouseX = e.clientX / windowWidth;
      //   const mouseY = e.clientY / windowHeight;
      
      //   bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;

      //   console.log('bg eventlistener is working');
      // });
  }

  return (
    <div className="App" onLoad={logLoad()}>
      <header className="App-header">
        <h1>Hover me</h1>
        <div className="background-image"></div>
      </header>
    </div>
  );
}

export default App;

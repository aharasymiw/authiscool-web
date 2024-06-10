function Home({ user }) {

  const boom = () => {
    confetti({
      spread: 360,
      ticks: 200,
      gravity: 1,
      decay: 0.94,
      startVelocity: 30,
      particleCount: 100,
      scalar: 3,
      shapes: ["image"],
      shapeOptions: {
        image: [{
          src: "https://launch.primeacademy.io/hubfs/Photos/Staff%20Headshots/image%20(3)-1.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://launch.primeacademy.io/hubfs/Photos/Staff%20Headshots/image%20(3)-1.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://launch.primeacademy.io/hubfs/Photos/Staff%20Headshots/image%20(3)-1.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://launch.primeacademy.io/hubfs/Photos/Staff%20Headshots/image%20(3)-1.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://launch.primeacademy.io/hubfs/Photos/Staff%20Headshots/image%20(3)-1.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://launch.primeacademy.io/hubfs/Photos/Staff%20Headshots/image%20(3)-1.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://launch.primeacademy.io/hubfs/Photos/Staff%20Headshots/image%20(3)-1.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://launch.primeacademy.io/hubfs/Photos/Staff%20Headshots/image%20(3)-1.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://launch.primeacademy.io/hubfs/Photos/Staff%20Headshots/image%20(3)-1.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://launch.primeacademy.io/hubfs/Photos/Staff%20Headshots/image%20(3)-1.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://launch.primeacademy.io/hubfs/Photos/Staff%20Headshots/image%20(3)-1.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://launch.primeacademy.io/hubfs/Photos/Staff%20Headshots/image%20(3)-1.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://launch.primeacademy.io/hubfs/Photos/Staff%20Headshots/image%20(3)-1.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://launch.primeacademy.io/hubfs/Photos/Staff%20Headshots/image%20(3)-1.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://launch.primeacademy.io/hubfs/Photos/Staff%20Headshots/image%20(3)-1.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://launch.primeacademy.io/hubfs/Photos/Staff%20Headshots/image%20(3)-1.png",
          width: 32,
          height: 32,
        },
        ],
      },
    });
  }

  return (

    <>
      <p>Home</p>
      <button onClick={() => boom()}>Click</button>
    </>

  );
}

export default Home;

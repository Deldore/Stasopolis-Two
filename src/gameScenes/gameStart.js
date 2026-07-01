import banner1 from '../assets/loader/stas1.jpg'
import banner2 from '../assets/loader/stas2.jpg'
import banner3 from '../assets/loader/stas3.jpg'
import banner4 from '../assets/loader/stas4.jpg'

export const initScene = async () => {
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const body = document.body;

  body.style.background = "#000000";
  const title = document.createElement('span');
  title.innerHTML = "StasGayme present";
  Object.assign(title.style, {
    position: "absolute",
    left: "50%",
    top: "50%",
    color: "white",
    transform: "translate(-50%, -50%)",
    fontSize: "48px",
    textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
    transition: "1.5s"
  });

  body.appendChild(title);

  await wait(2500);
  title.style.opacity = 0;

  await wait(1500)
  title.style.opacity = "0.1s"
  title.style.fontSize = "200%";
  await wait(100)
  title.style.transition = "1.5s";
  title.innerHTML = 'P~n1$ Studio'
  title.style.opacity = 1;

  await wait(2500);
  title.style.opacity = 0;
  await wait(1500)
  body.removeChild(title);

  await loader();
}

const loader = async () => {
  return new Promise((resolve) => {

    const banners = [banner1, banner2, banner3, banner4]

    document.body.style.cssText = `
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url(${banner1});
    `

    const container = document.createElement('div');
    container.style.cssText = `
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 100;
      flex-direction: column;
      background: rgba(0, 0, 0, 0.5);
    `;

    const title = document.createElement('span');
    title.innerHTML = "Stasopolis II"
    title.style.cssText = `
      font-size: 114px;
      font-weight: bold;
      margin-bottom: 24px;
      background-image: linear-gradient(90deg, #ff7e5f, #feb47b);
      
      -webkit-background-clip: text;
      background-clip: text;
      
      -webkit-text-fill-color: transparent;
      color: transparent;

      background-color: #ff7e5f; 
    `;

    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      width: 300px;
      height: 4px;
      background: #333;
      border-radius: 2px;
      margin: 0 auto;
      overflow: hidden;
    `;

    const progressFill = document.createElement('div');
    progressFill.style.cssText = `
      width: 0%;
      height: 100%;
      background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
      transition: width 0.1s linear;
    `;
    progressBar.appendChild(progressFill);

    const loadingText = document.createElement('p');
    loadingText.innerHTML = "Загрузка...";
    loadingText.style.cssText = `
      color: #666;
      font-size: 18px;
      margin-top: 20px;
      font-weight: bold;
      animation: pulse 1.5s ease-in-out infinite;
      text-align: center;
    `;


    container.appendChild(title);
    container.appendChild(progressBar);
    container.appendChild(loadingText);
    document.body.appendChild(container);

    let progress = 0;
    let bannerInd = 1;

    const bannerInterval = setInterval(() => {
      document.body.style.backgroundImage = `url(${banners[bannerInd]})`;
      bannerInd = (bannerInd + 1) % banners.length;
    }, 2670)

    const interval = setInterval(() => {
      progress += progress > 67 ? Math.random() * 6.7 : Math.random() * 16.7;
      loadingText.innerHTML = `Загрузка...<br />${Math.ceil(progress)} %`;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        clearInterval(bannerInterval);

        container.removeChild(loadingText);

        const startButton = document.createElement('button');
        startButton.innerHTML = "Начать игру!"
        startButton.style.cssText = `
          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
          padding: 15px 25px;
          border: none;
          border-radius: 5px;
          color: white;
          font-size: 18px;
          font-weight: bold;
          margin-top: 24px;
        `

        startButton.onclick = () => {
          document.body.removeChild(container);
          document.body.style.cssText = `
            background: #000000;
          `;
          resolve();
        };
        container.appendChild(startButton);
      }
      progressFill.style.width = progress + "%";
    }, 67 * 5);
  })
}
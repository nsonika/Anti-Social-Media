const generateSTYLES = () => {
    return `<style>

    @import url('https://fonts.googleapis.com/css2?family=Dongle&family=Island+Moments&family=Kanit:wght@100;500&family=Open+Sans&family=Pangolin&family=Roboto:wght@300&family=Source+Code+Pro:wght@300&display=swap');
    
  
    body {
      background: #617f9f;
      font-family: 'Pangolin', cursive;
    }
  
    .hero {
      display: flex;
      flex-direction: column;
      height: 100vh;
      justify-content: center;
      align-items: center;
      color: rgb(255, 255, 255);
      animation: shake 0.8s infinite;
    }

    
    .hero .error {
        font-size: 10rem;
        margin: 0;
      }
  
      .hero .txt {
        font-size: 5rem;
        margin: 0;
        margin-top: 10px;
      }
  
    </style>`;
  };
  
  const generateHTML = () => {
    return `
    <div class='hero'>
      <h1 class='error'>404</h1>
      <h2 class='txt'>GET BACK TO WORK</h2>
    </div>
     `;
  };
  
 
  

  switch (window.location.hostname) {
    case "www.youtube.com":
    case "www.instagram.com":
    case "www.netflix.com":
    case "www.facebook.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        break;
  }
  
  
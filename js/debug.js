//https://www.npmjs.com/package/tplink-cloud-api

const { login } = require("tplink-cloud-api");

const TPLINK_USER = "akifmanzoor124@gmail.com";
const TPLINK_PASS = "Compaqs710";

async function getBedroomLight(){
  tplink = await login(TPLINK_USER, TPLINK_PASS);
  dl = await tplink.getDeviceList();
  bedroomLight = await tplink.getLB130("Bedroom");
  console.log(bedroomLight)
  return bedroomLight;    
}


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

async function discoMode(){

  bedroomLight = await getBedroomLight();

  while(true){
    brightness = Math.floor(Math.random() * 100);
    hue = Math.floor(Math.random() * 360);
    saturation = Math.floor(Math.random() * 50) + 50;
    rand = Math.floor(Math.random() * 5) + 1;

    await bedroomLight.setState(1,brightness, hue, saturation);
    sleep(250 * rand);
    console.log(brightness, hue, saturation, 500*rand);

    // hue = Math.floor(Math.random() * 360);
    // saturation = Math.floor(Math.random() * 100);

    // await bedroomLight.setState(1,10, hue, 100);
    // sleep(250);
  }    
}

//Gradually change the colour of the bulb to a purple-ish red
//Decrease the brightness over an hour to low 
async function romanticMode(){
  bedroomLight = await getBedroomLight();
  hue = 0;
  while(hue != 325){
    await bedroomLight.setState(1, 100, hue, 50);
    hue++
  }
}

discoMode()
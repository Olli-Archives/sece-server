const getImages = require('./instaApi');
const axios = require('axios');

const updateTime = 6000;

const updateDb = ()=>{
  setInterval( async function() {
    // const images = await getImages();
    const dbImages = await axios.get('http://localhost:7891/api/v1/images')
    .then(images=> {return images.data})
    .catch(err=>console.log(err));
    if(dbImages){
      const id = dbImages._id;
      
    }
}, updateTime);
}
updateDb();
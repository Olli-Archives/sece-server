const axios = require('axios');
const getImages = require('./instaApi');


const updateTime = 100 * 60 * 60 *24;

const updateDb = ()=>{
  setInterval( async function() {
    const instaImages = await getImages();
    console.log('images from insta',instaImages);
    const dbImages = await axios.get('http://localhost:7891/api/v1/images')
    .then(images=> {return images.data})
    .catch(err=>console.log(err));
    if(dbImages){
      console.log('db images in update', dbImages);
      const id = dbImages[0]._id;
      const updated = await axios.patch(`http://localhost:7891/api/v1/images/${id}`, {images:instaImages})
      console.log('updated', updated);
    }else{
      const initialSubmit = await axios.post('http://localhost:7891/api/v1/images')
      .send({images:instaImages})
      console.log('initial submit', initialSubmit)
    }
}, updateTime);
}
updateDb();
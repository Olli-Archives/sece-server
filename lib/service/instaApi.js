
const axios = require('axios');


let getImages = ()=>{
return axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.TOKEN}`)
.then(res=>res.data.data[0].images.thumbnail)
.then(data=>stuff=data)
.catch(err=>console.log(err));
}


module.exports = getImages;
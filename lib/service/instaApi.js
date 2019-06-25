
const axios = require('axios');

console.log('token is ', process.env.TOKEN);


let getImages = ()=>{
return axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.TOKEN}`)
.then(res=>res.data.data)
.then(data=>stuff=data)
.catch(err=>console.log(err));
}


module.exports = getImages;
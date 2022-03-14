let url = 'https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/photos';
fetch(url, {
        method : 'get'
    })
    .then(response => {
        if (response.ok) { 
            return response.json()
        }
        else {
            return Promise.reject(new Error(response.statusText))
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log('network/response error : ' + error);
    })

document.querySelector('#load_gallery').addEventListener('click',  e => {
  
})

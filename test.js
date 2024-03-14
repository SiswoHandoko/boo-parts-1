const axios = require('axios');

// Check Load Profile Page
axios.get('http://localhost:3000/profile/1')
    .then(response => {
        if (response.status === 200) {
            console.log(`Check Profile Page Loaded : Success`);
        } else {
            console.log('Check Profile Page Loaded : Failed');
        }
    })
    .catch(error => {
        console.error('Failed: API request failed', error);
    });

// Check Load Create Page 
axios.get('http://localhost:3000/create')
    .then(response => {
        if (response.status === 200) {
            console.log(`Check Create Page Loaded : Success`);
        } else {
            console.log('Check Create Page Loaded : Failed');
        }
    })
    .catch(error => {
        console.error('Failed: API request failed', error);
    });

// Check Create Profile 
const payload = {
    "name": "Kanto Suzuki",
    "description": "Suzuki II.",
    "mbti": "ISFJ",
    "enneagram": "9w3",
    "variant": "sp/so",
    "tritype": 725,
    "socionics": "SEE",
    "sloan": "RCOEN",
    "psyche": "FEVL",
    "image": "https://picsum.photos/300/300",
};

axios.post('http://localhost:3000/create', payload)
    .then(response => {
        if (response.status === 200) {
            console.log(`Check Create Process : Success`);
        } else {
            console.log('Check Create Process: Failed');
        }
    })
    .catch(error => {
        console.error('Failed: API request failed', error);
    });
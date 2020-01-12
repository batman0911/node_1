const axios = require('axios');

exports.getEmployees = (req, res, next) => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1/posts')
    .then(response => {
        // console.log(response);
        // let result = JSON.parse(response);
        // res.json(result);
        // console.log(result);
        // let result = JSON.stringify(response);
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
    })
}
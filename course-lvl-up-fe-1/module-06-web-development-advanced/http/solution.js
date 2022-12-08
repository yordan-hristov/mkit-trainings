const apiUrl = 'https://jsonplaceholder.typicode.com';

const getPostData = (id) => {
    if(typeof id !== 'number'){
        throw Error('Invalid input')
    }
    else if(id <= 0 || id > 100){
        throw Error('Invalid input')
    }
    const result = fetch(`${apiUrl}/posts/${id}`)
    .then(response => response.json())
    .then(data => data);
    return result;
}

module.exports = {
    getPostData
};
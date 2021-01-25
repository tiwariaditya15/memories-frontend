export default (posts = [], actions) => {
    switch (actions.type) {
        case "LIKE":
            return posts.map(post => post._id === actions.payload._id ? actions.payload : post);
        case 'DELETE':
            return posts.filter(post => post._id !== actions.payload._id);
        case 'UPDATE':
            return posts.map(post => post._id === actions.payload._id ? actions.payload : post);
        case 'FETCH_ALL':
            return actions.payload;
        case 'CREATE':
            return [...posts, actions.payload];
        default:
            return posts;
    }
};
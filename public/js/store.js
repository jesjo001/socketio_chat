let username;

const getUsername = () => {
    return username;
}

const setUsername = (name) => {
    username = name;
    console.log("username >> ", username)
};

export default {
    getUsername,
    setUsername,
}

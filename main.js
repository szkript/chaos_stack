const axios = require('axios');

let config = {
    headers: {
        Authorization: '7852b2f575c0d5b43d124f6c5cf9a8e498ae81090f093fac29658a40ede93921'
    }
};

let commands;

axios.get('https://registration.hungary.chaosstack.com/api/qualify/user_commands', config)
    .then(response => (console.log(response.data.userCommands = commands)));


let mapping = require('./mapping.json');

for (command in commands) {

}
//axios.post('https://registration.hungary.chaosstack.com/api/qualify/set_lights', , config);



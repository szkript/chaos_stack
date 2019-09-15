const axios = require('axios');

let config = {
    headers: {
        Authorization: '7852b2f575c0d5b43d124f6c5cf9a8e498ae81090f093fac29658a40ede93921'
    }
};

axios.get('https://registration.hungary.chaosstack.com/api/qualify/user_commands', config)
    .then(response => (compareValues(response.data.userCommands)));

function compareValues(commands) {
    let mapping = require('./mapping.json');

    for (let command in commands) {
        for (let map in mapping) {
            if (command.user === map.user) {
                for (room in map.rooms) {
                    if (room === command.targetRoom) {
                        let lights = room.values;
                        let data = command.action;
                        data.add(lights);
                        axios.post('https://registration.hungary.chaosstack.com/api/qualify/set_lights', data, config);
                    }
                }
            }
        }
    }
}

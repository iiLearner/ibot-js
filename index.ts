import Sharder from 'eris-sharder'
import config from './src/secret/config.json'


const sharder = new Sharder.Master(config.token, )

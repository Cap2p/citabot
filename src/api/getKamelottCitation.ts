import axios from "axios";
import {Config} from "../config/config";
const config: Config = require('../config/config.json');


export const getCitation = async () => {
    return axios(config.url);
}
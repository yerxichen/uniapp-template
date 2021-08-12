import {common} from "./common";
import {dev} from './dev'
import {prod} from './prod'

function envConstants() {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'production') {
        console.log('生产环境')
        Object.assign(common, prod)
    } else {
        console.log('开发环境')
        Object.assign(common, dev)
    }
    return common
}

export const config = {
    constants: envConstants()
}

import {common} from "./common";
import {dev} from './dev'
import {test} from './test'
import {prod} from './prod'

function envConstants() {
    console.log(process.env.NODE_ENV);
    if (process.env.VUE_APP_ENV === 'test') {
        console.log('测试环境')
        Object.assign(common, test)
    } else if (process.env.VUE_APP_ENV === 'prod') {
        console.log('生产环境')
        Object.assign(common, prod)
    } else {
        console.log('本地环境')
        Object.assign(common, dev)
    }
    return common
}

export const config = {
    constants: envConstants()
}

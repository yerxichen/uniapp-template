import common from "./common";
import dev from './dev'
import prod from './prod'
import userMock from '@/mock/index.js'
import Vconsole from 'vconsole'

const constants = function envConstants() {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'production') {
        console.log('生产环境')
        Object.assign(common, prod)
    } else {
        console.log('开发环境')
        Object.assign(common, dev)

    }
    // 开启mock数据
    if(common.useMock) userMock()
    // 开启vconsole
    if(common.useVconsole) new Vconsole()
    return common
}

export default constants()

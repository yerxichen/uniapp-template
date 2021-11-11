import Mock from 'mockjs'
import address from './address.js'
import dev from '@/common/env/dev.js'
const mocks = [
	...address
]

const usesMock = function (){
	for (const i of mocks) {
		Mock.mock(dev.baseUrl + i.url, i.type || 'get', {
			success: true,
			code: 0,
			data: i.response.data,
			message: '成功'
		})
	}
}

export default usesMock

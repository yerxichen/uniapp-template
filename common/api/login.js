import request from '../request.js'
// 登录
export function login(param){
	return request.post('/login/doLogin',param)
}

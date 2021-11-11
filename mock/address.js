const Mock = require('mockjs')

module.exports = [{
	url: '/login/doLogin',//获取表格列表
	type: 'get',
	response: Mock.mock({
		'data|20':[{
			'address':'@city',
			'name':'@cname',
			'age|20-50':10,
			'email':'@email'
		}]
	})
}]

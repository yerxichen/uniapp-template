import Vue from 'vue'
async function get(url,param){
	return await Vue.prototype.$vm.$u.get(url,param)
}

async function post(url,param){
	return await Vue.prototype.$vm.$u.post(url,param)
}

async function put(url,param){
	return await Vue.prototype.$vm.$u.put(url,param)
}

async function del(url,param){
	return await Vue.prototype.$vm.$u.delete(url,param)
}

export default {
	get,post,put,del
}
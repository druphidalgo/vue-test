import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		fields: []
	},
	mutations: {
		addField(state, text) {
			state.fields.push({ text })
		},
		removeField(state, field) {
			state.fields.splice(state.fields.indexOf(field), 1)
		}
	}
})

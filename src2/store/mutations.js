import {
	INCREMENT,
	DECREMENT
} from './types'

import getters from './getters.js'

const state={
	count:20
}

const mutations={
	[INCREMENT](state){
		state.count++;
	},
	[DECREMENT](state){
		state.count--;
	}
}

export default {
	state,
	getters,
	mutations
}
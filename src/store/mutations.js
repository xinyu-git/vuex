import{
	INCREMENT,
	DECREMENT
} from './types.js'

import getters from './getters.js'

const state={
	count:20
};

const mutations={
	[INCREMENT](state){
		console.log(state)
		state.count++
	},
	[DECREMENT](state){
		state.count--
	}
}

export default {
	mutations,
	getters,
	state
}
<template>
	<div>
		<form @submit.prevent="addField">
			<input 
				type="text" 
				placeholder="Field Name" 
				v-model="text"
				@keyup="changeField"
			/>
			<select v-model="selected" @change="changeField">
				<option value="">-- Choose One --</option>
				<option>Football</option>
				<option>Baseball</option>
				<option>Basketball</option>
			</select>
			<button :disabled="this.isDisabled == 1"> Add Field </button>
		</form>
		<h4>Fields Configured</h4>
		<ul>
			<li v-for="(field, index) in fields" :key="index"
			>{{ field.text }}
				<button @click="removeField(field)">x</button>
				</li>
		</ul>
		<span>{{ msg }}</span>
	</div>
</template>

<script>
import store from '../../store';

export default {
	data() {
		return {
			text: '',
			msg: '',
			isDisabled: true
		}
	},

	computed: { fields: () => store.state.fields },

	methods: {
		addField() {
			if (this.selected && this.text) {
				store.commit('addField', this.text+' ('+this.selected+')')
				this.text = ''
				this.selected = ''
				this.msg = ''
				this.isDisabled = true
			} 
		},
		removeField(id) {
			store.commit('removeField', id)
			if (this.fields.length === 0)
				this.msg = "You haven't set up any fields yet"
		},
		changeField() {
			if (this.selected && this.text) {
				this.isDisabled = false
			} else {
				this.isDisabled = true
			}
		}
	}
}
</script>

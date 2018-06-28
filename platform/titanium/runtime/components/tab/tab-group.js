export default {
	name: 'tab-group',
	model: {
		prop: 'selectedTab',
		event: 'focus'
	},
	props: {
		selectedTab: Number
	},
	watch: {
		selectedTab(index) {
			const selectedTab = this.$titaniumView.tabs[index];
			this.$titaniumView.activeTab = selectedTab;
		}
	},
	provide: function() {
		return {
			getTabGroup: this.getTabGroup
		}
	},
	render(h) {
		const self = this;
		return h('titanium-tab-group', {
			on: {
				focus: function(event) {
					self.$emit('focus', event.index);
				}
			}
		}, this.$slots.default);
	},
	mounted() {
		const selectedTab = this.$titaniumView.tabs[this.selectedTab];
		this.$titaniumView.activeTab = selectedTab;
	},
	methods: {
		getTabGroup() {
			return this.$titaniumView;
		},
		addTab(tabView) {
			this.$titaniumView.addTab(tabView);
		},
		open() {
			this.$titaniumView.open();
		}
	}
};

'use strict';

// Configuring the Projects module
angular.module('projects').run(['Menus',
	function(Menus) {
		// Add the Projects dropdown item
		Menus.addMenuItem('topbar', {
			title: 'Textbooks',
			state: 'projects',
			type: 'dropdown'
		});

		// Add the dropdown list item
		Menus.addSubMenuItem('topbar', 'projects', {
			title: 'Search for Textbooks',
			state: 'projects.list'
		});

		// Add the dropdown create item
		Menus.addSubMenuItem('topbar', 'projects', {
			title: 'Create Textbook Listing',
			state: 'projects.create'
		});
	}
]);

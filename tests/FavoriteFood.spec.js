describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should filter correct list of people', function(){
    var mockedList = [{
      name: 'Pedro',
      favoriteFood: 'Ribeye'
    }, {
      name: 'Ang',
      favoriteFood: 'skirt steak'
    }, {
      name: 'Brooke',
      favoriteFood: 'Everything'
    }];

    var results = $filter('favoriteFood')(mockedList, 'Ribeye');

    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Pedro');
  });
	
});

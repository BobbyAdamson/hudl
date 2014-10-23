angular.module('rosterApp', ['flow'])

.controller('RosterCtrl', [
'$scope',
function($scope){

	/*var clearedForm = {
		photo: '',
		fname: '',
		lname: '',
		number: '',
		grade: '',
		gradyear: '',
		feet: '',
		inches: '',
		weight: '',
		position: [],
		captain: false,
		
		athleteCell: '',
		athleteCarrier: '',
		athleteHome: '',
		athleteEmail: '',
		
		athleteStreet: '',
		athleteCity: '',
		athleteState: '',
		athleteZip: '',
		
		guardianName: '',
		guardianCell: '',
		guardianEmail: '',
		
		seasons: [],
		
		notes: ''
	}*/

	$scope.addPost = function(){
		var newPlayer = {
			photo: this.photo,
			fname: this.fname,
			lname: this.lname,
			number: this.number,
			grade: 'Senior',
			gradyear: this.gradyear,
			feet: this.feet5,
			inches: this.inches,
			weight: this.weight,
			position: this.position,
			captain: this.captain,
			
			athleteCell: this.athleteCell,
			athleteCarrier: this.athleteCarrier,
			athleteHome: this.athleteHome,
			athleteEmail: this.athleteEmail,
			
			athleteStreet: this.athleteStreet,
			athleteCity: this.athleteCity,
			athleteState: this.athleteState,
			athleteZip: this.athleteZip,
			
			guardianName: this.guardianName,
			guardianCell: this.guardianCell,
			guardianEmail: this.guardianEmail,
			
			seasons: this.seasons,
			
			notes: this.notes
		}
		
		$scope.players.push(newPlayer);
		
		this.photo = '',
		this.fname = '',
		this.lname = '',
		this.number = '',
		this.grade = '',
		this.gradyear = '',
		this.feet = '',
		this.inches = '',
		this.weight = '',
		this.position = [],
		this.captain = false,
		
		this.athleteCell = '',
		this.athleteCarrier = '',
		this.athleteHome = '',
		this.athleteEmail = '',
		this.athleteStreet = '',
		this.athleteCity = '',
		this.athleteState = '',
		this.athleteZip = '',
		this.guardianName = '',
		this.guardianCell = '',
		this.guardianEmail = '',
		
		this.seasons = [],
		
		this.notes = ''
		
		$('.overlay').fadeIn(200).delay(1800).fadeOut(200);
		$('.success').fadeIn(200).delay(1800).fadeOut(200);
		$('.less').fadeOut(200);
		$('#add-player-container .show-details').delay(200).fadeIn(200);
		$('#add-player-container .details').slideUp();
		$('#add-player-container .preview').fadeOut(200);
		$('#add-player-container .fields').delay(200).fadeIn(200);
		
		$flow.cancel();
	  
	};
	
	var currentPlayerID;
	
	$scope.deletePlayer = function(){
		$('.overlay').fadeIn(200);
		$('.warning').fadeIn(200);
		currentPlayerID = this.player.id;
	};
	
	$scope.confirmDelete = function(){
		$scope.players.splice(currentPlayerID - 1, 1);
		$('.warning').fadeOut(200);
		$('.overlay').delay(1400).fadeOut(200);
		$('.modal-confirm-delete').fadeIn(200).delay(1200).fadeOut(200);
	};
	
	$scope.addPosition = function(player){
		player.position.push({
			position: player.newposition,
			depth: player.newdepth
		});
		console.log(player.position);
	};
	
	$scope.removepos = function(idx, player){
		var pos_to_delete = player.position[idx];
		player.position.splice(idx, 1);
	};
	
	$scope.addseason = function(player){
		console.log(player.seasons);
		player.seasons.push(player.newseason);
		console.log(player.seasons);
	};
	
	$scope.removeseason = function(idx, player){
		console.log(idx);
		var season_to_delete = player.seasons[idx];
		player.seasons.splice(idx, 1);
	};

  $scope.players = [
  		{
  			id: 1,
  			photo: 'images/photos/bob.jpg',
			fname: 'Bobby',
			lname: 'Adamson',
			number: 15,
			grade: 'Senior',
			gradyear: 2015,
			feet: 5,
			inches: 11,
			weight: 751,
			position: [
				{position: 'S', depth: '1'}
			],
			captain: false,
			active: true,
			athleteCell: '555-555-5555',
			athleteCarrier: 'AT&T',
			athleteHome: '555-555-5555',
			athleteEmail: 'bobby@bobbyadamson.com',
			
			athleteStreet: '123 Street St.',
			athleteCity: 'New York',
			athleteState: 'NY',
			athleteZip: '10009',
			
			guardianName: 'Lauralee Adamson',
			guardianCell: '555-555-5555',
			guardianEmail: 'laura@aol.com',
			
			seasons: [ 2012, 2013, 2014],
			
			notes: 'String'
			
		},
		{
  			id: 2,
			photo: 'images/photos/ben.jpg',
			fname: 'BenJarvus',
			lname: 'Green-Ellis',
			number: 20,
			grade: 'Sophomore',
			gradyear: 2018,
			feet: 5,
			inches: 11,
			weight: 226,
			position: [
				{position: 'RB', depth: '3'}
			],
			captain: false,
			active: true,
			athleteCell: '555-555-5555',
			athleteCarrier: 'AT&T',
			athleteHome: '555-555-5555',
			athleteEmail: 'ben@bobbyadamson.com',
			
			athleteStreet: '123 Street St.',
			athleteCity: 'Cincinnati',
			athleteState: 'NY',
			athleteZip: '10009',
			
			guardianName: 'Lauralee Adamson',
			guardianCell: '555-555-5555',
			guardianEmail: 'laura@aol.com',
			
			seasons: [ 2014 ],
			
			notes: 'String'
		},
		{
  			id: 3,
			photo: 'images/photos/jamaal.jpg',
			fname: 'Jamaal',
			lname: 'Charles',
			number: 25,
			grade: 'Junior',
			gradyear: 2016,
			feet: 5,
			inches: 11,
			weight: 199,
			position: [
				{position: 'RB', depth: '1'},
				{position: 'TE', depth: '4'}
			],
			captain: false,
			active: true,
			athleteCell: '555-555-5555',
			athleteCarrier: 'AT&T',
			athleteHome: '555-555-5555',
			athleteEmail: 'jamaal@bobbyadamson.com',
			
			athleteStreet: '123 Street St.',
			athleteCity: 'Kansas City',
			athleteState: 'MO',
			athleteZip: '10009',
			
			guardianName: 'Jamaals Mom',
			guardianCell: '555-555-5555',
			guardianEmail: 'laura@aol.com',
			
			seasons: [ 2013, 2014],
			
			notes: 'String'
		},
		{
  			id: 4,
			photo: 'images/photos/maclin.jpg',
			fname: 'Jeremy',
			lname: 'Maclin',
			number: 20,
			grade: 'Senior',
			gradyear: 2015,
			feet: 6,
			inches: 0,
			weight: 198,
			position: [
				{position: 'PR', depth: '1'},
				{position: 'WR', depth: '2'},
			],
			captain: false,
			active: true,
			athleteCell: '555-555-5555',
			athleteCarrier: 'AT&T',
			athleteHome: '555-555-5555',
			athleteEmail: 'jmac@bobbyadamson.com',
			
			athleteStreet: '123 Street St.',
			athleteCity: 'Philadelphia',
			athleteState: 'PA',
			athleteZip: '10009',
			
			guardianName: 'Jerry Adamson',
			guardianCell: '555-555-5555',
			guardianEmail: 'jerry@aol.com',
			
			seasons: [ 2012, 2013, 2014],
			
			notes: 'String'
		},
		{
  			id: 5,
			photo: 'images/photos/blair.png',
			fname: 'Blair',
			lname: 'Walsh',
			number: 18,
			grade: 'Freshman',
			gradyear: 2018,
			feet: 5,
			inches: 10,
			weight: 192,
			position: [
				{position: 'K', depth: '1'},
				{position: 'P', depth: '2'}
			],
			captain: false,
			active: true,
			athleteCell: '555-555-5555',
			athleteCarrier: 'AT&T',
			athleteHome: '555-555-5555',
			athleteEmail: 'Blair@bobbyadamson.com',
			
			athleteStreet: '123 Street St.',
			athleteCity: 'Minnesota',
			athleteState: 'MN',
			athleteZip: '10009',
			
			guardianName: 'Lauralee Adamson',
			guardianCell: '555-555-5555',
			guardianEmail: 'laura@aol.com',
			
			seasons: [ 2014],
			
			notes: 'String'
		},
		{
  			id: 6,
			photo: 'images/photos/blaine.jpg',
			fname: 'Blaine',
			lname: 'Gabbert',
			number: 11,
			grade: 'Sophomore',
			gradyear: 2017,
			feet: 6,
			inches: 4,
			weight: 235,
			position: [
				{position: 'QB', depth: '1'},
				{position: 'P', depth: '5'}
			],
			captain: false,
			active: true,
			athleteCell: '555-555-5555',
			athleteCarrier: 'AT&T',
			athleteHome: '555-555-5555',
			athleteEmail: 'Gabbert@bobbyadamson.com',
			
			athleteStreet: '123 Street St.',
			athleteCity: 'San Francisco',
			athleteState: 'CA',
			athleteZip: '10009',
			
			guardianName: 'Dave Gabbert',
			guardianCell: '555-555-5555',
			guardianEmail: 'laura@aol.com',
			
			seasons: [ 2014],
			
			notes: 'String'
		},
		{
  			id: 7,
			photo: 'images/photos/hines.jpg',
			fname: 'Hines',
			lname: 'Ward',
			number: 86,
			grade: 'Senior',
			gradyear: 2015,
			feet: 6,
			inches: 0,
			weight: 205,
			position: [
				{position: 'WR', depth: '1'}
			],
			captain: false,
			active: true,
			athleteCell: '555-555-5555',
			athleteCarrier: 'AT&T',
			athleteHome: '555-555-5555',
			athleteEmail: 'Hines@bobbyadamson.com',
			
			athleteStreet: '123 Street St.',
			athleteCity: 'Pittsburg',
			athleteState: 'PA',
			athleteZip: '10009',
			
			guardianName: 'Ms Ward',
			guardianCell: '555-555-5555',
			guardianEmail: 'ward@aol.com',
			
			seasons: [ 2014],
			
			notes: 'String'
		}
		
	];
	
	$scope.orderProp = 'lname';
}]);
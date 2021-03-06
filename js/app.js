angular.module('tes.akkordia.app', [])
	.controller('AppController', ['$scope', function($scope) {
		$scope.settings = {
      uke: {
        // vert
        // notes: {vert: [0,1,2,3,4,5], horiz: [0,1,2,3]},
        // frets: {vert: [0,1,2,3,4], horiz: [0,1,2]},
        // horiz
        notes: {vert: [0,1,2,3,4,5], horiz: [3,2,1,0]},
        frets: {vert: [4,3,2,1,0], horiz: [2,1,0]},
        chords: {
          "C7": ["0-0", "1-0", "2-0", "3-1"],
          "C#": ["0-1", "1-1", "2-1", "3-4"],
          "C#7": ["0-1", "1-1", "2-1", "3-2"],
          "Cm7": ["0-3", "1-3", "2-3", "3-3"],
          "Cmaj7": ["0-0", "1-0", "2-0", "3-2"],
          "Fmaj7": ["0-2", "1-4", "2-1", "3-3"],
          "F#": ["0-3", "1-1", "2-2", "3-1"],
          "F#m": ["0-2", "1-1", "2-2", "3-0"],
          "G6": ["0-0", "1-2", "2-0", "3-2"],
          "G7": ["0-0", "1-2", "2-1", "3-2"],
          "Gm7": ["0-0", "1-2", "2-1", "3-1"],
          "G#": ["0-5", "1-3", "2-4", "3-3"],
          "D": ["0-2", "1-2", "2-2", "3-5"],
          "D7": ["0-2", "1-2", "2-2", "3-3"],
          "Dm7": ["0-2", "1-2", "2-1", "3-3"],
          "Eb7": ["0-3", "1-3", "2-3", "3-4"],
          "E": ["0-4", "1-4", "2-4", "3-2"],
          "E7#9": ["0-1", "1-2", "2-3", "3-2"],
          "Abmaj7": ["0-1", "1-3", "2-3", "3-3"],
          "A": ["0-2", "1-1", "2-0", "3-0"],
          "A7": ["0-0", "1-1", "2-0", "3-0"],
          "Am7": ["0-0", "1-4", "2-3", "3-3"],
          "Am7b5": ["0-0", "1-3 ", "2-3", "3-3"],
          "Bbmaj7": ["0-3", "1-2", "2-1", "3-0"],
          "Bbm7": ["0-1", "1-1", "2-1", "3-1"],
          "B": ["0-4", "1-3", "2-2", "3-2"],
          "B7": ["0-2", "1-3", "2-2", "3-2"],
          "Bm": ["0-4", "1-2", "2-2", "3-2"],
          "Bm7": ["0-2", "1-2", "2-2", "3-2"],

        }
      }
    };

    $scope.song = [
      {title: "My Baby Just Cares For Me", performer: "Nina Simone", author: "",
  		  lyrics: [
              {line: "My baby don't care for shows"},
              {line: "My baby don't care for clothes"},
              {line: "My baby just cares for me"},
              {line: "My baby don't care for cars and races"},
              {line: "My baby don't care for high-tone places"},
              {line: "-"},
              {line: "Liz Taylor is not his style"},
              {line: "And even Lana Turner's smile"},
              {line: "Is somethin' he can't see"},
              {line: "My baby don't care who knows"},
              {line: "My baby just cares for me"},
              {line: "-"},
              {line: "Baby, my baby don't care for shows"},
              {line: "And he don't even care for clothes"},
              {line: "He cares for me"},
              {line: "My baby don't care"},
              {line: "For cars and races"},
              {line: "Baby don't care for"},
              {line: "He don't care for high-tone places"},
              {line: "-"},
              {line: "Liz Taylor is not his style"},
              {line: "And even Liberace's smile"},
              {line: "Is something he can't see"},
              {line: "Is something he can't see"},
              {line: "I wonder what's wrong with baby"},
              {line: "My baby just cares for"},
              {line: "My baby just cares for"},
              {line: "My baby just cares for me"}
              ],
		    chords: [[{chord:"A", len: 2}, {chord:"D"}, {chord:"E"}],
            {repeat:0},
            [{chord:"A", len: 2}, {chord:"Bm"}, {chord:"Bm7"}],
            [{chord:"C#"}, {chord:"C#7"}, {chord:"F#m", len: 2}],
            [{chord:"B"}, {chord:"B7"}, {chord:"E", len: 2}],
            {empty:0},
            {repeat:0},
            {repeat:0},
            {repeat:2},
            [{chord:"D"}, {chord:"G#"}, {chord:"A"}, {chord:"F#"}],
            [{chord:"B"}, {chord:"E"}, {chord:"A"}, {chord:"E"}]
        ]
      },
      {title: "Autumn In New York", performer: "-", author: "Vernon Duke",
        lyrics: [
        {line: ""},{line: ""},{line: ""},{line: ""},{line: ""},
        {line: ""},{line: ""},{line: ""},{line: ""},{line: ""},
        ],
        chords: [
          [{chord:"Gm7", len: 2}, {chord:"Am7", len: 2},{chord:"Bbmaj7", len: 2}, {chord:"C7", len: 2}],
          [{chord:"Fmaj7", len: 4}, {chord:"Am7", len: 2}, {chord:"D7", len: 2}],
          {repeat:0},
          [{chord:"Am7b5", len: 4},{chord:"D7", len: 4}],
          [{chord:"Gm7", len: 4}, {chord:"Bbm7", len: 2},{chord:"Eb7", len: 2}],
          [{chord:"Abmaj7", len: 6}, {chord:"G7", len: 2}],
          [{chord:"Cm7", len: 4}, {chord:"G7", len: 4}],
          [{chord:"Cmaj7", len: 4}, {chord:"Am7", len: 2}, {chord:"D7", len: 2}],

        ],
      },
      {title: "I'm just Lucky So and So", performer: "-", author: "Vernon Duke",
        lyrics: [
        {line: ""},{line: ""},{line: "Repeat 1"},{line: ""},{line: "Repeat 2"},
        {line: ""},{line: ""},{line: ""},{line: ""},{line: ""},
        ],
        chords: [
          [{chord:"G6", len: 4}, {chord:"Cmaj7", len: 4}],
          [{chord:"G6", len: 4}, {chord:"Dm7", len: 2}, {chord:"G7", len: 2}],
          [{chord:"C7", len: 2}, {chord:"A7", len: 2}, {chord:"Am7", len: 2}, {chord:"D7", len: 2}],
          [{chord:"G6", len: 2}, {chord:"E7#9", len: 2}, {chord:"Am7", len: 2}, {chord:"D7", len: 2}],
          {empty:0},
          [{chord:"G6", len: 2}, {chord:"C7", len: 2}, {chord:"G6", len: 4}],
          {empty:0},
        ],
      }
    ];

    // Functions
    $scope.getSong = function(chord) {
      return $scope.song[2];
    };
    $scope.getChordsForLine = function(index) {
      var song = $scope.getSong();
      if (song.chords.length > index) {
        // console.log(typeof(song.chords[index].repeat));
        // Repeat check
        if (typeof(song.chords[index].repeat) != "undefined") {
          return song.chords[song.chords[index].repeat];
        }
        else if (typeof(song.chords[index].empty) != "undefined") {
          return [];
        }
        else {
          // Default chords
          // console.log(index);
          return song.chords[index];
        }
      }
      return [];
    };
    $scope.getChordLen = function(chord) {
      return (chord.len !== undefined)?chord.len:1;
    };
    // Chords
    $scope.getChordNote = function(name, string, fret) {
      // TODO: add # to b conversion
      var chord = $scope.settings.uke.chords[name];
      if ((chord !== undefined) && (chord.indexOf(string + "-" + fret) != -1)) {
        return 'visible';
      }
      else {
        return 'hidden';
      }
    };

	}]);
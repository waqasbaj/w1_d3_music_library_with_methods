var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
    printPlaylists : function ()
    {
        var obj={};

      for(var playlist in this.playlists)
          {
           obj = this.playlists[playlist];

           console.log(obj.id + " : " + obj.name + " - " + obj.tracks.length + " tracks");
         }

    },

    printTracks: function ()
        {

        var obj = {};

        for (var track in this["tracks"])
        {
            obj = this["tracks"][track];

            console.log(obj.id + " : " + obj.name + " by " + obj["artist"] + "("+obj["album"]+")");
        }
      }


}
// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

console.log(library.printPlaylists());
console.log(library.printTracks());


var printPlaylists = function ()
{
  var obj={};

  for(var playlist in library.playlists)
  {
       obj = library.playlists[playlist];

       console.log(obj.id + " : " + obj.name + " - " + obj.tracks.length + " tracks");

  }

}

//printPlaylists();




// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {

  var obj = {};

  for (var track in library["tracks"])
  {
      obj = library["tracks"][track];

      console.log(obj.id + " : " + obj.name + " by " + obj["artist"] + "("+obj["album"]+")");

  }

}

//printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId)
{

  var obj = library.playlists[playlistId];

  console.log (playlistId+ ": " + obj.name + " - " +obj.tracks.length + "tracks");

  for (var x=0; x<obj.tracks.length; x++)
    {
        for ( var outputTracks in library.tracks)

          if (outputTracks === obj.tracks[x])
          {

            console.log(library.tracks[outputTracks].id + " : " + library.tracks[outputTracks].name + " by " + library.tracks[outputTracks]["artist"] + "("+library.tracks[outputTracks]["album"]+")");

          }
    }



}



// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId)
{


  var obj = library.playlists[playlistId];

  obj.tracks.push(trackId);

  console.log(obj.tracks);


}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function()
{
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}



// adds a track to the library

var addTrack = function (name, artist, album)
{


    var id = uid();

    library.tracks[id] = {};


    // library.tracks.id[name] = "hello";

    library.tracks[id].id= id;
    library.tracks[id].name= name;
    library.tracks[id].artist= artist;
    library.tracks[id].album=album;

    library.tracks[id].my.yours="nope";


  console.log(library.tracks);

}



// adds a playlist to the library

var addPlaylist = function (name)
{

  var obj={};
  var newlist = uid();

  obj.id=newlist;
  obj.name=name;
  obj.tracks=["t01", "t02", "t03"]



  library.playlists[newlist]=obj;

  console.log(library.playlists);

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
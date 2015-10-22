var Song = require('../song.js')
var Playlist = require('../playlist.js')
var song;
var song2;
var playlist;

describe('Song', function(){
  beforeEach(function(){
    song = new Song('Hey Jude', 420)
  })

  it('can set a name and duration', function(){
    expect(song.name).toEqual('Hey Jude')
    expect(song.duration).toEqual(420)
  })
})

describe('Playlist', function(){
  beforeEach(function(){
    song = new Song('Hey Jude', 420)
    song2 = new Song('Accross the Universe', 380)
    playlist = new Playlist()
  })

  describe('list', function(){
    it('Starts out with an empty playlist', function (){
      expect(playlist.list.length).toEqual(0)
    })
  })

  describe('addSong', function(){
    it('Allows songs to be added to the list', function(){
      playlist.addSong(song)
      expect(playlist.list.length).toEqual(1)
      expect(playlist.list[0].name).toEqual('Hey Jude')
    })
  })

  describe('nowPlaying', function(){
    it('returns the name of the song that is currently playing', function(){
      playlist.addSong(song)
      expect(playlist.nowPlaying()).toEqual('Hey Jude')
    })
  })

  describe('skipSong', function(){
    it('increments the currentSong by one index position in the song list', function(){
      playlist.addSong(song)
      playlist.addSong(song2)
      playlist.skipSong()
      expect(playlist.nowPlaying()).toEqual('Accross the Universe')
    })
  })

  describe('removeSong', function(){
    it('takes a song name, and removes that song from the playlist', function(){
      playlist.addSong(song)
      playlist.addSong(song2)
      expect(playlist.list.length).toEqual(2)
      playlist.removeSong(song2)
      expect(playlist.list.length).toEqual(1)
    })
  })
})



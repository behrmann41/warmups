function Playlist (){
  this.list = []
  this.currentSong = 0;
}

Playlist.prototype.addSong = function(song) {
  this.list.push(song)
};

Playlist.prototype.nowPlaying = function() {
  return this.list[this.currentSong].name;
};

Playlist.prototype.skipSong = function() {
  var position = this.currentSong
  this.currentSong = position === this.list.length - 1 ? 0 : position + 1;
};

Playlist.prototype.removeSong = function(song) {
  var i = this.list.indexOf(song)
  if (i != -1){
    this.list.splice(i, 1)
  }
}

module.exports = Playlist;
var playlist = { nirvana: 'lithium' }

function updatePlaylist (playlist, artistName, songTitle) {
 playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist (playlist, artistName) {
  var newPlaylist = Object.assign({})
  delete playlist.artistName
  return playlist
}

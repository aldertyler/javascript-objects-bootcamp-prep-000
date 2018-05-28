var playlist = { nirvana: 'lithium' }

function updatePlaylist (playlist, artistName, songTitle) {
 playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist (playlist, artistName) {
  var newPlaylist = Object.assign({}, playlist)
  delete newPlaylist.artistName
  return newPlaylist
}

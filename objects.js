<<<<<<< HEAD
var playlist = {};

var playlist = {
  'Taylor Swift': 'Style', 
  'Rihanna': 'Rehab'
}

function updatePlaylist(playlist, artistName, songTitle) { playlist[artistName] = songTitle 
  return playlist
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName]
  return playlist
=======
var playlist = {
  artist: "song titles" };
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: value})
>>>>>>> 083e2bf65b64de658b21d06a74b534567cdf579f
}
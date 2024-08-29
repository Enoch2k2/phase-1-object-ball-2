const homePlayers = ["Alan Anderson", "Reggie Evans", "Brook Lopez", "Mason Plumlee", "Jason Terry"]
const homeStats = [
  [0, 16, 22, 12, 12, 3, 1, 1],
  [30, 14, 12, 12, 12, 12, 12, 7],
  [11, 17, 17, 19, 10	, 3, 1, 15],
  [1, 19, 26, 12, 6, 3, 8,5],
  [31, 15, 19, 2, 2, 4, 11, 1]
]

const awayPlayers = ["Jeff Adrien", "Bismak Biyombo","DeSagna Diop", "Ben Gordon", "Brendan Haywood"]
const awayStats = [
  [4, 18, 10, 1, 1, 2, 7, 2],
  [0, 16, 12, 4, 7, 7, 15, 10],
  [2, 14, 24, 12, 12, 4, 5, 5],
  [8, 15, 33, 3, 2, 1, 1, 0],
  [33, 15, 6, 12, 12, 22, 5, 12]
]

function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: createPlayers(homePlayers, homeStats)
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: createPlayers(awayPlayers, awayStats)
    }
  }
}

function createPlayer(stats) {
  const playerObj = {}
  playerObj["Number"] = stats[0]
  playerObj["Shoe"] = stats[1]
  playerObj["Points"] = stats[2]
  playerObj["Rebounds"] = stats[3]
  playerObj["Assists"] = stats[4]
  playerObj["Steals"] = stats[5]
  playerObj["Blocks"] = stats[6]
  playerObj["Slam Dunks"] = stats[7]
  return playerObj
}

function createPlayers(players, stats) {
  const playersObj = {}
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const playerStats = stats[i]
    playersObj[player] = createPlayer(playerStats)
  }
  return playersObj
}

function getPlayer(playerName) {
  const players = {...gameObject().home.players, ...gameObject().away.players}

  return players[playerName]
}

function getTeam(teamName) {
  const team = gameObject().home.teamName == teamName ? gameObject().home : gameObject().away

  return team
}

function numPointsScored(playerName) {
  return getPlayer(playerName)["Points"]
}

function shoeSize(playerName) {
  return getPlayer(playerName)["Shoe"]
}

function teamColors(teamName) {
  return getTeam(teamName)["colors"]
}

function teamNames() {
  return [gameObject().home["teamName"], gameObject().away["teamName"]]
}

function playerNumbers(teamName) {
  const team = getTeam(teamName)
  const jerseyNumbers = []
  for(playerName in team.players) {
    jerseyNumbers.push(getPlayer(playerName)["Number"])
  }
  return jerseyNumbers
}

function playerStats(playerName) {
  return getPlayer(playerName)
}

console.log(playerStats("Bismak Biyombo"))
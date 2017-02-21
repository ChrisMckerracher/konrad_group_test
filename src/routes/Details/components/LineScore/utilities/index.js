import concat from 'utilities/concat'

export function populateLineScore(linescore, home_name, away_name) {

  let home_inning = {"team": home_name}
  let away_inning = {"team": away_name}
  if (!linescore.inning_line_score || linescore.inning_line_score.inning) {
    home_inning = concat(home_inning, cancelled_game)
    away_inning = concat(away_inning, cancelled_game)
    return [home_inning, away_inning]
  }
  linescore.inning_line_score.map((inning) => home_inning[inning.inning] = inning.home)
  home_inning = concat(home_inning, {'H': linescore.home_team_runs})
  home_inning = concat(home_inning, {'E': linescore.home_team_errors})
  
  linescore.inning_line_score.map((inning) => away_inning[inning.inning] = inning.away)
  away_inning = concat(away_inning, {'H': linescore.away_team_runs})
  away_inning = concat(away_inning, {'E': linescore.away_team_errors})
  
  console.log(home_inning)
  
  return [home_inning, away_inning]
}

const cancelled_game = {
  1 : "x",
  2 : "x",
  3 : "x",
  4 : "x",
  5 : "x",
  6 : "x",
  7 : "x",
  8 : "x",
  9 : "x",
  'H' : "x",
  'E' : "x",
}
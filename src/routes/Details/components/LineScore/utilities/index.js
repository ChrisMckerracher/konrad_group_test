import concat from 'utilities/concat'

export function populateLineScore(linescore, home_name, away_name){
  let home_inning = {"team": home_name}
  let away_inning = {"team": away_name}
  linescore.inning_line_score.map((inning) => home_inning[inning.inning] = inning.home)
  home_inning = concat(home_inning, {'H': linescore.home_team_runs})
  home_inning = concat(home_inning, {'E': linescore.home_team_errors})
  
  linescore.inning_line_score.map((inning) => away_inning[inning.inning] = inning.away)
  away_inning = concat(away_inning, {'H': linescore.away_team_runs})
  away_inning = concat(away_inning, {'E': linescore.away_team_errors})
  
  console.log(home_inning)
  
  return [home_inning, away_inning]
}

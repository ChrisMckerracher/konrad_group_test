export function getActiveTeamName(int, home_team, away_team) {
  return int ? away_team : home_team
}
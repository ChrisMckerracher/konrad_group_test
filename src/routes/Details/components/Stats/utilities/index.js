function populate_batting(batters) {
  return batters.map((batter) => (
    {"name": batter.name_display_first_last, "AB": batter.ab,
    "R": batter.r, "H": batter.h, "RBI": batter.rbi, "BB": batter.bb,
    "SO": batter.so, "AVG": batter.avg}))
}

export function populateStats(batting){
  //0 is always home, 1 away
  let home_batting = populate_batting(batting[0].batter)
  let away_batting = populate_batting(batting[1].batter)

  return [home_batting, away_batting]
}

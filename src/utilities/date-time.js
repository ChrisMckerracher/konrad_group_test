import moment from 'moment'

export function padDayMonth(calendar_item) {
  /* Pads the day and month with a 0 if they are less than 10
  Ex: 4 -> 04
  */
  return calendar_item >= 10 ? calendar_item : "0" + calendar_item
}

export function newDate(year, month, day) {
  return moment(`${year}-${month + 1}-${day}`)
}

export function incDecDate(date, amount, default_date='2014-03-29') {
  let new_date = date
  if (amount == 0){
    new_date = moment(default_date)
  }else{
    new_date = moment(new_date).add(amount, "day")
  }
  return [new_date.year(), new_date.month(), new_date.date()]
}

export function formatDate(date) {
  let f_date = `${date.format('dddd')} ${date.format("MMM")} ${date.date()} ${date.year()}`
  return f_date
}

export function formatNewDate(date_string) {
  //formats dates in the form of YYYY/MM/DD
  
  date_string = date_string.split("/")
  let new_date = newDate(date_string[0], date_string[1] - 1, date_string[2])
  return formatDate(new_date)
}
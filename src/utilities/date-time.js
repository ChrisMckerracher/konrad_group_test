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

export function incDecDate(date, amount) {
  let new_date = date
  if (amount == 0){
    new_date = moment("2016-7-4")
  }else{
    new_date = moment(new_date).add(amount, "day")
  }
  return [new_date.year(), new_date.month(), new_date.date()]
}

export function formatDate(date) {
  let f_date = `${date.format('dddd')} ${date.format("MMM")} ${date.date()} ${date.year()}`
  return f_date
}
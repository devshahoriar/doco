import moment from 'moment'

const viewDate= (date) => {
  return moment(date).format('DD MMM, YYYY')
}

export default viewDate
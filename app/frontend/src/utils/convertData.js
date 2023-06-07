import moment from 'moment/moment';

export const convertDate = (data) => moment(data).format('DD/MM/YYYY');
var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1522853578;
var currentMoment = moment.unix(timestamp);
console.log('Current moment', currentMoment.format('MMM D, Y @ h:mm a'));

console.log('Current moment', currentMoment.format('MMM Do, YYYY @ h:mm A'));

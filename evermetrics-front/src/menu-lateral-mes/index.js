var yo = require('yo-yo');

module.exports = function(dato) {
  var facebook = yo`<li class="current"><a href="#fb${dato.year}${dato.month}">${dato.month}</a></li>`

  var instagram = yo`<li class="current"><a href="#inst${dato.year}${dato.month}">${dato.month}</a></li>`

  var twitter = yo`<li class="current"><a href="#tw${dato.year}${dato.month}">${dato.month}</a></li>`
  
  if(dato.red === 'fb')
  {
    return facebook
  }else if(dato.red ==='inst'){
    return instagram
  }else{
    return twitter
  }

}

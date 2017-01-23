var yo = require('yo-yo');

module.exports = function landing(box) {
  return yo`<div class="container container-login">
      <div class="row">
        <div class="col l12">
          <div class="row">
            <h3 class="everlytics">EVERMETRICS</h3>
          </div>
        </div>
        ${box}
      </div>
    </div>`
}

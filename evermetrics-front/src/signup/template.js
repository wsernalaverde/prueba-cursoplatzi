var yo = require('yo-yo');
var landing = require('../landing');

var signupForm = yo`<div class="col l12">
      <div class="row">
        <div class="signup-box">
          <form class="signup-form" action="/signup" method="POST">
            <div class="divider"></div>
            <div class="section" style="text-align:center;">
              <input type="text" name="name" placeholder="Nombre">
              <input type="email" name="email" placeholder="Email">
              <input type="text" name="username" placeholder="Nombre de usuario">
              <input type="password" name="password" placeholder="Contraseña">
              <button class="btn waves-effect waves-light btn-login" type="submit">Registrate</button>
            </div>
          </form>
        </div>
        <div class="row">
          <a href="/signin">Tienes una cuenta</a>
        </div>
      </div>
    </div>`;

module.exports = landing(signupForm);

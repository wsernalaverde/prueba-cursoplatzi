var yo = require('yo-yo');
var landing = require('../landing');

var upform = yo`<div class="col l12">
      <div class="row">
        <div class="signup-box">
          <form class="signup-form" action="/api/estadisticas" method="POST">
            <div class="divider"></div>
            <div class="section" style="text-align:center;">
              <input type="text" name="red" value="fb" style="display:none;">
              <input type="text" name="type" value="month" style="display:none;">
              <input type="text" name="year" placeholder="Año">
              <input type="text" name="month" placeholder="Mes">
              <input type="text" name="allfans" placeholder="Fans totales">
              <input type="text" name="newfans" placeholder="Fans nuevos">
              <input type="text" name="prints" placeholder="Impresiones">
              <input type="text" name="nolikes" placeholder="No me gustas">
              <input type="text" name="activeusers" placeholder="Usuarios activos">
              <input type="text" name="likebyday" placeholder="Me Gusta (promedio por día)">
              <input type="text" name="postbymonth" placeholder="Post en el mes">
              <input type="text" name="scopebyday" placeholder="Alcance (promedio por día)">
              <input type="text" name="externalreference" placeholder="Referencias Externas">
              <input type="text" name="viewswindows" placeholder="Vistas Pestañas">
              <input type="text" name="topwindows" placeholder="Principales Pestañas">
              <input type="text" name="topreference" placeholder="Principales Referencias">
              <input type="text" name="postsrc" placeholder="Post más efectivo">
              <input type="text" name="datespost" placeholder="Datos del post">
              <button class="btn waves-effect waves-light btn-login" type="submit">Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>`;

module.exports = landing(upform);

var yo = require('yo-yo');

module.exports = function(dato) {
  return yo`<div class="ano">
  <div id="fb${dato.year}" class="col m9 comparativo-ano tab-content-datos">
    <h4 style="padding-left:6px;">Año ${dato.year}</h4>
      <div class="cont-datos-anos">
        <div class="row">
          <div class="col m4 cont-ano-border">
            <div class="cont-info-ano cont-tortas">
              <div class="datos-tortas" style="margin-bottom:9px;">
                <h5><i class="fa fa-venus-mars" aria-hidden="true"></i>Género</h5>
                <div class="cont-labels">
                  <h5 class="color-mujer"><i class="fa fa-venus" aria-hidden="true"></i> Mujeres</h5>
                  <p class="color-mujer"><i class="fa fa-square" ></i> ${dato.genre.women}%</p>
                </div>
                 <div class="cont-labels">
                   <h5 class="color-hombre"><i class="fa fa-mars" aria-hidden="true"></i> Hombres</h5>
                   <p class="color-hombre"><i class="fa fa-square" ></i> ${dato.genre.men}% </p>
                 </div>
              </div>
              ${genechartgenre(dato)}
            </div>
          </div>
          <div class="col m4 cont-ano-border">
            <div class="cont-info-ano cont-tortas">
              <div class="datos-tortas">
                <h5><i class="fa fa-calendar" aria-hidden="true"></i>Edades Principales</h5>
                <p class="color-edadp"><i class="fa fa-square" ></i> 25 - 34 Años: ${dato.age.ppal}%</p>
                <p class="color-edads"><i class="fa fa-square" ></i> Otros: ${dato.age.others}% </p>
               </div>
               ${genechartage(dato)}
            </div>
          </div>
          <div class="col m4 cont-ano-border">
            <div class="cont-info-ano cont-tortas">
              <div class="datos-tortas">
                 <h5><i class="fa fa-language" aria-hidden="true"></i>Principales idiomas</h5>
                 <p class="color-idiomap"><i class="fa fa-square" ></i> Español: ${dato.language.ppal}%</p>
                 <p class="color-idiomas"><i class="fa fa-square" ></i> Otros: ${dato.language.others}%</p>
               </div>
               ${genechartlanguage(dato)}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col m6 cont-ano-border">
            <div class="cont-info-ano cont-tortas-h">
             <div class="datos-tortas">
               <h5><i class="fa fa-globe" aria-hidden="true"></i>Principales Países</h5>
               <p class="color-paisp"><i class="fa fa-square" ></i> Colombia: ${dato.country.ppal}%</p>
               <p class="color-paiss"><i class="fa fa-square" ></i> USA: ${dato.country.sec}%</p>
               <p class="color-paiso"><i class="fa fa-square" ></i> Otros: ${dato.country.others}%</p>

             </div>
             <div class="cont-canvas">
               ${genechartcountry(dato)}
             </div>
            </div>
          </div>
          <div class="col m6 cont-ano-border">
            <div class="cont-info-ano cont-tortas-h">
              <div class="datos-tortas">
                <h5><i class="fa fa-map-marker" aria-hidden="true"></i>Principales Ciudades</h5>
                <p class="color-ciudadp"><i class="fa fa-square" ></i> Medellín: ${dato.city.ppal}%</p>
                <p class="color-ciudads"><i class="fa fa-square" ></i> Bogotá: ${dato.city.sec}%</p>
                <p class="color-ciudado"><i class="fa fa-square" ></i> Otros: ${dato.city.others}%</p>
              </div>
               <div class="cont-canvas">
                 ${genechartcity(dato)}
               </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col m12 cont-ano-border" >
            <div class="cont-info-ano cont-total-fans-ano">
              <div class="cont-titulo">
                <i class="fa fa-users" aria-hidden="true"></i>
                <div class="con-der-titulo">
                  <h5 style="margin-bottom: 0;">Fans Totales</h5>
                  <p id="count-number" class="timer count-title" data-to="${dato.allfans.total}" data-speed="1500" style="color: rgb(59, 178, 115);"></p>
                </div>
              </div>
              ${genechartfantotal(dato)}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col m6 cont-ano-border">
            <div class="cont-info-ano">
              <div style="padding: 0 40px;">
                <h5 style="margin-bottom: 0;"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>Fans Nuevos</h5>
                <small>(Promedio por mes)</small>
                <p id="count-number" class="timer count-title" data-to="${dato.newfans.total}" data-speed="1500" style="color: rgb(59, 178, 115);"></p>
              </div>
              ${genechartfannew(dato)}
            </div>
          </div>
          <div class="col m6 cont-ano-border">
            <div class="cont-info-ano">
              <div style="padding: 0 40px;">
                <h5 style="margin-bottom: 0;"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i>No me Gusta</h5>
                <small>(Promedio por mes)</small>
                <p id="count-number" class="timer count-title" data-to="${dato.nolikes.total}" data-speed="1500" style="color: #f39237;"></p>
              </div>
              ${genechartnolikes(dato)}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col m6 cont-ano-border">
            <div class="cont-info-ano">
              <div style="padding: 0 40px;">
                <h5 style="margin-bottom: 0;"><i class="fa fa-exchange" aria-hidden="true"></i>Impresión</h5>
                <small>(Promedio por mes)</small>
                <p id="count-number" class="timer count-title" data-to="${dato.prints.total}" data-speed="1500" style="color: #e1bc29;"></p>
              </div>
              ${genechartprints(dato)}
            </div>
          </div>
          <div class="col m6 cont-ano-border">
            <div class="cont-info-ano">
              <div style="padding: 0 40px;">
                <h5 style="margin-bottom: 0;"><i class="fa fa-user" aria-hidden="true"></i>Usuarios Activos</h5>
                <small>(Promedio por mes)</small>
                <p id="count-number" class="timer count-title" data-to="${dato.activeusers.total}" data-speed="1500" style="color: rgb(83, 168, 195);">1913</p>
              </div>
              ${genechartactiveusers(dato)}
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>`;

  function genechartfantotal(dato){
    return yo`<div>
    <canvas id="datos${dato.year}ano" width="800" height="300"></canvas>
    <script>
      if('${dato.type}' == 'year'){
        function chartfantotal(){

            var LineChart = {
              labels: ["Septiembre", "Octubre", "Noviembre", "Diciembre"],
              datasets: [{
                fillColor: "rgba(83, 168, 195, 0.52)",
                strokeColor: "rgb(83, 168, 195)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                data: [${dato.allfans.months.septiembre}, ${dato.allfans.months.octubre}, ${dato.allfans.months.noviembre}, ${dato.allfans.months.diciembre}]
              }]
            }
          var ctx = document.getElementById("datos${dato.year}ano").getContext("2d");
          var myLineChart = new Chart(ctx).Line(LineChart, {scaleFontSize : 13, scaleFontColor : "#000000"});
        }
      }
      chartfantotal();
    </script>
  </div>`
  }

  function genechartfannew(dato){
    return yo`<div>
    <canvas id="newfans${dato.year}ano" width="420" height="300"></canvas>
    <script>
      if('${dato.type}' == 'year'){
        function chartfannew(){

            var BarChart = {
             labels: ["Septiembre", "Octubre", "Noviembre", "Diciembre"],
             datasets: [{
             fillColor: "rgba(59, 178, 115, 0.52)",
             strokeColor: "rgb(59, 178, 115)",
             data: [${dato.newfans.months.septiembre}, ${dato.newfans.months.octubre}, ${dato.newfans.months.noviembre}, ${dato.newfans.months.diciembre}]
             }]
            }
          var ctx = document.getElementById("newfans${dato.year}ano").getContext("2d");
          var myBarChart = new Chart(ctx).Bar(BarChart, {scaleFontSize : 13, scaleFontColor : "#000000"});
        }
      }
      chartfannew();
    </script>
  </div>`
  }

  function genechartnolikes(dato){
    return yo`<div>
    <canvas id="nolikes${dato.year}ano" width="420" height="300"></canvas>
    <script>
      if('${dato.type}' == 'year'){
        function chartnolikes(){

            var BarChart = {
             labels: ["Septiembre", "Octubre", "Noviembre", "Diciembre"],
             datasets: [{
             fillColor: "rgba(243, 146, 55, 0.52)",
             strokeColor: "rgb(243, 146, 55)",
             data: [${dato.nolikes.months.septiembre}, ${dato.nolikes.months.octubre}, ${dato.nolikes.months.noviembre}, ${dato.nolikes.months.diciembre}]
             }]
            }
          var ctx = document.getElementById("nolikes${dato.year}ano").getContext("2d");
          var myBarChart = new Chart(ctx).Bar(BarChart, {scaleFontSize : 13, scaleFontColor : "#000000"});
        }
      }
      chartnolikes();
    </script>
  </div>`
  }

  function genechartprints(dato){
    return yo`<div>
    <canvas id="impresion${dato.year}ano" width="420" height="300"></canvas>
    <script>
      if('${dato.type}' == 'year'){
        function chartprints(){
          var LineChart = {
           labels: ["Septiembre", "Octubre", "Noviembre", "Diciembre"],
           datasets: [{
           fillColor: "rgba(225, 188, 41, 0.52)",
           strokeColor: "rgb(225, 188, 41)",
           pointColor: "rgba(220,220,220,1)",
           pointStrokeColor: "#fff",
           data: [${dato.prints.months.septiembre}, ${dato.prints.months.octubre}, ${dato.prints.months.noviembre}, ${dato.prints.months.diciembre}]
           }]
          }

          var ctx = document.getElementById("impresion${dato.year}ano").getContext("2d");
          var myLineChart = new Chart(ctx).Line(LineChart, {scaleFontSize : 13, scaleFontColor : "#000000"});
        }
      }
      chartprints();
    </script>
  </div>`
  }

  function genechartactiveusers(dato){
    return yo`<div>
    <canvas id="usuariosact${dato.year}ano" width="420" height="300"></canvas>
    <script>
      if('${dato.type}' == 'year'){
        function chartactiveusers(){

          var LineChart = {
           labels: ["Septiembre", "Octubre", "Noviembre", "Diciembre"],
           datasets: [{
           fillColor: "rgba(83, 168, 195, 0.52)",
           strokeColor: "rgb(83, 168, 195)",
           pointColor: "rgba(220,220,220,1)",
           pointStrokeColor: "#fff",
           data: [${dato.activeusers.months.septiembre}, ${dato.activeusers.months.octubre}, ${dato.activeusers.months.noviembre}, ${dato.activeusers.months.diciembre}]
           }]
          }

          var ctx = document.getElementById("usuariosact${dato.year}ano").getContext("2d");
          var myLineChart = new Chart(ctx).Line(LineChart, {scaleFontSize : 13, scaleFontColor : "#000000"});
        }
      }
      chartactiveusers();
    </script>
  </div>`
  }

  function genechartgenre(dato){
    return yo`<div>
    <canvas id="genero${dato.year}" width="150" height="150"></canvas>
    <script>
      if('${dato.type}' == 'year'){
        function chartgenre(){
          var generoData = [
          				{
          					value: ${dato.genre.women},
          					color: "#F39237",
          					highlight: "rgba(243,146,55,0.8)",
          					label: "Mujeres"},
          				{
          					value: ${dato.genre.men},
          					color: "#53A8C3",
          					highlight: "rgba(83,168,195,0.80)",
          					label: "Hombres"
          				}
          			];

          var ctx = document.getElementById("genero${dato.year}").getContext("2d");
          window.myPie = new Chart(ctx).Pie(generoData);
        }
      }
      chartgenre();
    </script>
  </div>`
  }

  function genechartage(dato){
    return yo`<div>
    <canvas id="edad${dato.year}" width="150" height="150"></canvas>
    <script>
      if('${dato.type}' == 'year'){
        function chartage(){
          var edadData = [
          				{
          					value: ${dato.age.ppal},
          					color:"#53A8C3",
          					highlight: "rgba(83,168,195,0.80)",
          					label: "25 - 34 Años"},
          				{
          					value: ${dato.age.others},
          					color: "#3BB273",
          					highlight: "rgba(59,178,115,0.8)",
          					label: "Otros"
          				}
          			];

          var ctx = document.getElementById("edad${dato.year}").getContext("2d");
          window.myPie = new Chart(ctx).Pie(edadData);
        }
      }
      chartage();
    </script>
  </div>`
  }

  function genechartlanguage(dato){
    return yo`<div>
    <canvas id="idioma${dato.year}" width="150" height="150"></canvas>
    <script>
      if('${dato.type}' == 'year'){
        function chartlanguage(){
          var idiomaData = [
         				{
         					value: ${dato.language.ppal},
         					color:"#F39237",
         					highlight: "rgba(243,146,55,0.8)",
         					label: "Español"},
         				{
         					value: ${dato.language.others},
         					color: "#3BB273",
         					highlight: "rgba(59,178,115,0.8)",
         					label: "Otros"
         				}
         			];

          var ctx = document.getElementById("idioma${dato.year}").getContext("2d");
          window.myPie = new Chart(ctx).Pie(idiomaData);
        }
      }
      chartlanguage();
    </script>
  </div>`
  }

  function genechartcountry(dato){
    return yo`<div>
    <canvas id="pais${dato.year}" width="150" height="150"></canvas>
    <script>
      if('${dato.type}' == 'year'){
        function chartcountry(){
          var paisData = [
         				{
         					value: ${dato.country.ppal},
         					color:"#E1BC29",
         					highlight: "rgba(225,188,41,0.80)",
         					label: "Colombia"},
         				{
         					value: ${dato.country.sec},
         					color: "#53A8C3",
         					highlight: "rgba(83,168,195,0.80)",
         					label: "USA"},
         				{
         					value: ${dato.country.others},
         					color: "#3bb273",
         					highlight: "rgba(59,178,115,0.8)",
         					label: "Otros"
         				}
         			];

          var ctx = document.getElementById("pais${dato.year}").getContext("2d");
          window.myPie = new Chart(ctx).Pie(paisData);
        }
      }
      chartcountry();
    </script>
  </div>`
  }

  function genechartcity(dato){
    return yo`<div>
    <canvas id="ciudades${dato.year}" width="150" height="150"></canvas>
    <script>
      if('${dato.type}' == 'year'){
        function chartcity(){
          var ciudadesData = [
        				{
        					value: ${dato.city.ppal},
        					color:"#3BB273",
        					highlight: "rgba(59,178,115,0.8)",
        					label: "Medellín"},
        				{
        					value: ${dato.city.sec},
        					color:"#E1BC29",
        					highlight: "rgba(225,188,41,0.80)",
        					label: "Bogotá"},
        				{
        					value: ${dato.city.others},
        					color: "#53A8C3",
        					highlight: "rgba(83,168,195,0.80)",
        					label: "Otros"
        				}
        			];

          var ctx = document.getElementById("ciudades${dato.year}").getContext("2d");
          window.myPie = new Chart(ctx).Pie(ciudadesData);
        }
      }
      chartcity();
    </script>
  </div>`
  }
}

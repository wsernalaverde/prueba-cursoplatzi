'use strict'
var yo = require('yo-yo');
var layout = require('../layout');
var vistadato = require('../picture-card');
var vistaano = require('../datosano');
var menumonth = require('../menu-lateral-mes');
var menuano = require('../menu-lateral-ano');
var vistainst = require('../datosinst');
var vistatw = require('../datostwit');
var anoatc = [];
var anoatcinst = [];
var anoatctw = [];
var anomes;
var anomesins;
var anomestw;
var useract;
var contfb = 0;
var conttw = 0;
var contins = 0;
var mostrardatostw = 0;
var mostrardatosfb = 0;
var mostrardatosinst = 0;
var redesv = [];
var hay = 0;

module.exports = function (ctx, dates) {
  var el = yo`<div class="container timeline cont-estadisticas">
  <div id="top-menu" class="container">
      <div class="row">
        <ul class="tabs-menu-redes">
          <li class="current"><a href="#facebook"><i class="fa fa-facebook" aria-hidden="true"></i>Facebook</a></li>
          <li><a href="#instagram"><i class="fa fa-instagram" aria-hidden="true"></i>Instagram</a></li>
          <li><a href="#twitter"><i class="fa fa-twitter" aria-hidden="true"></i>Twitter</a></li>
        </ul>
      </div>
  </div>
  <div class="cont-redes">
    <div id="facebook" class="row tab-content-redes" style="display:block">
        ${dates.map(function (dato){
          if(dato.userId === ctx.auth.username){
            hay = buscardatosfb(ctx, dates, dato);
            if(hay === 1){
              hay = 0;
              ++mostrardatosfb
              if(mostrardatosfb === 1){
                return yo`<div><div class="col m3 cont-menu">
                  <div class="logo-cliente">
                    <img src="./assets/img/logo-ccbenv.png"  />
                  </div>
                  <ul class="tabs-menu-datos collapsible" data-collapsible="accordion">
                        ${dates.map(function (dato){
                          var index = anoatc.indexOf(dato.year);
                          if(index === -1 & dato.userId === ctx.auth.username & dato.red === 'fb'){
                          anoatc.push(dato.year);
                          anomes = dato.year;
                          return  yo`<li class="current">
                            <a class="menu-lateral btn-datos-ano" id='hideshow' href="#fb${dato.year}">${dato.year}</a>
                            <div class="collapsible-header">
                              <i class="fa fa-chevron-down rotate"  style="transition: all 2s linear;transform: rotate(0deg);float: right;font-size:12px;"></i>
                            </div>
                            <div class="collapsible-body">
                              <ul class="menumonths menu-lateral">
                                ${dates.map(function (dato){
                                  if(anomes === dato.year & dato.type === 'month' & dato.red === 'fb' & dato.userId === ctx.auth.username){
                                    return menumonth (dato);
                                  }
                                })}
                              </ul>
                            </div>
                          </li>`
                          }
                        })}
                  </ul>
                </div>
                <div class="cont-meses">
                  ${dates.map(function (dato){
                    if(dato.userId === ctx.auth.username & dato.red === 'fb'){
                      if(dato.type === 'year'  ){
                        return vistaano (dato);
                      }else{
                        return vistadato (dato);
                      }
                    }
                  })}
                </div></div>`
              }
            }
            else if (hay === 2){
              hay = 0;
              ++contfb
              if(contfb === 1){
                return yo`<h1 class="title-error"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>No existen datos</h1>`
              }
            }
          }
        })}

    </div>

    <div id="instagram" class="row tab-content-redes">
      ${dates.map(function (dato){
        if(dato.userId === ctx.auth.username){
          hay = buscardatosins(ctx, dates, dato);
          if(hay === 1){
            hay = 0;
            ++mostrardatosinst
            if(mostrardatosinst === 1){
              return yo`<div><div class="col m3 cont-menu">
                <div class="logo-cliente">
                  <img src="./assets/img/logo-ccbenv.png"  />
                </div>
                <ul class="tabs-menu-datos collapsible" data-collapsible="accordion">
                      ${dates.map(function (dato){
                        var index = anoatcinst.indexOf(dato.year);
                        if(index === -1 & dato.userId === ctx.auth.username & dato.red === 'inst' ){
                        anoatcinst.push(dato.year);
                        anomesins = dato.year;
                        return  yo`<li class="current">
                          <a class="menu-lateral btn-datos-ano" id='hideshow' href="#inst${dato.year}">${dato.year}</a>
                          <div class="collapsible-header">
                            <i class="fa fa-chevron-down rotate"  style="transition: all 2s linear;transform: rotate(0deg);float: right;font-size:12px;"></i>
                          </div>
                          <div class="collapsible-body">
                            <ul class="menumonths menu-lateral">
                              ${dates.map(function (dato){
                                if(anomesins === dato.year & dato.type === 'month' & dato.red === 'inst' &  dato.userId === ctx.auth.username){
                                  return menumonth (dato);
                                }
                              })}
                            </ul>
                          </div>
                        </li>`
                        }
                      })}
                </ul>
              </div>
              <div class="cont-meses">
                ${dates.map(function (dato){
                  if(dato.userId === ctx.auth.username & dato.red === 'inst'){
                      return vistainst (dato);
                  }
                })}
              </div></div>`
            }
          }
          else if (hay === 2){
            hay = 0;
            ++contins
            if(contins === 1){
              return yo`<h1 class="title-error"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>No existen datos</h1>`
            }
          }
        }
      })}

    </div>
    <div id="twitter" class="row tab-content-redes">
        ${dates.map(function (dato){
          if(dato.userId === ctx.auth.username){
            hay = buscardatostw(ctx, dates, dato);
            if(hay === 1){
              hay = 0;
              ++mostrardatostw
              if(mostrardatostw === 1){
                return yo`<div><div class="col m3 cont-menu">
                  <div class="logo-cliente">
                    <img src="./assets/img/logo-ccbenv.png"  />
                  </div>
                  <ul class="tabs-menu-datos collapsible" data-collapsible="accordion">
                        ${dates.map(function (dato){
                          var index = anoatctw.indexOf(dato.year);
                          if(index === -1 & dato.userId === ctx.auth.username & dato.red === 'tw'){
                          anoatctw.push(dato.year);
                          anomestw = dato.year;
                          return  yo`<li class="current">
                            <a class="menu-lateral btn-datos-ano" id='hideshow' href="#tw${dato.year}">${dato.year}</a>
                            <div class="collapsible-header">
                              <i class="fa fa-chevron-down rotate"  style="transition: all 2s linear;transform: rotate(0deg);float: right;font-size:12px;"></i>
                            </div>
                            <div class="collapsible-body">
                              <ul class="menumonths menu-lateral">
                                ${dates.map(function (dato){
                                  if(anomestw === dato.year & dato.type === 'month' & dato.red === 'tw' &  dato.userId === ctx.auth.username){
                                    return menumonth (dato);
                                  }
                                })}
                              </ul>
                            </div>
                          </li>`
                          }
                        })}
                  </ul>
                </div>
                <div class="cont-meses">
                  ${dates.map(function (dato){
                    if(dato.red === 'tw' & dato.userId === ctx.auth.username){
                        return vistatw (dato);
                    }

                  })}
                </div></div>`
              }
            }
            else if (hay === 2){
              hay = 0;
              ++conttw
              if(conttw === 1){
                return yo`<h1 class="title-error"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>No existen datos</h1>`
              }
            }
          }
        })}
    </div>

  </div>
  </div>`;

  return layout(el);
}

function buscardatostw(ctx, dates, dato){
  dates.map(function (dato){
    if(dato.userId === ctx.auth.username){
      redesv.push(dato.red);
    }
  })
  var index1 = redesv.indexOf('tw');
  console.log (redesv);
  console.log (index1);
  redesv.length = 0;
  if(index1 === -1) {
    return 2;
  }else{
    return 1;
  }
}

function buscardatosins(ctx, dates, dato){
  dates.map(function (dato){
    if(dato.userId === ctx.auth.username){
      redesv.push(dato.red);
    }
  })
  var index1 = redesv.indexOf('inst');
  console.log (redesv);
  console.log (index1);
  redesv.length = 0;
  if(index1 === -1) {
    return 2;
  }else{
    return 1;
  }
}

function buscardatosfb(ctx, dates, dato){
  dates.map(function (dato){
    if(dato.userId === ctx.auth.username){
      redesv.push(dato.red);
    }
  })
  var index1 = redesv.indexOf('fb');
  console.log (redesv);
  console.log (index1);
  redesv.length = 0;
  if(index1 === -1) {
    return 2;
  }else{
    return 1;
  }
}

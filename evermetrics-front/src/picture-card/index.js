var yo = require('yo-yo');

module.exports = function(dato) {
  return yo`<div class="estadisticas">
       <div id="fb${dato.year}${dato.month}" class="col m9 cont-datos tab-content-datos">
         <h4 class="title-mes">${dato.month}</h4>
         <h4>Crecimiento</h4>
             <div class="row">
               <div class="col m4 cont-variables">
                 <h5>Fans Totales</h5>
                 <p id="count-number" class="timer count-title" data-to="${dato.allfans || 0}" data-speed="1500"></p>
               </div>
               <div class="col m4 cont-variables">
                 <h5>Fans Nuevos</h5>
                 <p id="count-number" class="timer count-title" data-to="${dato.newfans || 0}" data-speed="1500"></p>
               </div>
               <div class="col m4 cont-variables">
                 <h5>No me Gusta</h5>
                 <p id="count-number" class="timer count-title" data-to="${dato.nolikes || 0}" data-speed="1500"></p>
               </div>
             </div>
             <div class="row">
               <div class="col m4 cont-variables">
                 <h5>Impresión</h5>
                 <p id="count-number" class="timer count-title" data-to="${dato.prints || 0}" data-speed="1500"></p>
               </div>
               <div class="col m4 cont-variables">
                 <h5>Usuarios Activos</h5>
                 <p id="count-number" class="timer count-title" data-to="${dato.activeusers || 0}" data-speed="1500"></p>
               </div>
               <div class="col m4 cont-variables">
                 <h5>Me Gusta (promedio x día)</h5>
                 <p id="count-number" class="timer count-title" data-to="${dato.likebyday || 0}" data-speed="1500"></p>
               </div>
             </div>
             <div class="row">
               <div class="col m6 cont-variables">
                 <h5>Post en el mes</h5>
                 <p id="count-number" class="timer count-title" data-to="${dato.postbymonth || 0}" data-speed="1500"></p>
               </div>
               <div class="col m6 cont-variables">
                 <h5>Alcance (promedio por día)</h5>
                 <p id="count-number" class="timer count-title" data-to="${dato.scopebyday || 0}" data-speed="1500"></p>
               </div>
             </div>

         <h4>Interacción</h4>
           <div class="row">
             <div class="col m6 cont-variables">
               <h5>Referencias Externas</h5>
               <p id="count-number" class="timer count-title" data-to="${dato.externalreference || 0}" data-speed="1500"></p>
             </div>
             <div class="col m6 cont-variables">
               <h5>Vistas Pestañas</h5>
               <p id="count-number" class="timer count-title" data-to="${dato.viewswindows || 0}" data-speed="1500"></p>
             </div>
           </div>
           <div class="row">
             <div class="col m6 cont-variables">
               <h5>Principales Pestañas</h5>
               <p>${dato.topwindows || 0}</p>
             </div>
             <div class="col m6 cont-variables">
               <h5>Principales Referencias</h5>
               <p>${dato.topreference || 0}</p>
             </div>
           </div>
         <h4>Contenido</h4>
           <div class="row">
               <div class="col m6 cont-variables">
                 <h5>Post más efectivo</h5>
                 <img src="${dato.postsrc}" style="width:100%" />
               </div>
               <div class="col m6 cont-variables">
                 <h5>Datos del post</h5>
                 <p>${dato.datespost}</p>
               </div>
           </div>
       </div>
  </div>`;
}

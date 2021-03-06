var miApp = angular.module('motiApp', [] );

	miApp.controller('datosRecha', function($scope){
		$scope.motivos = [{"causa":"Cuenta Embargada","codigo":"R01","entidad":"GIRADA","segundapres":"NO","motivopropio":44},
{"causa":"Cuenta cerrada por orden judicial","codigo":"R02","entidad":"GIRADA","segundapres":"NO","motivopropio":1},
{"causa":"Cuenta inexistente","codigo":"R03","entidad":"GIRADA","segundapres":"NO","motivopropio":37},
{"causa":"Numero de cuenta invalido","codigo":"R04","entidad":"GIRADA","segundapres":"NO","motivopropio":37},
{"causa":"DEFECTOS FORMALES - Difiere la firma del librador con la asentada en los registros","codigo":"R06","entidad":"GIRADA","segundapres":"NO","motivopropio":48},
{"causa":"DEFECTOS FORMALES - Firmante sin poder válido o vigente","codigo":"R06","entidad":"GIRADA","segundapres":"NO","motivopropio":48},
{"causa":"DEFECTOS FORMALES - Contrato social vencido","codigo":"R06","entidad":"GIRADA","segundapres":"NO","motivopropio":48},
{"causa":"DEFECTOS FORMALES - Falta de firmas adicionales","codigo":"R06","entidad":"GIRADA","segundapres":"NO","motivopropio":48},
{"causa":"DEFECTOS FORMALES - Firmante inhabilitado","codigo":"R06","entidad":"GIRADA","segundapres":"NO","motivopropio":48},
{"causa":"DEFECTOS FORMALES - Giro sobre el librador","codigo":"R06","entidad":"GIRADA","segundapres":"NO","motivopropio":48},
{"causa":"ORDEN DE NO PAGAR - Denuncia de extravio o sustraccion","codigo":"R08","entidad":"GIRADA","segundapres":"NO","motivopropio":49},
{"causa":"Feriado local","codigo":"R09","entidad":"CAMARA","segundapres":"SI","motivopropio":30},
{"causa":"Sin fondos suficientes disponibles","codigo":"R10","entidad":"GIRADA","segundapres":"NO","motivopropio":2},
{"causa":"Contener endosos que excedan el limite establecido","codigo":"R11","entidad":"Con imagen: DEP / GIR | Sin imagen: GIRADA","segundapres":"NO","motivopropio":23},
{"causa":"Sucursal / Entidad destino inexistente","codigo":"R13","entidad":"GIRADA","segundapres":"NO","motivopropio":37},
{"causa":"NO ES CHEQUE - Falta la denominacion ","codigo":"R16","entidad":"DEPOSITARIA","segundapres":"NO","motivopropio":39},
{"causa":"NO ES CHEQUE - Falta la fecha de creacion","codigo":"R16","entidad":"Con imagen: DEP / GIR | Sin imagen: GIRADA","segundapres":"NO","motivopropio":39},
{"causa":"NO ES CHEQUE - Falta la fecha de pago","codigo":"R16","entidad":"Con imagen: DEP / GIR | Sin imagen: GIRADA","segundapres":"NO","motivopropio":39},
{"causa":"NO ES CHEQUE - Falta la firma del librador","codigo":"R16","entidad":"Con imagen: DEP / GIR | Sin imagen: GIRADA","segundapres":"NO","motivopropio":39},
{"causa":"NO ES CHEQUE - Existencia de tachaduras o enmiendas no salvadas","codigo":"R16","entidad":"DEPOSITARIA","segundapres":"NO","motivopropio":39},
{"causa":"Error de formato","codigo":"R17","entidad":"CAMARA","segundapres":"NO","motivopropio":37},
{"causa":"Fecha de compensacion erronea","codigo":"R18","entidad":"CAMARA","segundapres":"NO","motivopropio":37},
{"causa":"Importe erroneo","codigo":"R19","entidad":"GIRADA","segundapres":"NO","motivopropio":56},
{"causa":"Concurso preventivo","codigo":"R21","entidad":"GIRADA","segundapres":"NO","motivopropio":50},
{"causa":"Transaccion duplicada","codigo":"R24","entidad":"GIRADA","segundapres":"NO","motivopropio":37},
{"causa":"Erron en registro adicional","codigo":"R25","entidad":"CAMARA","segundapres":"NO","motivopropio":37},
{"causa":"Error por campo mandatario","codigo":"R26","entidad":"CAMARA","segundapres":"NO","motivopropio":37},
{"causa":"Error en contador de registro","codigo":"R27","entidad":"CAMARA","segundapres":"NO","motivopropio":37},
{"causa":"Reversion ya efectuada","codigo":"R29","entidad":"CAMARA","segundapres":"NO","motivopropio":37},
{"causa":"Vuelta atrás de camara ","codigo":"R31","entidad":"CAMARA","segundapres":"NO","motivopropio":37},
{"causa":"Cheque falsificado","codigo":"R33","entidad":"DEPOSITARIA","segundapres":"NO","motivopropio":51},
{"causa":"Situaciones de emergencia","codigo":"R34","entidad":"GIRADA","segundapres":"SI","motivopropio":36},
{"causa":"Falta de conformidad en la recepcion de cuadernos de cheques","codigo":"R35","entidad":"GIRADA","segundapres":"NO","motivopropio":22},
{"causa":"Cheque adulterado","codigo":"R36","entidad":"DEPOSITARIA","segundapres":"NO","motivopropio":52},
{"causa":"Cheque vencido","codigo":"R37","entidad":"Con imagen: DEP / GIR | Sin imagen: DEP","segundapres":"NO","motivopropio":33},
{"causa":"Difiere firma librador con salvado","codigo":"R38","entidad":"Con imagen: DEP / GIR | Sin imagen: DEP","segundapres":"NO","motivopropio":6},
{"causa":"Importe no coincide con el registrado por el banco girado","codigo":"R39","entidad":"GIRADA","segundapres":"SI","motivopropio":37},
{"causa":"Chequera extraviada no entregada al cliente","codigo":"R44","entidad":"GIRADA","segundapres":"NO","motivopropio":54},
{"causa":"Diseño no compensable","codigo":"R46","entidad":"Con imagen: DEP / GIR | Sin imagen: DEP","segundapres":"NO","motivopropio":58},
{"causa":"No corresponde segunda presentacion","codigo":"R47","entidad":"DEP / GIR","segundapres":"NO","motivopropio":37},
{"causa":"Imagen ilegible","codigo":"R48","entidad":"GIRADA","segundapres":"SI","motivopropio":37},
{"causa":"Falta endoso","codigo":"R49","entidad":"Con imagen: DEP / GIR | Sin imagen: DEP","segundapres":"SI","motivopropio":12},
{"causa":"Error de fecha","codigo":"R75","entidad":"CAMARA","segundapres":"NO","motivopropio":37},
{"causa":"Error en campo 11 (codigo de origen)","codigo":"R76","entidad":"CAMARA","segundapres":"NO","motivopropio":37},
{"causa":"Error en campo 4 (reservado)","codigo":"R77","entidad":"CAMARA","segundapres":"NO","motivopropio":37},
{"causa":"Error en campo 5 (cuenta a debitar)","codigo":"R78","entidad":"CAMARA","segundapres":"NO","motivopropio":37},
{"causa":"Error en campo 7 (numero de cheque)","codigo":"R79","entidad":"GIR / CAMARA","segundapres":"NO","motivopropio":37},
{"causa":"Error en campo 3 (1º motivo de rechazo)","codigo":"R80","entidad":"CAMARA","segundapres":"NO","motivopropio":37},
{"causa":"Fuerza mayor","codigo":"R81","entidad":"GIRADA","segundapres":"SI","motivopropio":31},
{"causa":"Imagen faltante","codigo":"R82","entidad":"GIRADA","segundapres":"SI","motivopropio":37},
{"causa":"Irregularidad en la cadena de endoso","codigo":"R83","entidad":"Con imagen: DEP / GIR | Sin imagen: DEP","segundapres":"NO","motivopropio":14},
{"causa":"Moneda invalida","codigo":"R87","entidad":"CAMARA","segundapres":"NO","motivopropio":37},
{"causa":"Error en campo 2 (codigo trx)","codigo":"R88","entidad":"CAMARA","segundapres":"NO","motivopropio":37},
{"causa":"TRX no correponde por no exisitr TRX original","codigo":"R90","entidad":"CAMARA","segundapres":"NO","motivopropio":37},
{"causa":"Numero maximo de ordenes de diferimiento excedido","codigo":"R92","entidad":"CAMARA","segundapres":"NO","motivopropio":37},
{"causa":"Feriado local aplicado por las entidades","codigo":"R93","entidad":"GIRADA","segundapres":"SI","motivopropio":9},
{"causa":"Codigo postal erroneo","codigo":"R94","entidad":"GIRADA","segundapres":"NO","motivopropio":37},
{"causa":"Error depositaria","codigo":"R96","entidad":"Con imagen: DEP / GIR | Sin imagen: GIRADA","segundapres":"SI","motivopropio":37},
{"causa":"Fecha adelantada","codigo":"R97","entidad":"DEP / GIR","segundapres":"SI","motivopropio":46}];
})
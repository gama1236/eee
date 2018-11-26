ol.proj.get("EPSG:4326").setExtent([1048671.378372, 855936.084347, 1068630.463666, 879441.455873]);
var wms_layers = [];
var format_idescmc_comunas_0 = new ol.format.GeoJSON();
var features_idescmc_comunas_0 = format_idescmc_comunas_0.readFeatures(json_idescmc_comunas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_idescmc_comunas_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_idescmc_comunas_0.addFeatures(features_idescmc_comunas_0);var lyr_idescmc_comunas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_idescmc_comunas_0, 
                style: style_idescmc_comunas_0,
    title: 'idesc:mc_comunas<br />\
    <img src="styles/legend/idescmc_comunas_0_0.png" /> Comuna 1<br />\
    <img src="styles/legend/idescmc_comunas_0_1.png" /> Comuna 10<br />\
    <img src="styles/legend/idescmc_comunas_0_2.png" /> Comuna 11<br />\
    <img src="styles/legend/idescmc_comunas_0_3.png" /> Comuna 12<br />\
    <img src="styles/legend/idescmc_comunas_0_4.png" /> Comuna 13<br />\
    <img src="styles/legend/idescmc_comunas_0_5.png" /> Comuna 14<br />\
    <img src="styles/legend/idescmc_comunas_0_6.png" /> Comuna 15<br />\
    <img src="styles/legend/idescmc_comunas_0_7.png" /> Comuna 16<br />\
    <img src="styles/legend/idescmc_comunas_0_8.png" /> Comuna 17<br />\
    <img src="styles/legend/idescmc_comunas_0_9.png" /> Comuna 18<br />\
    <img src="styles/legend/idescmc_comunas_0_10.png" /> Comuna 19<br />\
    <img src="styles/legend/idescmc_comunas_0_11.png" /> Comuna 2<br />\
    <img src="styles/legend/idescmc_comunas_0_12.png" /> Comuna 20<br />\
    <img src="styles/legend/idescmc_comunas_0_13.png" /> Comuna 21<br />\
    <img src="styles/legend/idescmc_comunas_0_14.png" /> Comuna 22<br />\
    <img src="styles/legend/idescmc_comunas_0_15.png" /> Comuna 3<br />\
    <img src="styles/legend/idescmc_comunas_0_16.png" /> Comuna 4<br />\
    <img src="styles/legend/idescmc_comunas_0_17.png" /> Comuna 5<br />\
    <img src="styles/legend/idescmc_comunas_0_18.png" /> Comuna 6<br />\
    <img src="styles/legend/idescmc_comunas_0_19.png" /> Comuna 7<br />\
    <img src="styles/legend/idescmc_comunas_0_20.png" /> Comuna 8<br />\
    <img src="styles/legend/idescmc_comunas_0_21.png" /> Comuna 9<br />\
    <img src="styles/legend/idescmc_comunas_0_22.png" /> <br />'
        });var format_idescmc_cuadrantes_mecal_1 = new ol.format.GeoJSON();
var features_idescmc_cuadrantes_mecal_1 = format_idescmc_cuadrantes_mecal_1.readFeatures(json_idescmc_cuadrantes_mecal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_idescmc_cuadrantes_mecal_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_idescmc_cuadrantes_mecal_1.addFeatures(features_idescmc_cuadrantes_mecal_1);var lyr_idescmc_cuadrantes_mecal_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_idescmc_cuadrantes_mecal_1, 
                style: style_idescmc_cuadrantes_mecal_1,
    title: 'idesc:mc_cuadrantes_mecal<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_0.png" /> CAI  ALFONSO BONILLA  ARAGON<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_1.png" /> CAI  AMBIENTAL<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_2.png" /> CAI BELLA VISTA<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_3.png" /> CAI BOTANICO<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_4.png" /> CAI CHARCO AZUL<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_5.png" /> CAI CHIPICHAPE<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_6.png" /> CAI CORTIJO<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_7.png" /> CAI CRISTO REY<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_8.png" /> CAI GALERIAS<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_9.png" /> CAI LA MERCED<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_10.png" /> CAI LOMA DE LA CRUZ<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_11.png" /> CAI MANUELA BELTRAN<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_12.png" /> CAI METROPOLITANO<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_13.png" /> CAI MOJICA<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_14.png" /> CAI NAPOLES<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_15.png" /> CAI OBRERO<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_16.png" /> CAI PANAMERICANO<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_17.png" /> CAI PASO DEL COMERCIO<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_18.png" /> CAI PETAR<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_19.png" /> CAI PIZAMOS<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_20.png" /> CAI PLAZA NORTE<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_21.png" /> CAI PONDAJE<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_22.png" /> CAI POTRERO GRANDE<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_23.png" /> CAI PUERTAS DEL SOL<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_24.png" /> CAI SALOMIA<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_25.png" /> CAI SAN ANTONIO<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_26.png" /> CAI SAN MARINO<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_27.png" /> CAI SAN NICOLAS<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_28.png" /> CAI VALLE DEL LILI<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_29.png" /> CAI VILLA DEL SUR<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_30.png" /> ESTACION GUABAL<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_31.png" /> ESTACION MUNICIPAL<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_32.png" /> ESTACION NUEVA FLORESTA<br />\
    <img src="styles/legend/idescmc_cuadrantes_mecal_1_33.png" /> ESTACION SAN FRANCISCO<br />'
        });var format_pot_2014eqp_uco_salud_2 = new ol.format.GeoJSON();
var jsonSource_pot_2014eqp_uco_salud_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
    format: format_pot_2014eqp_uco_salud_2
});var lyr_pot_2014eqp_uco_salud_2 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_pot_2014eqp_uco_salud_2, 
    style: style_pot_2014eqp_uco_salud_2,
    title: "pot_2014:eqp_uco_salud"
});

function getpot_2014eqp_uco_salud_2Json(geojson) {
    var features_pot_2014eqp_uco_salud_2 = format_pot_2014eqp_uco_salud_2.readFeatures(geojson);
    jsonSource_pot_2014eqp_uco_salud_2.addFeatures(features_pot_2014eqp_uco_salud_2);
}

lyr_idescmc_comunas_0.setVisible(true);lyr_idescmc_cuadrantes_mecal_1.setVisible(true);lyr_pot_2014eqp_uco_salud_2.setVisible(true);
var layersList = [lyr_idescmc_comunas_0,lyr_idescmc_cuadrantes_mecal_1,lyr_pot_2014eqp_uco_salud_2];
lyr_idescmc_comunas_0.set('fieldAliases', {'comuna': 'comuna', 'nombre': 'nombre', 'zona_recol': 'zona_recol', 'area': 'area', 'perimetro': 'perimetro', });
lyr_idescmc_cuadrantes_mecal_1.set('fieldAliases', {'id': 'id', 'cuadrante': 'cuadrante', 'no_cuadra': 'no_cuadra', 'estacion': 'estacion', 'cai': 'cai', 'id_distrit': 'id_distrit', 'distrito': 'distrito', 'telefono': 'telefono', 'municipio': 'municipio', });
lyr_pot_2014eqp_uco_salud_2.set('fieldAliases', {'nombre': 'nombre', 'localizaci': 'localizaci', 'servicio': 'servicio', 'nivel': 'nivel', 'propiedad': 'propiedad', 'tipos_de_e': 'tipos_de_e', 'categoria': 'categoria', 'escala': 'escala', 'permanenci': 'permanenci', 'estruc_eco': 'estruc_eco', });
lyr_idescmc_comunas_0.set('fieldImages', {'comuna': 'TextEdit', 'nombre': 'TextEdit', 'zona_recol': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', });
lyr_idescmc_cuadrantes_mecal_1.set('fieldImages', {'id': 'TextEdit', 'cuadrante': 'TextEdit', 'no_cuadra': 'TextEdit', 'estacion': 'TextEdit', 'cai': 'TextEdit', 'id_distrit': 'TextEdit', 'distrito': 'TextEdit', 'telefono': 'TextEdit', 'municipio': 'TextEdit', });
lyr_pot_2014eqp_uco_salud_2.set('fieldImages', {'nombre': 'TextEdit', 'localizaci': 'TextEdit', 'servicio': 'TextEdit', 'nivel': 'TextEdit', 'propiedad': 'TextEdit', 'tipos_de_e': 'TextEdit', 'categoria': 'TextEdit', 'escala': 'TextEdit', 'permanenci': 'TextEdit', 'estruc_eco': 'TextEdit', });
lyr_idescmc_comunas_0.set('fieldLabels', {'comuna': 'header label', 'nombre': 'no label', 'zona_recol': 'no label', 'area': 'no label', 'perimetro': 'no label', });
lyr_idescmc_cuadrantes_mecal_1.set('fieldLabels', {'id': 'no label', 'cuadrante': 'no label', 'no_cuadra': 'no label', 'estacion': 'no label', 'cai': 'no label', 'id_distrit': 'no label', 'distrito': 'no label', 'telefono': 'no label', 'municipio': 'no label', });
lyr_pot_2014eqp_uco_salud_2.set('fieldLabels', {'nombre': 'no label', 'localizaci': 'no label', 'servicio': 'no label', 'nivel': 'no label', 'propiedad': 'no label', 'tipos_de_e': 'no label', 'categoria': 'no label', 'escala': 'no label', 'permanenci': 'no label', 'estruc_eco': 'no label', });
lyr_pot_2014eqp_uco_salud_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
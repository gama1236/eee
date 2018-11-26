ol.proj.get("EPSG:4326").setExtent([1031194.544535, 854921.327327, 1091938.324714, 889649.466446]);
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
        });

lyr_idescmc_comunas_0.setVisible(true);
var layersList = [lyr_idescmc_comunas_0];
lyr_idescmc_comunas_0.set('fieldAliases', {'comuna': 'comuna', 'nombre': 'nombre', 'zona_recol': 'zona_recol', 'area': 'area', 'perimetro': 'perimetro', });
lyr_idescmc_comunas_0.set('fieldImages', {'comuna': 'TextEdit', 'nombre': 'TextEdit', 'zona_recol': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', });
lyr_idescmc_comunas_0.set('fieldLabels', {'comuna': 'header label', 'nombre': 'no label', 'zona_recol': 'no label', 'area': 'no label', 'perimetro': 'no label', });
lyr_idescmc_comunas_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-10.988220, 4.191392, 0.198684, 10.884966]);
var wms_layers = [];


        var lyr_Sentinel2cloudless2021byEOX_0 = new ol.layer.Tile({
            'title': 'Sentinel-2 cloudless 2021 by EOX',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://s2maps-tiles.eu/wmts?layer=s2cloudless-2021_3857&style=default&tilematrixset=GoogleMapsCompatible&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/jpeg&TileMatrix={z}&TileCol={x}&TileRow={y}'
            })
        });
var format_Rgionsadministratives_1 = new ol.format.GeoJSON();
var features_Rgionsadministratives_1 = format_Rgionsadministratives_1.readFeatures(json_Rgionsadministratives_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rgionsadministratives_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rgionsadministratives_1.addFeatures(features_Rgionsadministratives_1);
var lyr_Rgionsadministratives_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rgionsadministratives_1, 
                style: style_Rgionsadministratives_1,
                interactive: true,
                title: '<img src="styles/legend/Rgionsadministratives_1.png" /> Régions administratives'
            });

lyr_Sentinel2cloudless2021byEOX_0.setVisible(true);lyr_Rgionsadministratives_1.setVisible(true);
var layersList = [lyr_Sentinel2cloudless2021byEOX_0,lyr_Rgionsadministratives_1];
lyr_Rgionsadministratives_1.set('fieldAliases', {'NOM': 'NOM', });
lyr_Rgionsadministratives_1.set('fieldImages', {'NOM': 'TextEdit', });
lyr_Rgionsadministratives_1.set('fieldLabels', {'NOM': 'no label', });
lyr_Rgionsadministratives_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
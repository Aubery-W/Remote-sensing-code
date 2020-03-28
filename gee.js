var sat3 = 
    /* color: #98ff00 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry({
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Point",
          "coordinates": [
            61.0400390625,
            45.874712248904764
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            109.951171875,
            22.187404991398775
          ]
        },
        {
          "type": "Polygon",
          "coordinates": [
            [
              [
                89.14756765842526,
                31.388025743824937
              ],
              [
                89.14756765842526,
                28.870326768038414
              ],
              [
                92.14683523655026,
                28.870326768038414
              ],
              [
                92.14683523655026,
                31.388025743824937
              ]
            ]
          ],
          "geodesic": false,
          "evenOdd": true
        }
      ],
      "coordinates": []
    }),
    sat4 = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.Geometry.Point([90.59326171875, 30.637912028341127]),
    imageVisParam = {"opacity":1,"bands":["LST"],"min":210,"max":320,"palette":["ffffff","27f9f9","1bdfcc","2f9d8d","2f5a5a","1ba585","06a91a","0ca099","529400","3e8601","207401","056201","004c00","023b01","012e01","011d01","011301"]},
    imageVis2 = {"opacity":1,"bands":["LST"],"min":210,"max":320,"palette":["ffffff","ce7e45","df923d","f1b555","fcd163","c9ff8f","7fff6f","8fffd5","77dfff","5691ff","347cff","3242ff"]},
    PWVS = ee.ImageCollection("users/wangxian/pwvs_2018"),
    imageVis = {"opacity":1,"bands":["LST"],"min":320,"max":210,"palette":["ffffff","ce7e45","df923d","f1b555","fcd163","c9ff8f","7fff6f","8fffd5","77dfff","5691ff","347cff","3242ff"]},
    S = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Geometry({
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Polygon",
          "coordinates": [
            [
              [
                88.61369038811824,
                29.22781138454456
              ],
              [
                92.81395900754421,
                29.237408576444377
              ],
              [
                92.84710551790852,
                31.41073216909307
              ],
              [
                88.65751509656786,
                31.40134900284497
              ]
            ]
          ],
          "geodesic": true,
          "evenOdd": true
        },
        {
          "type": "Point",
          "coordinates": [
            61.314697265625,
            48.334343174592014
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            118.7841796875,
            21.022982546427425
          ]
        }
      ],
      "coordinates": []
    }),
    NamCo = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([90.9885, 30.775]),
    D105 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Geometry.Point([91.94256, 33.06429]),
    D105PWV = ee.ImageCollection("users/wangxian/D105"),
    D10504P = ee.ImageCollection("users/wangxian/D10504"),
    AreaA = 
    /* color: #ffc82d */
    /* shown: false */
    ee.Geometry.MultiPoint(),
    NDVILANDS = ee.ImageCollection("LANDSAT/LE7_L1T_8DAY_NDVI"),
    MODISN2 = ee.ImageCollection("MODIS/MOD09GA_NDVI"),
    MODISN = ee.ImageCollection("MODIS/MOD13A1"),
    MODISY = ee.ImageCollection("MODIS/MYD13A1"),
    MODIS_LST = ee.ImageCollection("MODIS/006/MOD11A1"),
    LAND5 = ee.ImageCollection("LANDSAT/LT05/C01/T1"),
    D66 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([93.78454, 35.52353]),
    MS3478 = /* color: #0b4a8b */ee.Geometry.Point([91.716, 31.926]),
    MS3608 = 
    /* color: #ffc82d */
    /* shown: false */
    ee.Geometry.Point([91.78128, 31.22623]),
    LINZI = 
    /* color: #00ffff */
    /* shown: false */
    ee.Geometry.Point([94.7384, 29.7645]),
    BJ = 
    /* color: #bf04c2 */
    /* shown: false */
    ee.Geometry.Point([91.89871, 31.36859]),
    imageVisParam2 = {"opacity":1,"bands":["NDVI"],"min":-0.7029703259468079,"max":0.7859674096107483,"palette":["fdf8bc","e8f799","b4dc67","56b445","029321"]},
    imageVisParam3 = {"opacity":1,"bands":["Emis_31"],"gamma":1},
    imageVisParam4 = {"opacity":1,"bands":["NDVI"],"min":-0.8858447670936584,"max":0.909018337726593,"gamma":1},
    QOMO = 
    /* color: #0000ff */
    /* shown: false */
    ee.Geometry.Point([86.9464, 28.3581]),
    testp = 
    /* color: #999900 */
    /* shown: false */
    ee.Geometry.Point([87.08690643310547, 28.339136680874102]),
    areal = 
    /* color: #ff00ff */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[87.05720901489258, 28.360437999079746],
          [87.05738067626953, 28.319644498673835],
          [87.12587356567383, 28.319040032783395],
          [87.12553024291992, 28.360286940947287]]]),
    sarea = 
    /* color: #9999ff */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[89.3165731016029, 29.243899011639673],
          [91.82524540007756, 29.243899011639673],
          [91.82524540007756, 31.37175395757523],
          [89.3165731016029, 31.37175395757523]]]),
    geometry2 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.MultiPoint(),
    geometry3 = 
    /* color: #3b58ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[88.96080008030026, 31.491133480279355],
          [88.96080008030026, 28.937651157977548],
          [92.25669851780026, 28.937651157977548],
          [92.25669851780026, 31.491133480279355]]], null, false),
    geometry4 = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.MultiPolygon(
        [[[[89.89629122441534, 31.93759885527613],
           [89.89629122441534, 29.644501026809632],
           [92.95049044316534, 29.644501026809632],
           [92.95049044316534, 31.93759885527613]]],
         [[[91.85185763066534, 32.671173915403955],
           [91.85185763066534, 32.63417386490176],
           [92.01665255254034, 32.63417386490176],
           [92.01665255254034, 32.671173915403955]]]], null, false),
    geometry5 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Geometry.MultiPoint(),
    geometry6 = 
    /* color: #0b4a8b */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[89.7287974110004, 32.719666878744896],
          [89.7287974110004, 30.77660448991674],
          [92.2281870594379, 30.77660448991674],
          [92.2281870594379, 32.719666878744896]]], null, false),
    imageCollection = ee.ImageCollection("LANDSAT/LE07/C01/T1"),
    D105SS = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([91.43167827037536, 33.60256725971414]),
    PWVSD105 = ee.ImageCollection("users/wangxian/D10504");
    yrthdfhvar fld = 'Namco'
var area = geometry3
var geometry = MS3478
var geometryS = MS3478
var wd = PWVSD105
var w = wd.filterDate("2008-01-01","2009-01-01")
var images = ee.ImageCollection("LANDSAT/LE07/C01/T1_SR").filterDate("2008-01-01","2009-01-01").filterBounds(geometry)
// 这里只选取了十副影像并设置了日期为属性
var qualityF = ee.Filter.lte("CLOUD_COVER",4)

images = images.filter(qualityF)
  .map(function(i) { 
    return i.set({name: i.date().format('YYYY-MM-dd')})
  })
w = w
  .map(function(i) { 
    var names = i.date().format('YYYY-MM-dd').cat('pwv')
    return i.set({name: names})
  })
var cloudMaskL457 = function(image) {
  var qa = image.select('pixel_qa');
  // If the cloud bit (5) is set and the cloud confidence (7) is high
  // or the cloud shadow bit is set (3), then it's a bad pixel.
  var cloud = qa.bitwiseAnd(1 << 5)
          .and(qa.bitwiseAnd(1 << 7))
          .or(qa.bitwiseAnd(1 << 3))
  // Remove edge pixels that don't occur in all bands
  var mask2 = image.mask().reduce(ee.Reducer.min());
  return image.updateMask(cloud.not()).updateMask(mask2);
};
// images = images.map(cloudMaskL457)
// images = images.addBands(w)
// print(image)
Map.addLayer(images)
Map.addLayer(w)
function exportImage(image) {
  var name = image.properties.name
  var id = image.id
  var image = ee.Image(image.id)
  image = image.select('B3','B4','B6')
  // image = image.addBands(w.first(),'b1')
  print(image.get('SENSING_TIME'))
  
  // print(image.get('REFLECTANCE_ADD_BAND_3'),image.get('REFLECTANCE_MULT_BAND_3'),image.get('REFLECTANCE_ADD_BAND_4'),image.get('REFLECTANCE_MULT_BAND_4'),image.get('SCENE_CENTER_TIME'))
  
  Export.image.toDrive({
    image: image,
    scale: 300,
    maxPixels:1e10,
    region: geometry6,
    description: name,
    crs:"EPSG:4326",
    folder:fld//scale、region什么的自己设置
  })
}

function exportImage2(image) {
  var name = image.properties.name
  var id = image.id
  var image = ee.Image(image.id)
  image = image.select('b1')
  // image = image.addBands(w)
  // print(image)
  Export.image.toDrive({
    image: image,
    scale:300,
    region: geometry6,
    maxPixels:1e10,
    description: name,  //scale、region什么的自己设置
    crs:"EPSG:4326",
    folder:fld
  })
}
print(images)
print(w)
images.evaluate(function(images) {
  images.features.map(exportImage) 
})
// w.evaluate(function(images) {
//   images.features.map(exportImage2) 
// })
var bands = ui.Chart.image.series(w,geometryS, null, 30);
print(bands);

var bands2 = ui.Chart.image.series(images.select("B3","B4","B6"),geometryS);
print(bands2);
// print(chart1)
var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "ENTRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.27196363179278293,
          "pitch": 0.5997488086785907,
          "rotation": 0,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.673073366045189
      },
      "linkHotspots": [
        {
          "yaw": 1.3862345797380904,
          "pitch": 0.45254733173078776,
          "rotation": 0,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wash-area",
      "name": "WASH AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1086457123714404
      },
      "linkHotspots": [
        {
          "yaw": 1.2990326724849197,
          "pitch": 0.446413485785202,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": 2.9489270280643787,
          "pitch": 0.46223526535749393,
          "rotation": 0,
          "target": "5-passage"
        },
        {
          "yaw": -1.1779402704757924,
          "pitch": 0.5666882826777595,
          "rotation": 0,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.11160583860426954,
        "pitch": -0.006216231157727847,
        "fov": 0.9338750056189427
      },
      "linkHotspots": [
        {
          "yaw": 0.6104424273245783,
          "pitch": 0.455938865939407,
          "rotation": 0,
          "target": "2-wash-area"
        },
        {
          "yaw": 1.3893521829780333,
          "pitch": 0.41124235763911976,
          "rotation": 0.7853981633974483,
          "target": "6-bedroom1"
        },
        {
          "yaw": -0.5197813413138377,
          "pitch": 0.21602232832977109,
          "rotation": 0.7853981633974483,
          "target": "12-kitchen-1"
        },
        {
          "yaw": -0.8820944281532981,
          "pitch": 0.3760753667068357,
          "rotation": 4.71238898038469,
          "target": "4-study-area"
        },
        {
          "yaw": 2.0130158574162023,
          "pitch": 0.5204495229622843,
          "rotation": 0.7853981633974483,
          "target": "1-living"
        },
        {
          "yaw": -2.1431959763449218,
          "pitch": 0.3114097078221931,
          "rotation": 0,
          "target": "5-passage"
        },
        {
          "yaw": -1.9052605516049947,
          "pitch": 0.39013558631009815,
          "rotation": 1.5707963267948966,
          "target": "10-bedroom-3"
        },
        {
          "yaw": -2.3276281239851464,
          "pitch": 0.40549129657363636,
          "rotation": 4.71238898038469,
          "target": "8-bedroom-2"
        },
        {
          "yaw": -0.9997630633382819,
          "pitch": -0.23709185184005044,
          "rotation": 0,
          "target": "14-stair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-study-area",
      "name": "STUDY AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7262969204404648,
          "pitch": 0.7776495240799992,
          "rotation": 4.71238898038469,
          "target": "3-dining"
        },
        {
          "yaw": -1.070816505043588,
          "pitch": 0.31443486202163484,
          "rotation": 1.5707963267948966,
          "target": "5-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-passage",
      "name": "PASSAGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.44413640125436515,
          "pitch": 0.7903076297758531,
          "rotation": 1.5707963267948966,
          "target": "10-bedroom-3"
        },
        {
          "yaw": -0.6239714499922417,
          "pitch": 0.7222716909415254,
          "rotation": 4.71238898038469,
          "target": "8-bedroom-2"
        },
        {
          "yaw": -2.614309797946241,
          "pitch": 0.34962743622214987,
          "rotation": 1.5707963267948966,
          "target": "1-living"
        },
        {
          "yaw": 2.526937383846927,
          "pitch": 0.37004512880993445,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": 1.631791448685191,
          "pitch": -0.31653559800429854,
          "rotation": 0,
          "target": "14-stair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom1",
      "name": "BEDROOM1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7443660493288,
          "pitch": 0.4480695606241234,
          "rotation": 0,
          "target": "7-bedroom-11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-11",
      "name": "BEDROOM 1.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6832706555506327,
          "pitch": 0.36324328691364727,
          "rotation": 1.5707963267948966,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-2",
      "name": "BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5768705275258856,
          "pitch": 0.4392375022651507,
          "rotation": 4.71238898038469,
          "target": "9-bedroom-2-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-2-1",
      "name": "BEDROOM 2 .1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6916829623018739,
          "pitch": 0.4256996157439765,
          "rotation": 4.71238898038469,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bedroom-3",
      "name": "BEDROOM 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6135563907516719,
          "pitch": 0.5014148882692808,
          "rotation": 2.356194490192345,
          "target": "11-bedroom-31"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bedroom-31",
      "name": "BEDROOM 3.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.39738880817099265,
          "pitch": 0.28548794659069365,
          "rotation": 0,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-kitchen-1",
      "name": "KITCHEN 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2901643882288365,
          "pitch": 0.454441848354147,
          "rotation": 0,
          "target": "13-kitchen-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-kitchen-2",
      "name": "KITCHEN 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5404202190321676,
          "pitch": 0.302061004560084,
          "rotation": 0,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-stair",
      "name": "STAIR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3658520239874221,
          "pitch": 0.08658867307604012,
          "rotation": 0,
          "target": "15-upper-living-1"
        },
        {
          "yaw": -0.027882378765898608,
          "pitch": 0.5026516238286103,
          "rotation": 0,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-upper-living-1",
      "name": "UPPER LIVING 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07871031297173303,
          "pitch": 0.2633251924777351,
          "rotation": 0,
          "target": "16-upper-living-2"
        },
        {
          "yaw": 2.921629660157963,
          "pitch": 0.5824738996697345,
          "rotation": 0,
          "target": "14-stair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-upper-living-2",
      "name": "UPPER LIVING 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.421171609745663
      },
      "linkHotspots": [
        {
          "yaw": 0.9776218778290868,
          "pitch": 0.732200222015404,
          "rotation": 0.7853981633974483,
          "target": "17-bedroom-4"
        },
        {
          "yaw": -1.226512950826809,
          "pitch": 0.5933932797547179,
          "rotation": 5.497787143782138,
          "target": "20-bedroom-5"
        },
        {
          "yaw": 0.049598312515618304,
          "pitch": 0.2618827227379352,
          "rotation": 0,
          "target": "15-upper-living-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bedroom-4",
      "name": "BEDROOM 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.673073366045189
      },
      "linkHotspots": [
        {
          "yaw": -0.8208587355058636,
          "pitch": 0.3619478237601399,
          "rotation": 0,
          "target": "18-bedroom-41"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bedroom-41",
      "name": "BEDROOM 4.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.70326648329881,
          "pitch": 0.35209208821314064,
          "rotation": 0,
          "target": "19-bedroom-42"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bedroom-42",
      "name": "BEDROOM 4.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4254269854163013,
          "pitch": 1.0685978363564388,
          "rotation": 4.71238898038469,
          "target": "16-upper-living-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-bedroom-5",
      "name": "BEDROOM 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5983314915520435,
          "pitch": 0.34829391257856734,
          "rotation": 0,
          "target": "21-bedroom-51"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-bedroom-51",
      "name": "BEDROOM 5.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.31836653624484157,
          "pitch": 0.2688874180865053,
          "rotation": 0,
          "target": "22-bedroom-52"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-bedroom-52",
      "name": "BEDROOM 5.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3633934950794746,
          "pitch": 0.5710413416594271,
          "rotation": 1.5707963267948966,
          "target": "16-upper-living-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SIDHEEQ EDIT GF &FF",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

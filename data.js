var APP_DATA = {
  "scenes": [
    {
      "id": "0-academia-e-bebedouro",
      "name": "Academia e Bebedouro",
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
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3847313349736416
      },
      "linkHotspots": [
        {
          "yaw": 2.246126290582054,
          "pitch": -0.059683345996557335,
          "rotation": 0,
          "target": "1-espao-para-caminhar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.72574803196113,
          "pitch": -0.1599489306032158,
          "title": "Academia",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-espao-para-caminhar",
      "name": "Espaço para caminhar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9360890071026855,
          "pitch": 0.08192748396799487,
          "rotation": 0,
          "target": "0-academia-e-bebedouro"
        },
        {
          "yaw": -0.02776918319591104,
          "pitch": 0.08704281289743498,
          "rotation": 0,
          "target": "2-espao-para-caminhar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-espao-para-caminhar",
      "name": "Espaço para caminhar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.868984619567593,
          "pitch": 0.014814848387967317,
          "rotation": 0,
          "target": "1-espao-para-caminhar"
        },
        {
          "yaw": -1.4229625344378594,
          "pitch": 0.050067329180045306,
          "rotation": 0,
          "target": "3-mirante"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-mirante",
      "name": "Mirante",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9631693683175335,
          "pitch": -0.05597787656848574,
          "rotation": 0,
          "target": "4-parquinho"
        },
        {
          "yaw": -2.474455205020405,
          "pitch": -0.04774572195985982,
          "rotation": 0,
          "target": "2-espao-para-caminhar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.19413185625307605,
          "pitch": -0.15238670193490478,
          "title": "Mirante do Parque",
          "text": "Mirante do Parque Mãe Bonifácia, em Cuiabá: estrutura de 16,57m em concreto e aço, reconstruída para garantir mais segurança e atrair visitantes. Interdidado no dia das fotos."
        }
      ]
    },
    {
      "id": "4-parquinho",
      "name": "Parquinho",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.38273210720696227,
          "pitch": 0.04359174999986237,
          "rotation": 0,
          "target": "3-mirante"
        },
        {
          "yaw": 3.1148480835622454,
          "pitch": -0.0462336820519873,
          "rotation": 0,
          "target": "5-espao-para-caminhar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3297192956448107,
          "pitch": -0.10461395415478414,
          "title": "Parquinho para crianças",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "5-espao-para-caminhar",
      "name": "Espaço para caminhar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.277410837756392,
          "pitch": 0.05326656611623015,
          "rotation": 0,
          "target": "4-parquinho"
        },
        {
          "yaw": -0.46494514582236235,
          "pitch": -0.054437715982103896,
          "rotation": 0,
          "target": "6-gazebo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.844615144909856,
          "pitch": -0.07623533582218656,
          "title": "Parquinho para crianças 2",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "6-gazebo",
      "name": "Gazebo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0706172678710004,
          "pitch": 0.12330330511037246,
          "rotation": 0,
          "target": "5-espao-para-caminhar"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ParqueMaeBonifacia",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

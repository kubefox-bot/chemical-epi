 export const raw =  {
  "parameters": {
    "cas": "002921-88-2",
    "smiles": null,
    "caseNumber": null,
    "userLogKow": {
      "value": -999.0,
      "units": "",
      "valueType": "USER_PROVIDED"
    },
    "userMeltingPoint": {
      "value": -999.0,
      "units": "celsius",
      "valueType": "USER_PROVIDED"
    },
    "userBoilingPoint": {
      "value": -999.0,
      "units": "celsius",
      "valueType": "USER_PROVIDED"
    },
    "userWaterSolubility": {
      "value": -999.0,
      "units": "mg/L",
      "valueType": "USER_PROVIDED"
    },
    "userVaporPressure": {
      "value": -999.0,
      "units": "mmHg",
      "valueType": "USER_PROVIDED"
    },
    "userHenrysLawConstant": {
      "value": -999.0,
      "units": "atm-m3/mol",
      "valueType": "USER_PROVIDED"
    },
    "userLogKoa": {
      "value": -999.0,
      "units": "",
      "valueType": "USER_PROVIDED"
    },
    "userLogKoc": {
      "value": -999.0,
      "units": "L/kg",
      "valueType": "USER_PROVIDED"
    },
    "userHydroxylReactionRateConstant": {
      "value": -999.0,
      "units": "cm3/molecule-sec",
      "valueType": "USER_PROVIDED"
    },
    "userDermalPermeabilityCoefficient": {
      "value": -999.0,
      "units": "cm/hr",
      "valueType": "USER_PROVIDED"
    },
    "userBiodegradationRateRemoveMetals": {
      "value": true,
      "units": "boolean",
      "valueType": "USER_PROVIDED"
    },
    "userAtmosphericHydroxylRadicalConcentration": {
      "value": 1500000.0,
      "units": "radicals/cm3",
      "valueType": "USER_PROVIDED"
    },
    "userAtmosphericOzoneConcentration": {
      "value": 7.0E11,
      "units": "molecules/cm3",
      "valueType": "USER_PROVIDED"
    },
    "userAtmosphericDaylightHours": {
      "value": 12.0,
      "units": "hours",
      "valueType": "USER_PROVIDED"
    },
    "userStpHalfLifePrimaryClarifier": {
      "value": 10000.0,
      "units": "hours",
      "valueType": "USER_PROVIDED"
    },
    "userStpHalfLifeAerationVessel": {
      "value": 10000.0,
      "units": "hours",
      "valueType": "USER_PROVIDED"
    },
    "userStpHalfLifeSettlingTank": {
      "value": 10000.0,
      "units": "hours",
      "valueType": "USER_PROVIDED"
    },
    "userFugacityHalfLifeAir": {
      "value": 0.0,
      "units": "hours",
      "valueType": "USER_PROVIDED"
    },
    "userFugacityHalfLifeWater": {
      "value": 0.0,
      "units": "hours",
      "valueType": "USER_PROVIDED"
    },
    "userFugacityHalfLifeSoil": {
      "value": 0.0,
      "units": "hours",
      "valueType": "USER_PROVIDED"
    },
    "userFugacityHalfLifeSediment": {
      "value": 0.0,
      "units": "hours",
      "valueType": "USER_PROVIDED"
    },
    "userFugacityEmissionRateAir": {
      "value": 1000.0,
      "units": "kg/hour",
      "valueType": "USER_PROVIDED"
    },
    "userFugacityEmissionRateWater": {
      "value": 1000.0,
      "units": "kg/hour",
      "valueType": "USER_PROVIDED"
    },
    "userFugacityEmissionRateSoil": {
      "value": 1000.0,
      "units": "kg/hour",
      "valueType": "USER_PROVIDED"
    },
    "userFugacityEmissionRateSediment": {
      "value": 0.0,
      "units": "kg/hour",
      "valueType": "USER_PROVIDED"
    },
    "userFugacityAdvectionTimeAir": {
      "value": 100.0,
      "units": "hours",
      "valueType": "USER_PROVIDED"
    },
    "userFugacityAdvectionTimeWater": {
      "value": 1000.0,
      "units": "hours",
      "valueType": "USER_PROVIDED"
    },
    "userFugacityAdvectionTimeSoil": {
      "value": 0.0,
      "units": "hours",
      "valueType": "USER_PROVIDED"
    },
    "userFugacityAdvectionTimeSediment": {
      "value": 50000.0,
      "units": "hours",
      "valueType": "USER_PROVIDED"
    },
    "modules": []
  },
  "chemicalProperties": {
    "name": "CHLORPYRIFOS",
    "systematicName": null,
    "cas": "002921-88-2",
    "smiles": "CCOP(\u003dS)(OCC)OC1\u003dNC(\u003dC(C\u003dC1Cl)Cl)Cl",
    "molecularWeight": 350.5875487105098,
    "molecularFormula": "C9H11Cl3NO3PS",
    "molecularFormulaHtml": "C\u003csub\u003e9\u003c/sub\u003eH\u003csub\u003e11\u003c/sub\u003eCl\u003csub\u003e3\u003c/sub\u003eNO\u003csub\u003e3\u003c/sub\u003ePS",
    "organic": true,
    "organicAcid": false,
    "aminoAcid": false,
    "nonStandardMetal": false,
    "flags": null
  },
  "logKow": {
    "parameters": {
      "smiles": "CCOP(\u003dS)(OCC)OC1\u003dNC(\u003dC(C\u003dC1Cl)Cl)Cl",
      "cas": "002921-88-2"
    },
    "estimatedValue": {
      "model": {
        "logKow": 5.108200069516897,
        "factors": [
          {
            "type": "Fragment",
            "description": "-CH3    [aliphatic carbon]",
            "fragmentCount": 2,
            "coefficient": 0.5472999811172485,
            "contribution": 1.094599962234497,
            "trainingCount": 13,
            "validationCount": 20
          },
          {
            "type": "Fragment",
            "description": "-CH2-   [aliphatic carbon]",
            "fragmentCount": 2,
            "coefficient": 0.491100013256073,
            "contribution": 0.982200026512146,
            "trainingCount": 18,
            "validationCount": 28
          },
          {
            "type": "Fragment",
            "description": "Aromatic Carbon",
            "fragmentCount": 5,
            "coefficient": 0.2939999997615814,
            "contribution": 1.4700000286102295,
            "trainingCount": 24,
            "validationCount": 30
          },
          {
            "type": "Fragment",
            "description": "Aromatic Nitrogen",
            "fragmentCount": 1,
            "coefficient": -0.7324000000953674,
            "contribution": -0.7324000000953674,
            "trainingCount": 4,
            "validationCount": 4
          },
          {
            "type": "Fragment",
            "description": "-CL     [chlorine, aromatic attach]",
            "fragmentCount": 3,
            "coefficient": 0.6445000171661377,
            "contribution": 1.933500051498413,
            "trainingCount": 6,
            "validationCount": 10
          },
          {
            "type": "Fragment",
            "description": "S\u003dP     [thio\u003dphosphorus]",
            "fragmentCount": 1,
            "coefficient": -0.6586999893188477,
            "contribution": -0.6586999893188477,
            "trainingCount": 2,
            "validationCount": 1
          },
          {
            "type": "Fragment",
            "description": "-O-P    [aliphatic attach]",
            "fragmentCount": 2,
            "coefficient": -0.016200000420212746,
            "contribution": -0.03240000084042549,
            "trainingCount": 4,
            "validationCount": 3
          },
          {
            "type": "Fragment",
            "description": "-O-P    [aromatic attach]",
            "fragmentCount": 1,
            "coefficient": 0.534500002861023,
            "contribution": 0.534500002861023,
            "trainingCount": 3,
            "validationCount": 2
          },
          {
            "type": "Factor",
            "description": "Pyridine ring (non-fused)  correction",
            "fragmentCount": 1,
            "coefficient": -0.16210000216960907,
            "contribution": -0.16210000216960907,
            "trainingCount": 2,
            "validationCount": 3
          },
          {
            "type": "Factor",
            "description": "Ring rx: S\u003dP(O)(O)O / aromat N + halogen",
            "fragmentCount": 1,
            "coefficient": 0.44999998807907104,
            "contribution": 0.44999998807907104,
            "trainingCount": 0,
            "validationCount": 1
          },
          {
            "type": "Constant",
            "description": "Equation Constant",
            "fragmentCount": 0,
            "coefficient": 0.0,
            "contribution": 0.2290000021457672,
            "trainingCount": 0,
            "validationCount": 0
          }
        ],
        "output": "-------+-----+--------------------------------------------+---------+--------\n TYPE  | NUM |        LOGKOW FRAGMENT DESCRIPTION         |  COEFF  |  VALUE \n-------+-----+--------------------------------------------+---------+--------\n Frag  |  2  |  -CH3    [aliphatic carbon]                | 0.5473  |  1.0946\n Frag  |  2  |  -CH2-   [aliphatic carbon]                | 0.4911  |  0.9822\n Frag  |  5  |  Aromatic Carbon                           | 0.2940  |  1.4700\n Frag  |  1  |  Aromatic Nitrogen                         |-0.7324  | -0.7324\n Frag  |  3  |  -CL     [chlorine, aromatic attach]       | 0.6445  |  1.9335\n Frag  |  1  |  S\u003dP     [thio\u003dphosphorus]                 |-0.6587  | -0.6587\n Frag  |  2  |  -O-P    [aliphatic attach]                |-0.0162  | -0.0324\n Frag  |  1  |  -O-P    [aromatic attach]                 | 0.5345  |  0.5345\n Factor|  1  |  Pyridine ring (non-fused)  correction     |-0.1621  | -0.1621\n Factor|  1  |  Ring rx: S\u003dP(O)(O)O / aromat N + halogen  | 0.4500  |  0.4500\n Const |     |  Equation Constant                         |         |  0.2290\n-------+-----+--------------------------------------------+---------+--------\n                                                         Log Kow   \u003d   5.1082\n",
        "notes": "",
        "flags": {
          "isOrganicAcid": false,
          "isAminoAcid": false
        }
      },
      "value": 5.108200069516897,
      "units": "",
      "valueType": "ESTIMATED"
    },
    "experimentalValues": [
      {
        "author": "SANGSTER",
        "year": 1994,
        "order": 1,
        "value": 4.96,
        "units": null,
        "valueType": "EXPERIMENTAL"
      }
    ],
    "selectedValue": {
      "value": 4.96,
      "units": null,
      "valueType": "EXPERIMENTAL"
    }
  },
  "meltingPoint": {
    "estimatedValue": {
      "model": {
        "factors": [
          {
            "type": "Group",
            "description": "-CH3",
            "fragmentCount": 2,
            "coefficient": -5.099999904632568,
            "totalCoefficient": -10.199999809265137
          },
          {
            "type": "Group",
            "description": "-CH2-",
            "fragmentCount": 2,
            "coefficient": 11.270000457763672,
            "totalCoefficient": 22.540000915527344
          },
          {
            "type": "Group",
            "description": "-O- (nonring)",
            "fragmentCount": 3,
            "coefficient": 22.229999542236328,
            "totalCoefficient": 66.69000244140625
          },
          {
            "type": "Group",
            "description": "CH (aromatic)",
            "fragmentCount": 1,
            "coefficient": 8.130000114440918,
            "totalCoefficient": 8.130000114440918
          },
          {
            "type": "Group",
            "description": "-C (aromatic)",
            "fragmentCount": 4,
            "coefficient": 37.02000045776367,
            "totalCoefficient": 148.0800018310547
          },
          {
            "type": "Group",
            "description": "N (aromatic)",
            "fragmentCount": 1,
            "coefficient": 68.4000015258789,
            "totalCoefficient": 68.4000015258789
          },
          {
            "type": "Group",
            "description": "-Cl (to aromat)",
            "fragmentCount": 3,
            "coefficient": 13.550000190734863,
            "totalCoefficient": 40.650001525878906
          },
          {
            "type": "Group",
            "description": "\u003eP\u003dS",
            "fragmentCount": 1,
            "coefficient": -70.0,
            "totalCoefficient": -70.0
          },
          {
            "type": "Correction",
            "description": "Si-Chlorine",
            "fragmentCount": 1,
            "coefficient": 0.0,
            "totalCoefficient": 0.0
          },
          {
            "type": "Correction",
            "description": "N-C(\u003dS)-N",
            "fragmentCount": 1,
            "coefficient": 5.0,
            "totalCoefficient": 5.0
          },
          {
            "type": "*",
            "description": "Equation Constant",
            "fragmentCount": 0,
            "coefficient": 122.5,
            "totalCoefficient": 122.5
          }
        ],
        "meltingPointKelvins": 401.7900085449219,
        "meltingPointLimitKelvins": 348.1600036621094,
        "meltingPointCelsius": 75.0,
        "meltingPointAdaptedJoback": 75.0,
        "meltingPointGoldOgle": 133.296142578125,
        "meltingPointMean": 104.1480712890625,
        "meltingPointSelected": 84.71602630615234
      },
      "value": 84.71602630615234,
      "units": "celsius",
      "valueType": "ESTIMATED"
    },
    "experimentalValues": [
      {
        "author": "Physprop calculated - based upon VP / Water Sol data",
        "year": 0,
        "order": 1,
        "value": 42.0,
        "units": "celsius",
        "valueType": "EXPERIMENTAL"
      }
    ],
    "selectedValue": {
      "value": 42.0,
      "units": "celsius",
      "valueType": "EXPERIMENTAL"
    }
  },
  "boilingPoint": {
    "estimatedValue": {
      "model": {
        "factors": [
          {
            "type": "Group",
            "description": "-CH3",
            "fragmentCount": 2,
            "coefficient": 21.979999542236328,
            "totalCoefficient": 43.959999084472656
          },
          {
            "type": "Group",
            "description": "-CH2-",
            "fragmentCount": 2,
            "coefficient": 24.219999313354492,
            "totalCoefficient": 48.439998626708984
          },
          {
            "type": "Group",
            "description": "-O- (nonring)",
            "fragmentCount": 3,
            "coefficient": 25.15999984741211,
            "totalCoefficient": 75.47999572753906
          },
          {
            "type": "Group",
            "description": "CH (aromatic)",
            "fragmentCount": 1,
            "coefficient": 28.530000686645508,
            "totalCoefficient": 28.530000686645508
          },
          {
            "type": "Group",
            "description": "-C (aromatic)",
            "fragmentCount": 4,
            "coefficient": 30.760000228881836,
            "totalCoefficient": 123.04000091552734
          },
          {
            "type": "Group",
            "description": "N (aromatic)",
            "fragmentCount": 1,
            "coefficient": 39.880001068115234,
            "totalCoefficient": 39.880001068115234
          },
          {
            "type": "Group",
            "description": "-Cl (to aromat)",
            "fragmentCount": 3,
            "coefficient": 36.790000915527344,
            "totalCoefficient": 110.37000274658203
          },
          {
            "type": "Group",
            "description": "\u003eP\u003dS",
            "fragmentCount": 1,
            "coefficient": 100.0,
            "totalCoefficient": 100.0
          },
          {
            "type": "Correction",
            "description": "Si-Chlorine",
            "fragmentCount": 1,
            "coefficient": 25.0,
            "totalCoefficient": 25.0
          },
          {
            "type": "Correction",
            "description": "N-C(\u003dS)-N",
            "fragmentCount": 1,
            "coefficient": 70.0,
            "totalCoefficient": 70.0
          },
          {
            "type": "*",
            "description": "Equation Constant",
            "fragmentCount": 0,
            "coefficient": 0.0,
            "totalCoefficient": 198.17999267578125
          }
        ],
        "boilingPointKelvinsUncorrected": 862.8799438476562,
        "boilingPointKelvinsCorrected": 696.1057739257812,
        "boilingPointCelsius": 422.9457702636719
      },
      "value": 422.9457702636719,
      "units": "celsius",
      "valueType": "ESTIMATED"
    },
    "experimentalValues": [],
    "selectedValue": {
      "value": 422.9457702636719,
      "units": "celsius",
      "valueType": "ESTIMATED"
    }
  },
  "vaporPressure": {
    "estimatedValue": {
      "model": [
        {
          "type": "Antoine",
          "mmHg": 2.1268390071327303E-7,
          "pa": 2.835544301089499E-5
        },
        {
          "type": "Grain",
          "mmHg": 1.6035396326977512E-6,
          "pa": 2.137871109105296E-4
        },
        {
          "type": "Mackay",
          "mmHg": 3.2344514397194882E-6,
          "pa": 4.3122353484628163E-4
        },
        {
          "type": "Selected",
          "mmHg": 1.6035396326977512E-6,
          "pa": 2.137871109105296E-4
        },
        {
          "type": "SubCooled",
          "mmHg": 2.2874432943353895E-6,
          "pa": 3.0496651488738283E-4
        }
      ],
      "value": 1.6035396326977512E-6,
      "units": "mmHg",
      "valueType": "ESTIMATED"
    },
    "experimentalValues": [
      {
        "author": "TOMLIN,C",
        "year": 1997,
        "order": 1,
        "value": 2.03E-5,
        "units": "mmHg",
        "valueType": "EXPERIMENTAL"
      }
    ],
    "selectedValue": {
      "value": 2.03E-5,
      "units": "mmHg",
      "valueType": "EXPERIMENTAL"
    }
  },
  "waterSolubilityFromLogKow": {
    "parameters": {
      "smiles": "CCOP(\u003dS)(OCC)OC1\u003dNC(\u003dC(C\u003dC1Cl)Cl)Cl",
      "cas": "002921-88-2",
      "logKow": {
        "value": 4.96,
        "units": null,
        "valueType": "EXPERIMENTAL"
      },
      "meltingPoint": {
        "value": 42.0,
        "units": "celsius",
        "valueType": "EXPERIMENTAL"
      }
    },
    "estimatedValue": {
      "model": {
        "waterSolubility": 1.6555993556976318,
        "factors": [
          {
            "type": "No Applicable Correction Factors",
            "description": null,
            "fragmentCount": 1,
            "coefficient": 0.0,
            "totalCoefficient": 0.0,
            "trainingCount": 0,
            "maxFragmentCount": 0
          }
        ],
        "equation": "Log S (mol/L) \u003d 0.693-0.96 log Kow-0.0092(Tm-25)-0.00314 MW + Correction\n Melting Pt (Tm) \u003d 42.0 deg C (Use Tm \u003d 25 for all liquids)\nUser Entered Melting Point: 42.0",
        "notes": "",
        "output": "MOL FOR: C9 H11 Cl3 N1 O3 P1 S1 \nMOL WT : 350.59\nLog Kow (experimental):  4.96\nLog Kow used by Water solubility estimates:  4.96 (user entered)\n\nEquation Used to Make Water Sol estimate:\n   Log S (mol/L) \u003d 0.693-0.96 log Kow-0.0092(Tm-25)-0.00314 MW + Correction\n\n      Melting Pt (Tm) \u003d 42.00 deg C (Use Tm \u003d 25 for all liquids)\n\n      Correction(s):         Value\n      --------------------   -----\n       No Applicable Correction Factors\n\n   Log Water Solubility  (in moles/L) :  -5.326\n   Water Solubility at 25 deg C (mg/L):  1.656\n"
      },
      "value": 1.6555993556976318,
      "units": "mg/L",
      "valueType": "ESTIMATED"
    },
    "experimentalValues": [],
    "selectedValue": {
      "value": 1.6555993556976318,
      "units": "mg/L",
      "valueType": "ESTIMATED"
    }
  },
  "waterSolubilityFromWaterNt": {
    "parameters": {
      "smiles": "CCOP(\u003dS)(OCC)OC1\u003dNC(\u003dC(C\u003dC1Cl)Cl)Cl",
      "cas": "002921-88-2"
    },
    "estimatedValue": {
      "model": {
        "waterSolubility": 11.010854721069336,
        "factors": [
          {
            "type": "Fragment",
            "description": "-CH3    [aliphatic carbon]",
            "fragmentCount": 2,
            "coefficient": -0.3212711215019226,
            "totalCoefficient": -0.6425422430038452,
            "trainingCount": 612,
            "maxFragmentCount": 6
          },
          {
            "type": "Fragment",
            "description": "-CH2-   [aliphatic carbon]",
            "fragmentCount": 2,
            "coefficient": -0.5370191931724548,
            "totalCoefficient": -1.0740383863449097,
            "trainingCount": 416,
            "maxFragmentCount": 14
          },
          {
            "type": "Fragment",
            "description": "Aromatic Carbon  (C-H type)",
            "fragmentCount": 1,
            "coefficient": -0.3358639180660248,
            "totalCoefficient": -0.3358639180660248,
            "trainingCount": 700,
            "maxFragmentCount": 15
          },
          {
            "type": "Fragment",
            "description": "Aromatic Nitrogen [max count of 1 allowed]",
            "fragmentCount": 1,
            "coefficient": 1.925534963607788,
            "totalCoefficient": 1.925534963607788,
            "trainingCount": 62,
            "maxFragmentCount": 1
          },
          {
            "type": "Fragment",
            "description": "-CL     [chlorine, aromatic attach]",
            "fragmentCount": 3,
            "coefficient": -0.48780557513237,
            "totalCoefficient": -1.4634166955947876,
            "trainingCount": 202,
            "maxFragmentCount": 10
          },
          {
            "type": "Fragment",
            "description": "Aromatic Carbon  (C-substituent type)",
            "fragmentCount": 4,
            "coefficient": -0.5399536490440369,
            "totalCoefficient": -2.1598145961761475,
            "trainingCount": 718,
            "maxFragmentCount": 12
          },
          {
            "type": "Fragment",
            "description": "S\u003dP     [thio\u003dphosphorus]",
            "fragmentCount": 1,
            "coefficient": 0.8774049282073975,
            "totalCoefficient": 0.8774049282073975,
            "trainingCount": 39,
            "maxFragmentCount": 2
          },
          {
            "type": "Fragment",
            "description": "-O-P    [aliphatic attach]",
            "fragmentCount": 2,
            "coefficient": -0.3826614022254944,
            "totalCoefficient": -0.7653228044509888,
            "trainingCount": 56,
            "maxFragmentCount": 4
          },
          {
            "type": "Fragment",
            "description": "-O-P    [aromatic attach]",
            "fragmentCount": 1,
            "coefficient": -0.5700598359107971,
            "totalCoefficient": -0.5700598359107971,
            "trainingCount": 29,
            "maxFragmentCount": 3
          },
          {
            "type": "Factor",
            "description": "Ring rx -\u003e  Halogen ortho to arom nitrogen",
            "fragmentCount": 1,
            "coefficient": 1.274888277053833,
            "totalCoefficient": -0.5440727472305298,
            "trainingCount": 10,
            "maxFragmentCount": 2
          },
          {
            "type": "Constant",
            "description": "Equation Constant",
            "fragmentCount": 1,
            "coefficient": 0.24921822547912598,
            "totalCoefficient": 0.24921822547912598,
            "trainingCount": 0,
            "maxFragmentCount": 0
          }
        ],
        "equation": "",
        "notes": "",
        "output": "MOL FOR: C9 H11 CL3 N1 O3 P1 S1 \nMOL WT : 350.59\n-------+-----+--------------------------------------------+----------+---------\n TYPE  | NUM |    WATER SOLUBILITY FRAGMENT DESCRIPTION   |  COEFF   |  VALUE  \n-------+-----+--------------------------------------------+----------+---------\n Frag  |  2  |  -CH3    [aliphatic carbon]                |-0.3213   | -0.6425\n Frag  |  2  |  -CH2-   [aliphatic carbon]                |-0.5370   | -1.0740\n Frag  |  1  |  Aromatic Carbon  (C-H type)               |-0.3359   | -0.3359\n Frag  |  1  |  Aromatic Nitrogen [max count of 1 allowed]| 1.9255   |  1.9255\n Frag  |  3  |  -CL     [chlorine, aromatic attach]       |-0.4878   | -1.4634\n Frag  |  4  |  Aromatic Carbon  (C-substituent type)     |-0.5400   | -2.1598\n Frag  |  1  |  S\u003dP     [thio\u003dphosphorus]                 | 0.8774   |  0.8774\n Frag  |  2  |  -O-P    [aliphatic attach]                |-0.3827   | -0.7653\n Frag  |  1  |  -O-P    [aromatic attach]                 |-0.5701   | -0.5701\n Factor|  1  |  Ring rx -\u003e  Halogen ortho to arom nitrogen|-0.5441   | -0.5441\n Const |     |  Equation Constant                         |          |  0.2492\n-------+-----+--------------------------------------------+----------+---------\n                              Log Water Sol (moles/L) at 25 dec C  \u003d   -4.5030\n                              Water Solubility (mg/L) at 25 dec C  \u003d   11.011\n"
      },
      "value": 11.010854721069336,
      "units": "mg/L",
      "valueType": "ESTIMATED"
    },
    "experimentalValues": [],
    "selectedValue": {
      "value": 11.010854721069336,
      "units": "mg/L",
      "valueType": "ESTIMATED"
    }
  },
  "henrysLawConstant": {
    "parameters": {
      "smiles": "CCOP(\u003dS)(OCC)OC1\u003dNC(\u003dC(C\u003dC1Cl)Cl)Cl",
      "cas": "002921-88-2",
      "waterSolubility": {
        "value": 1.6555993556976318,
        "units": "mg/L",
        "valueType": "ESTIMATED"
      },
      "vaporPressure": {
        "value": 2.03E-5,
        "units": "mmHg",
        "valueType": "EXPERIMENTAL"
      },
      "molecularWeight": {
        "value": 350.5875487105098,
        "units": "g/mol",
        "valueType": "NONE"
      }
    },
    "estimatedValue": {
      "model": [
        {
          "name": "VP/WSOL",
          "value": 5.65709101906781E-6,
          "factors": null,
          "hlcAtm": 5.65709101906781E-6,
          "hlcUnitless": 2.3122819018730044E-4,
          "hlcPaMol": 0.5732047475070463,
          "notes": ""
        },
        {
          "name": "Bond",
          "value": 3.9864885807037354,
          "factors": [
            {
              "type": "Hydrogen",
              "description": "Hydrogen to Carbon (aliphatic) Bonds",
              "fragmentCount": 10,
              "totalCoefficient": -1.1967699527740479,
              "trainingCount": 284,
              "maxFragmentCount": 27
            },
            {
              "type": "Hydrogen",
              "description": "Hydrogen to Carbon (aromatic) Bonds",
              "fragmentCount": 1,
              "totalCoefficient": -0.1542939990758896,
              "trainingCount": 93,
              "maxFragmentCount": 12
            },
            {
              "type": "Fragment",
              "description": "C-C",
              "fragmentCount": 2,
              "totalCoefficient": 0.23260800540447235,
              "trainingCount": 200,
              "maxFragmentCount": 9
            },
            {
              "type": "Fragment",
              "description": "C-O",
              "fragmentCount": 2,
              "totalCoefficient": 2.170945882797241,
              "trainingCount": 83,
              "maxFragmentCount": 4
            },
            {
              "type": "Fragment",
              "description": "Car-Car",
              "fragmentCount": 4,
              "totalCoefficient": 1.0552279949188232,
              "trainingCount": 94,
              "maxFragmentCount": 21
            },
            {
              "type": "Fragment",
              "description": "Car-CL",
              "fragmentCount": 3,
              "totalCoefficient": -0.07230599969625473,
              "trainingCount": 11,
              "maxFragmentCount": 6
            },
            {
              "type": "Fragment",
              "description": "Car-Nar",
              "fragmentCount": 2,
              "totalCoefficient": 3.256442070007324,
              "trainingCount": 19,
              "maxFragmentCount": 4
            },
            {
              "type": "Fragment",
              "description": "O-P",
              "fragmentCount": 3,
              "totalCoefficient": 1.1791080236434937,
              "trainingCount": 5,
              "maxFragmentCount": 3
            },
            {
              "type": "Fragment",
              "description": "P\u003dS",
              "fragmentCount": 1,
              "totalCoefficient": -1.0317360162734985,
              "trainingCount": 4,
              "maxFragmentCount": 1
            },
            {
              "type": "Fragment",
              "description": "Car-O",
              "fragmentCount": 1,
              "totalCoefficient": 0.3472619950771332,
              "trainingCount": 8,
              "maxFragmentCount": 2
            },
            {
              "type": "Factor  ",
              "description": "1 Car(CL)(Nar)(Car)   group",
              "fragmentCount": 1,
              "totalCoefficient": -1.7999999523162842,
              "trainingCount": 0,
              "maxFragmentCount": 0
            }
          ],
          "hlcAtm": 2.5232941425201716E-6,
          "hlcUnitless": 1.0316001862520352E-4,
          "hlcPaMol": 0.25567278265953064,
          "notes": ""
        },
        {
          "name": "Group",
          "value": 2.0299999713897705,
          "factors": [
            {
              "type": "NONE    ",
              "description": "CH3 (X)",
              "fragmentCount": 2,
              "totalCoefficient": -1.2400000095367432,
              "trainingCount": 0,
              "maxFragmentCount": 0
            },
            {
              "type": "NONE    ",
              "description": "CH2 (C)(O)",
              "fragmentCount": 2,
              "totalCoefficient": -0.25999999046325684,
              "trainingCount": 0,
              "maxFragmentCount": 0
            },
            {
              "type": "NONE    ",
              "description": "Car-H (Car)(Car)",
              "fragmentCount": 1,
              "totalCoefficient": 0.10999999940395355,
              "trainingCount": 0,
              "maxFragmentCount": 0
            },
            {
              "type": "NONE    ",
              "description": "Car (Car)(Car)(CL)",
              "fragmentCount": 2,
              "totalCoefficient": 0.36000001430511475,
              "trainingCount": 0,
              "maxFragmentCount": 0
            },
            {
              "type": "NONE    ",
              "description": "Nar (Car)(Car)",
              "fragmentCount": 1,
              "totalCoefficient": 3.059999942779541,
              "trainingCount": 0,
              "maxFragmentCount": 0
            },
            {
              "type": "NONE    ",
              "description": "MISSING Value for:  O (P)(C)",
              "fragmentCount": 0,
              "totalCoefficient": 0.0,
              "trainingCount": 0,
              "maxFragmentCount": 0
            },
            {
              "type": "NONE    ",
              "description": "MISSING Value for:  P (\u003dS)(O)(O)(O)",
              "fragmentCount": 0,
              "totalCoefficient": 0.0,
              "trainingCount": 0,
              "maxFragmentCount": 0
            },
            {
              "type": "NONE    ",
              "description": "MISSING Value for:  O (C)(P)",
              "fragmentCount": 0,
              "totalCoefficient": 0.0,
              "trainingCount": 0,
              "maxFragmentCount": 0
            },
            {
              "type": "NONE    ",
              "description": "MISSING Value for:  O (Car)(P)",
              "fragmentCount": 0,
              "totalCoefficient": 0.0,
              "trainingCount": 0,
              "maxFragmentCount": 0
            },
            {
              "type": "NONE    ",
              "description": "MISSING Value for:  Car (Car)(Nar)(O)",
              "fragmentCount": 0,
              "totalCoefficient": 0.0,
              "trainingCount": 0,
              "maxFragmentCount": 0
            },
            {
              "type": "NONE    ",
              "description": "MISSING Value for:  Car (Car)(CL)(Nar)",
              "fragmentCount": 0,
              "totalCoefficient": 0.0,
              "trainingCount": 0,
              "maxFragmentCount": 0
            }
          ],
          "hlcAtm": 0.0,
          "hlcUnitless": 0.0,
          "hlcPaMol": 0.0,
          "notes": ""
        }
      ],
      "value": 2.5232941425201716E-6,
      "units": "atm-m3/mol",
      "valueType": "ESTIMATED"
    },
    "experimentalValues": [],
    "selectedValue": {
      "value": 2.5232941425201716E-6,
      "units": "atm-m3/mol",
      "valueType": "ESTIMATED"
    }
  },
  "logKoa": {
    "parameters": {
      "smiles": "CCOP(\u003dS)(OCC)OC1\u003dNC(\u003dC(C\u003dC1Cl)Cl)Cl",
      "cas": "002921-88-2",
      "logKow": {
        "value": 4.96,
        "units": null,
        "valueType": "EXPERIMENTAL"
      },
      "henrysLawConstant": {
        "value": 2.5232941425201716E-6,
        "units": "atm-m3/mol",
        "valueType": "ESTIMATED"
      }
    },
    "estimatedValue": {
      "model": {
        "kow": 91201.08393559097,
        "kaw": 1.031372371274479E-4,
        "koa": 8.842692171683125E8,
        "logKoa": 8.946584506789835
      },
      "value": 8.946584506789835,
      "units": "",
      "valueType": "ESTIMATED"
    },
    "experimentalValues": [],
    "selectedValue": {
      "value": 8.946584506789835,
      "units": "",
      "valueType": "ESTIMATED"
    }
  },
  "biodegradationRate": {
    "parameters": {
      "smiles": "CCOP(\u003dS)(OCC)OC1\u003dNC(\u003dC(C\u003dC1Cl)Cl)Cl",
      "cas": "002921-88-2",
      "removeMetals": true
    },
    "models": [
      {
        "name": "Linear Model Prediction",
        "value": 0.19275107979774475,
        "factors": [
          {
            "type": "Fragment",
            "description": "Aromatic chloride   [-CL]",
            "fragmentCount": 3,
            "coefficient": -0.18242000043392181,
            "totalCoefficient": -0.5472599864006042,
            "trainingCount": 40,
            "maxFragmentCount": 6
          },
          {
            "type": "Fragment",
            "description": "Pyridine ring",
            "fragmentCount": 1,
            "coefficient": -0.15456999838352203,
            "totalCoefficient": -0.15456999838352203,
            "trainingCount": 18,
            "maxFragmentCount": 1
          },
          {
            "type": "Fragment",
            "description": "Phosphate ester",
            "fragmentCount": 1,
            "coefficient": 0.31393998861312866,
            "totalCoefficient": 0.31393998861312866,
            "trainingCount": 5,
            "maxFragmentCount": 1
          },
          {
            "type": "Molecular Weight",
            "description": "Molecular Weight Parameter",
            "fragmentCount": 0,
            "coefficient": 0.0,
            "totalCoefficient": -0.1669047623872757,
            "trainingCount": 0,
            "maxFragmentCount": 0
          },
          {
            "type": "Constant",
            "description": "Equation Constant",
            "fragmentCount": 0,
            "coefficient": 0.0,
            "totalCoefficient": 0.7475458383560181,
            "trainingCount": 0,
            "maxFragmentCount": 0
          }
        ]
      },
      {
        "name": "Non-Linear Model Prediction",
        "value": 0.9999999999999992,
        "factors": [
          {
            "type": "Fragment",
            "description": "Aromatic chloride   [-CL]",
            "fragmentCount": 3,
            "coefficient": -2.015500068664551,
            "totalCoefficient": -6.046500205993652,
            "trainingCount": 40,
            "maxFragmentCount": 6
          },
          {
            "type": "Fragment",
            "description": "Pyridine ring",
            "fragmentCount": 1,
            "coefficient": -1.638100028038025,
            "totalCoefficient": -1.638100028038025,
            "trainingCount": 18,
            "maxFragmentCount": 1
          },
          {
            "type": "Fragment",
            "description": "Phosphate ester",
            "fragmentCount": 1,
            "coefficient": 44.40869903564453,
            "totalCoefficient": 44.40869903564453,
            "trainingCount": 5,
            "maxFragmentCount": 1
          },
          {
            "type": "Molecular Weight",
            "description": "Molecular Weight Parameter",
            "fragmentCount": 0,
            "coefficient": 0.0,
            "totalCoefficient": -4.978315353393555,
            "trainingCount": 0,
            "maxFragmentCount": 0
          }
        ]
      },
      {
        "name": "Ultimate Biodegradation Timeframe",
        "value": 1.7441823035478592,
        "factors": [
          {
            "type": "Fragment",
            "description": "Aromatic chloride   [-CL]",
            "fragmentCount": 3,
            "coefficient": -0.20659999549388885,
            "totalCoefficient": -0.6197999715805054,
            "trainingCount": 27,
            "maxFragmentCount": 6
          },
          {
            "type": "Fragment",
            "description": "Pyridine ring",
            "fragmentCount": 1,
            "coefficient": -0.21416999399662018,
            "totalCoefficient": -0.21416999399662018,
            "trainingCount": 8,
            "maxFragmentCount": 1
          },
          {
            "type": "Fragment",
            "description": "Phosphate ester",
            "fragmentCount": 1,
            "coefficient": 0.15373000502586365,
            "totalCoefficient": 0.15373000502586365,
            "trainingCount": 7,
            "maxFragmentCount": 1
          },
          {
            "type": "Molecular Weight",
            "description": "Molecular Weight Parameter",
            "fragmentCount": 0,
            "coefficient": 0.0,
            "totalCoefficient": -0.7747483253479004,
            "trainingCount": 0,
            "maxFragmentCount": 0
          },
          {
            "type": "Constant",
            "description": "Equation Constant",
            "fragmentCount": 0,
            "coefficient": 0.0,
            "totalCoefficient": 3.1991705894470215,
            "trainingCount": 0,
            "maxFragmentCount": 0
          }
        ]
      },
      {
        "name": "Primary Biodegradation Timeframe",
        "value": 3.2925175111740828,
        "factors": [
          {
            "type": "Fragment",
            "description": "Aromatic chloride   [-CL]",
            "fragmentCount": 3,
            "coefficient": -0.16534000635147095,
            "totalCoefficient": -0.49602001905441284,
            "trainingCount": 27,
            "maxFragmentCount": 6
          },
          {
            "type": "Fragment",
            "description": "Pyridine ring",
            "fragmentCount": 1,
            "coefficient": -0.01874000020325184,
            "totalCoefficient": -0.01874000020325184,
            "trainingCount": 8,
            "maxFragmentCount": 1
          },
          {
            "type": "Fragment",
            "description": "Phosphate ester",
            "fragmentCount": 1,
            "coefficient": 0.4653500020503998,
            "totalCoefficient": 0.4653500020503998,
            "trainingCount": 7,
            "maxFragmentCount": 1
          },
          {
            "type": "Molecular Weight",
            "description": "Molecular Weight Parameter",
            "fragmentCount": 0,
            "coefficient": 0.0,
            "totalCoefficient": -0.5058095455169678,
            "trainingCount": 0,
            "maxFragmentCount": 0
          },
          {
            "type": "Constant",
            "description": "Equation Constant",
            "fragmentCount": 0,
            "coefficient": 0.0,
            "totalCoefficient": 3.8477370738983154,
            "trainingCount": 0,
            "maxFragmentCount": 0
          }
        ]
      },
      {
        "name": "MITI Linear Model Prediction",
        "value": -0.07246652248431928,
        "factors": [
          {
            "type": "Fragment",
            "description": "Aromatic chloride   [-CL]",
            "fragmentCount": 3,
            "coefficient": -0.039170000702142715,
            "totalCoefficient": -0.11751000583171844,
            "trainingCount": 83,
            "maxFragmentCount": 6
          },
          {
            "type": "Fragment",
            "description": "Pyridine ring",
            "fragmentCount": 1,
            "coefficient": -0.008840000256896019,
            "totalCoefficient": -0.008840000256896019,
            "trainingCount": 17,
            "maxFragmentCount": 1
          },
          {
            "type": "Fragment",
            "description": "Phosphate ester",
            "fragmentCount": 1,
            "coefficient": -0.07896000146865845,
            "totalCoefficient": -0.07896000146865845,
            "trainingCount": 14,
            "maxFragmentCount": 2
          },
          {
            "type": "Fragment",
            "description": "Aromatic-H",
            "fragmentCount": 1,
            "coefficient": 4.030000127386302E-4,
            "totalCoefficient": 4.030000127386302E-4,
            "trainingCount": 462,
            "maxFragmentCount": 22
          },
          {
            "type": "Fragment",
            "description": "Methyl  [-CH3]",
            "fragmentCount": 2,
            "coefficient": 0.0399399995803833,
            "totalCoefficient": 0.0798799991607666,
            "trainingCount": 517,
            "maxFragmentCount": 24
          },
          {
            "type": "Fragment",
            "description": "-CH2-  [linear]",
            "fragmentCount": 2,
            "coefficient": 0.025529999285936356,
            "totalCoefficient": 0.05105999857187271,
            "trainingCount": 407,
            "maxFragmentCount": 56
          },
          {
            "type": "Molecular Weight",
            "description": "Molecular Weight Parameter",
            "fragmentCount": 0,
            "coefficient": 0.0,
            "totalCoefficient": -0.5528734922409058,
            "trainingCount": 0,
            "maxFragmentCount": 0
          },
          {
            "type": "Constant",
            "description": "Equation Constant",
            "fragmentCount": 0,
            "coefficient": 0.0,
            "totalCoefficient": 0.5543739795684814,
            "trainingCount": 0,
            "maxFragmentCount": 0
          }
        ]
      },
      {
        "name": "MITI Non-Linear Model Prediction",
        "value": 8.037234702129172E-4,
        "factors": [
          {
            "type": "Fragment",
            "description": "Aromatic chloride   [-CL]",
            "fragmentCount": 3,
            "coefficient": -0.7609000205993652,
            "totalCoefficient": -2.2827000617980957,
            "trainingCount": 83,
            "maxFragmentCount": 6
          },
          {
            "type": "Fragment",
            "description": "Pyridine ring",
            "fragmentCount": 1,
            "coefficient": -0.30156999826431274,
            "totalCoefficient": -0.30156999826431274,
            "trainingCount": 17,
            "maxFragmentCount": 1
          },
          {
            "type": "Fragment",
            "description": "Phosphate ester",
            "fragmentCount": 1,
            "coefficient": -1.1117500066757202,
            "totalCoefficient": -1.1117500066757202,
            "trainingCount": 14,
            "maxFragmentCount": 2
          },
          {
            "type": "Fragment",
            "description": "Aromatic-H",
            "fragmentCount": 1,
            "coefficient": 0.03418999910354614,
            "totalCoefficient": 0.03418999910354614,
            "trainingCount": 462,
            "maxFragmentCount": 22
          },
          {
            "type": "Fragment",
            "description": "Methyl  [-CH3]",
            "fragmentCount": 2,
            "coefficient": 0.23510999977588654,
            "totalCoefficient": 0.47021999955177307,
            "trainingCount": 517,
            "maxFragmentCount": 24
          },
          {
            "type": "Fragment",
            "description": "-CH2-  [linear]",
            "fragmentCount": 2,
            "coefficient": 0.2345000058412552,
            "totalCoefficient": 0.4690000116825104,
            "trainingCount": 407,
            "maxFragmentCount": 56
          },
          {
            "type": "Molecular Weight",
            "description": "Molecular Weight Parameter",
            "fragmentCount": 0,
            "coefficient": 0.0,
            "totalCoefficient": -6.065131187438965,
            "trainingCount": 0,
            "maxFragmentCount": 0
          }
        ]
      },
      {
        "name": "Anaerobic Model Prediction",
        "value": 0.5947483517229557,
        "factors": [
          {
            "type": "Fragment",
            "description": "Aromatic chloride   [-CL]",
            "fragmentCount": 3,
            "coefficient": -0.4022722840309143,
            "totalCoefficient": -1.2068169116973877,
            "trainingCount": 15,
            "maxFragmentCount": 3
          },
          {
            "type": "Fragment",
            "description": "Pyridine ring",
            "fragmentCount": 1,
            "coefficient": 0.641066312789917,
            "totalCoefficient": 0.641066312789917,
            "trainingCount": 1,
            "maxFragmentCount": 1
          },
          {
            "type": "Fragment",
            "description": "Phosphate ester",
            "fragmentCount": 1,
            "coefficient": 0.5270094275474548,
            "totalCoefficient": 0.5270094275474548,
            "trainingCount": 3,
            "maxFragmentCount": 1
          },
          {
            "type": "Fragment",
            "description": "Aromatic-H",
            "fragmentCount": 1,
            "coefficient": -0.09543013572692871,
            "totalCoefficient": -0.09543013572692871,
            "trainingCount": 94,
            "maxFragmentCount": 13
          },
          {
            "type": "Fragment",
            "description": "Methyl  [-CH3]",
            "fragmentCount": 2,
            "coefficient": -0.07957218587398529,
            "totalCoefficient": -0.15914437174797058,
            "trainingCount": 86,
            "maxFragmentCount": 4
          },
          {
            "type": "Fragment",
            "description": "-CH2-  [linear]",
            "fragmentCount": 2,
            "coefficient": 0.02598983235657215,
            "totalCoefficient": 0.0519796647131443,
            "trainingCount": 67,
            "maxFragmentCount": 44
          },
          {
            "type": "Constant",
            "description": "Equation Constant",
            "fragmentCount": 0,
            "coefficient": 0.0,
            "totalCoefficient": 0.8360843658447266,
            "trainingCount": 0,
            "maxFragmentCount": 0
          }
        ]
      }
    ],
    "notes": "",
    "output": "SMILES : CCOP(\u003dS)(OCC)Oc1nc(c(cc1Cl)Cl)Cl\nMOL FOR: C9 H11 Cl3 N1 O3 P1 S1 \nMOL WT : 350.59\n--------------------------- BIOWIN v4.10 Results ----------------------------\n\n   Biowin1 (Linear Model Prediction)    :  Does Not Biodegrade Fast\n   Biowin2 (Non-Linear Model Prediction):  Biodegrades Fast\n   Biowin3 (Ultimate Biodegradation Timeframe):  Recalcitrant\n   Biowin4 (Primary  Biodegradation Timeframe):  Days-Weeks\n   Biowin5 (MITI Linear Model Prediction)    :  Not Readily Degradable\n   Biowin6 (MITI Non-Linear Model Prediction):  Not Readily Degradable\n   Biowin7 (Anaerobic Model Prediction):  Biodegrades Fast\n   Ready Biodegradability Prediction:  NO\n\n------+-----+--------------------------------------------+---------+---------\n TYPE | NUM |       Biowin1 FRAGMENT DESCRIPTION         |  COEFF  |  VALUE  \n------+-----+--------------------------------------------+---------+---------\n Frag |  3  |  Aromatic chloride   [-CL]                 | -0.1824 | -0.5473\n Frag |  1  |  Pyridine ring                             | -0.1546 | -0.1546\n Frag |  1  |  Phosphate ester                           |  0.3139 |  0.3139\n MolWt|  *  |  Molecular Weight Parameter                |         | -0.1669\n Const|  *  |  Equation Constant                         |         |  0.7475\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n   RESULT   |    Biowin1 (Linear Biodeg Probability)     |         |  0.1928\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n\n------+-----+--------------------------------------------+---------+---------\n TYPE | NUM |       Biowin2 FRAGMENT DESCRIPTION         |  COEFF  |  VALUE  \n------+-----+--------------------------------------------+---------+---------\n Frag |  3  |  Aromatic chloride   [-CL]                 | -2.0155 | -6.0465\n Frag |  1  |  Pyridine ring                             | -1.6381 | -1.6381\n Frag |  1  |  Phosphate ester                           | 44.4087 | 44.4087\n MolWt|  *  |  Molecular Weight Parameter                |         | -4.9783\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n   RESULT   |  Biowin2 (Non-Linear Biodeg Probability)   |         |  1.0000\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n\n A Probability Greater Than or Equal to 0.5 indicates --\u003e Biodegrades Fast\n A Probability Less Than 0.5 indicates --\u003e Does NOT Biodegrade Fast\n\n------+-----+--------------------------------------------+---------+---------\n TYPE | NUM |       Biowin3 FRAGMENT DESCRIPTION         |  COEFF  |  VALUE  \n------+-----+--------------------------------------------+---------+---------\n Frag |  3  |  Aromatic chloride   [-CL]                 | -0.2066 | -0.6198\n Frag |  1  |  Pyridine ring                             | -0.2142 | -0.2142\n Frag |  1  |  Phosphate ester                           |  0.1537 |  0.1537\n MolWt|  *  |  Molecular Weight Parameter                |         | -0.7747\n Const|  *  |  Equation Constant                         |         |  3.1992\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n   RESULT   |  Biowin3 (Survey Model - Ultimate Biodeg)  |         |  1.7442\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n\n------+-----+--------------------------------------------+---------+---------\n TYPE | NUM |       Biowin4 FRAGMENT DESCRIPTION         |  COEFF  |  VALUE  \n------+-----+--------------------------------------------+---------+---------\n Frag |  3  |  Aromatic chloride   [-CL]                 | -0.1653 | -0.4960\n Frag |  1  |  Pyridine ring                             | -0.0187 | -0.0187\n Frag |  1  |  Phosphate ester                           |  0.4654 |  0.4654\n MolWt|  *  |  Molecular Weight Parameter                |         | -0.5058\n Const|  *  |  Equation Constant                         |         |  3.8477\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n   RESULT   |   Biowin4 (Survey Model - Primary Biodeg)  |         |  3.2925\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n\n Result Classification:   5.00 -\u003e hours     4.00 -\u003e days    3.00 -\u003e weeks\n  (Primary \u0026 Ultimate)    2.00 -\u003e months    1.00 -\u003e longer\n\n------+-----+--------------------------------------------+---------+---------\n TYPE | NUM |       Biowin5 FRAGMENT DESCRIPTION         |  COEFF  |  VALUE  \n------+-----+--------------------------------------------+---------+---------\n Frag |  3  |  Aromatic chloride   [-CL]                 | -0.0392 | -0.1175\n Frag |  1  |  Pyridine ring                             | -0.0088 | -0.0088\n Frag |  1  |  Phosphate ester                           | -0.0790 | -0.0790\n Frag |  1  |  Aromatic-H                                |  0.0004 |  0.0004\n Frag |  2  |  Methyl  [-CH3]                            |  0.0399 |  0.0799\n Frag |  2  |  -CH2-  [linear]                           |  0.0255 |  0.0511\n MolWt|  *  |  Molecular Weight Parameter                |         | -0.5529\n Const|  *  |  Equation Constant                         |         |  0.5544\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n   RESULT   |  Biowin5 (MITI Linear Biodeg Probability)  |         | -0.0725\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n\n------+-----+--------------------------------------------+---------+---------\n TYPE | NUM |       Biowin6 FRAGMENT DESCRIPTION         |  COEFF  |  VALUE  \n------+-----+--------------------------------------------+---------+---------\n Frag |  3  |  Aromatic chloride   [-CL]                 | -0.7609 | -2.2827\n Frag |  1  |  Pyridine ring                             | -0.3016 | -0.3016\n Frag |  1  |  Phosphate ester                           | -1.1118 | -1.1118\n Frag |  1  |  Aromatic-H                                |  0.0342 |  0.0342\n Frag |  2  |  Methyl  [-CH3]                            |  0.2351 |  0.4702\n Frag |  2  |  -CH2-  [linear]                           |  0.2345 |  0.4690\n MolWt|  *  |  Molecular Weight Parameter                |         | -6.0651\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n   RESULT   |Biowin6 (MITI Non-Linear Biodeg Probability)|         |  0.0008\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n\n A Probability Greater Than or Equal to 0.5 indicates --\u003e Readily Degradable\n A Probability Less Than 0.5 indicates --\u003e NOT Readily Degradable\n\n\n------+-----+--------------------------------------------+---------+---------\n TYPE | NUM |       Biowin7 FRAGMENT DESCRIPTION         |  COEFF  |  VALUE  \n------+-----+--------------------------------------------+---------+---------\n Frag |  3  |  Aromatic chloride   [-CL]                 | -0.4023 | -1.2068\n Frag |  1  |  Pyridine ring                             |  0.6411 |  0.6411\n Frag |  1  |  Phosphate ester                           |  0.5270 |  0.5270\n Frag |  1  |  Aromatic-H                                | -0.0954 | -0.0954\n Frag |  2  |  Methyl  [-CH3]                            | -0.0796 | -0.1591\n Frag |  2  |  -CH2-  [linear]                           |  0.0260 |  0.0520\n Const|  *  |  Equation Constant                         |         |  0.8361\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n   RESULT   |   Biowin7 (Anaerobic Linear Biodeg Prob)   |         |  0.5947\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n\n A Probability Greater Than or Equal to 0.5 indicates --\u003e Biodegrades Fast\n A Probability Less Than 0.5 indicates --\u003e Does NOT Biodegrade Fast\n\nReady Biodegradability Prediction: (YES or NO)\n----------------------------------------------\n Criteria for the YES or NO prediction:  If the Biowin3 (ultimate survey\n model) result is \"weeks\" or faster (i.e. \"days\", \"days to weeks\", or\n \"weeks\" AND the Biowin5 (MITI linear model) probability is \u003e\u003d 0.5, then\n the prediction is YES (readily biodegradable).  If this condition is not\n satisfied, the prediction is NO (not readily biodegradable).  This method\n is based on application of Bayesian analysis to ready biodegradation data\n (see Help).  Biowin5 and 6 also predict ready biodegradability, but for\n degradation in the OECD301C test only; using data from the Chemicals\n Evaluation and Research Institute Japan (CERIJ) database.\n\n"
  },
  "hydrocarbonBiodegradationRate": {
    "parameters": {
      "smiles": "CCOP(\u003dS)(OCC)OC1\u003dNC(\u003dC(C\u003dC1Cl)Cl)Cl",
      "cas": "002921-88-2"
    },
    "estimatedValue": {
      "model": {
        "halfLifeDays": null,
        "logHalfLifeDays": null,
        "factors": [],
        "notes": "  NO Estimate Possible ... Structure NOT a Hydrocarbon\n    (Contains atoms other than C, H or S (-S-))\n",
        "output": "SMILES : CCOP(\u003dS)(OCC)Oc1nc(c(cc1Cl)Cl)Cl\nMOL FOR: C9 H11 CL3 N1 O3 P1 S1 \nMOL WT : 350.59\n-------------------------- BioHCwin v1.01 Results ---------------------------\n\n  NO Estimate Possible ... Structure NOT a Hydrocarbon\n    (Contains atoms other than C, H or S (-S-))\n"
      },
      "value": null,
      "units": "days",
      "valueType": "ESTIMATED"
    },
    "selectedValue": {
      "value": null,
      "units": "days",
      "valueType": "ESTIMATED"
    }
  },
  "aerosolAdsorptionFraction": {
    "parameters": {
      "logKoa": {
        "value": 8.946584506789835,
        "units": "",
        "valueType": "ESTIMATED"
      },
      "subcooledVaporPressure": {
        "value": 2.2874432943353895E-6,
        "units": "",
        "valueType": "ESTIMATED"
      }
    },
    "estimatedValue": {
      "model": {
        "mackayParticleGasPartitionCoefficient": 0.009836309409601044,
        "koaParticleGasPartitionCoefficient": 2.1706235312488842E-4,
        "mackayAdsorptionFraction": 0.440373081748814,
        "koaAdsorptionFraction": 0.0170685923444852,
        "jungePankowAdsorptionFraction": 0.26214917274468347
      },
      "value": 0.440373081748814,
      "units": "",
      "valueType": "ESTIMATED"
    },
    "selectedValue": {
      "value": 0.440373081748814,
      "units": "",
      "valueType": "ESTIMATED"
    }
  },
  "atmosphericHalfLife": {
    "parameters": {
      "smiles": "CCOP(\u003dS)(OCC)OC1\u003dNC(\u003dC(C\u003dC1Cl)Cl)Cl",
      "cas": "002921-88-2",
      "hydroxylRadicalConcentration": 1500000.0,
      "ozoneConcentration": 7.0E11,
      "twelveHourDay": true
    },
    "estimatedValue": {
      "model": {
        "models": [
          {
            "type": "Hydroxyl Radical Reaction",
            "rateConstant": 9.168490600585937E-11,
            "halfLifeHours": 1.3999234437942505,
            "factors": [
              {
                "type": "Hydrogen Abstraction",
                "value": 38.62855911254883,
                "unit": "E-12 cm3/molecule-sec"
              },
              {
                "type": "Reaction with N, S and -OH",
                "value": 53.0,
                "unit": "E-12 cm3/molecule-sec"
              },
              {
                "type": "Addition to Triple Bonds",
                "value": 0.0,
                "unit": "E-12 cm3/molecule-sec"
              },
              {
                "type": "Addition to Olefinic Bonds",
                "value": 0.0,
                "unit": "E-12 cm3/molecule-sec"
              },
              {
                "type": "Addition to Aromatic Rings",
                "value": 0.056353382766246796,
                "unit": "E-12 cm3/molecule-sec"
              },
              {
                "type": "Addition to Fused Rings",
                "value": 0.0,
                "unit": "E-12 cm3/molecule-sec"
              }
            ]
          },
          {
            "type": "Ozone Reaction",
            "rateConstant": 0.0,
            "halfLifeHours": 0.0,
            "factors": null
          },
          {
            "type": "Overall Reaction",
            "rateConstant": 91.68490600585938,
            "halfLifeHours": 1.3999234437942505,
            "factors": null
          }
        ],
        "notes": "** Designates Estimation(s) Using ASSUMED Value(s)\n               ******  NO OZONE REACTION ESTIMATION ******\n               (ONLY Olefins and Acetylenes are Estimated)",
        "output": "SMILES : CCOP(\u003dS)(OCC)Oc1nc(c(cc1Cl)Cl)Cl\nMOL FOR: C9 H11 Cl3 N1 O3 P1 S1 \nMOL WT : 350.59\n------------------- SUMMARY (AOP v1.93): HYDROXYL RADICALS (25 deg C) --------\nHydrogen Abstraction       \u003d  38.6286 E-12 cm3/molecule-sec\nReaction with N, S and -OH \u003d  53.0000 E-12 cm3/molecule-sec\nAddition to Triple Bonds   \u003d   0.0000 E-12 cm3/molecule-sec\nAddition to Olefinic Bonds \u003d   0.0000 E-12 cm3/molecule-sec\n**Addition to Aromatic Rings \u003d   0.0564 E-12 cm3/molecule-sec\nAddition to Fused Rings    \u003d   0.0000 E-12 cm3/molecule-sec\n\n   OVERALL OH Rate Constant \u003d  91.6849 E-12 cm3/molecule-sec\n   HALF-LIFE \u003d     0.117 Days (12-hr day; 1.500E6 OH/cm3)\n   HALF-LIFE \u003d     1.400 Hrs\n........................  ** Designates Estimation(s) Using ASSUMED Value(s)\n------------------- SUMMARY (AOP v1.93): OZONE REACTION (25 deg C) -----------\n\n               ******  NO OZONE REACTION ESTIMATION ******\n               (ONLY Olefins and Acetylenes are Estimated)\n\n\nHydrogen Abstraction Calculation:\n Kprim \u003d 0.136 F(-CH2-)\u003d0.136(1.230)\u003d 0.167\n Ksec  \u003d 0.934 F(-OP-)F(-CH3)\u003d0.934(20.500)(1.000)\u003d 19.147\n Ksec  \u003d 0.934 F(-CH3)F(-OP-)\u003d0.934(1.000)(20.500)\u003d 19.147\n Kprim \u003d 0.136 F(-CH2-)\u003d0.136(1.230)\u003d 0.167\n H Abstraction TOTAL \u003d 38.629 E-12 cm3/molecule-sec\n\n\nReaction Rates With Nitrogen, Sulfur and -OH:\n K(P\u003dS) \u003d  53.000 E-12 cm3/molecule-sec\n\n\nOH Addition to Aromatic Rings Calculation:\nEs+ \u003d sm+(-O-P **) + sm+(-CL) + sp+(-CL) + sp+(-CL) +  \u003d 0.727\n Most negative Es+ \u003d 0.727\n Log Kar \u003d -12.432 - 1.34(Es+) cm3/molecule-sec\n            where -12.432 is the measured parent value for pyridine\n  Ring #1 Kar \u003d 0.0564 E-12 cm3/molecule-sec\n TOTAL Kar \u003d  0.0564 E-12 cm3/molecule-sec\n   ...................................ASSUMED Values designated by: **\n"
      },
      "value": 1.3999234437942505,
      "units": "hours",
      "valueType": "ESTIMATED"
    },
    "estimatedHydroxylRadicalReactionRateConstant": {
      "model": {
        "type": "Hydroxyl Radical Reaction",
        "rateConstant": 9.168490600585937E-11,
        "halfLifeHours": 1.3999234437942505,
        "factors": [
          {
            "type": "Hydrogen Abstraction",
            "value": 38.62855911254883,
            "unit": "E-12 cm3/molecule-sec"
          },
          {
            "type": "Reaction with N, S and -OH",
            "value": 53.0,
            "unit": "E-12 cm3/molecule-sec"
          },
          {
            "type": "Addition to Triple Bonds",
            "value": 0.0,
            "unit": "E-12 cm3/molecule-sec"
          },
          {
            "type": "Addition to Olefinic Bonds",
            "value": 0.0,
            "unit": "E-12 cm3/molecule-sec"
          },
          {
            "type": "Addition to Aromatic Rings",
            "value": 0.056353382766246796,
            "unit": "E-12 cm3/molecule-sec"
          },
          {
            "type": "Addition to Fused Rings",
            "value": 0.0,
            "unit": "E-12 cm3/molecule-sec"
          }
        ]
      },
      "value": 9.168490600585937E-11,
      "units": "cm3/molecule-sec",
      "valueType": "ESTIMATED"
    },
    "estimatedOzoneReactionRateConstant": {
      "model": {
        "type": "Ozone Reaction",
        "rateConstant": 0.0,
        "halfLifeHours": 0.0,
        "factors": null
      },
      "value": 0.0,
      "units": "cm3/molecule-sec",
      "valueType": "ESTIMATED"
    },
    "experimentalHydroxylRadicalReactionRateConstantValues": [],
    "experimentalOzoneReactionRateConstantValues": [],
    "experimentalNitrateReactionRateConstantValues": [],
    "selectedHydroxylRadicalReactionRateConstant": {
      "value": 9.168490600585937E-11,
      "units": "cm3/molecule-sec",
      "valueType": "ESTIMATED"
    },
    "selectedOzoneReactionRateConstantValues": {
      "value": 0.0,
      "units": "cm3/molecule-sec",
      "valueType": "ESTIMATED"
    }
  },
  "logKoc": {
    "parameters": {
      "smiles": "CCOP(\u003dS)(OCC)OC1\u003dNC(\u003dC(C\u003dC1Cl)Cl)Cl",
      "cas": "002921-88-2",
      "logKow": {
        "value": 4.96,
        "units": null,
        "valueType": "EXPERIMENTAL"
      }
    },
    "experimentalValues": [
      {
        "author": "Schuurmann,G et al",
        "year": 2006,
        "order": 1,
        "value": 3.7,
        "units": "L/kg",
        "valueType": "EXPERIMENTAL"
      }
    ],
    "estimatedValue": {
      "model": {
        "logKoc": 3.862281322479248,
        "models": [
          {
            "firstOrderMCI": 8.414833068847656,
            "name": "MCI",
            "factors": [
              {
                "fragmentCount": 1,
                "trainingCount": 30,
                "maxFragmentCount": 2,
                "description": "OrganoPhosphorus [P\u003dS]  ...............",
                "coefficient": -1.159919023513794,
                "totalCoefficient": -1.159919023513794
              },
              {
                "fragmentCount": 1,
                "trainingCount": 12,
                "maxFragmentCount": 1,
                "description": "Pyridine ring .........................",
                "coefficient": -0.3080349862575531,
                "totalCoefficient": -0.3080349862575531
              },
              {
                "fragmentCount": 0,
                "trainingCount": 42,
                "maxFragmentCount": 1,
                "description": "Poly-Chlorinated Aromatic .............",
                "coefficient": 0.3437826931476593,
                "totalCoefficient": 0.3437826931476593
              }
            ],
            "nonCorrectedLogKoc": 4.986452579498291,
            "correctedLogKoc": 3.862281322479248,
            "koc": 7282.513671875
          },
          {
            "logKow": 4.960000038146973,
            "name": "Kow",
            "factors": [
              {
                "fragmentCount": 1,
                "trainingCount": 0,
                "maxFragmentCount": 0,
                "description": "OrganoPhosphorus [P\u003dS]  ...............",
                "coefficient": -0.09172499924898148,
                "totalCoefficient": -0.09172499924898148
              },
              {
                "fragmentCount": 1,
                "trainingCount": 0,
                "maxFragmentCount": 0,
                "description": "Pyridine ring .........................",
                "coefficient": 0.1763720065355301,
                "totalCoefficient": 0.1763720065355301
              },
              {
                "fragmentCount": 0,
                "trainingCount": 0,
                "maxFragmentCount": 0,
                "description": "Poly-Chlorinated Aromatic .............",
                "coefficient": 0.14439399540424347,
                "totalCoefficient": 0.14439399540424347
              }
            ],
            "nonCorrectedLogKoc": 3.6686248779296875,
            "correctedLogKoc": 3.8976657390594482,
            "koc": 7900.703125
          }
        ],
        "notes": "",
        "output": "MOL FOR: C9 H11 Cl3 N1 O3 P1 S1 \nMOL WT : 350.59\n---------------------------  KOCWIN v2.01 Results  ---------------------------\n\n  Koc Estimate from MCI:\n  ---------------------\n         First Order Molecular Connectivity Index  ........... :  8.415\n         Non-Corrected Log Koc (0.5213 MCI + 0.60)  .......... :  4.9865\n         Fragment Correction(s):\n                  1   OrganoPhosphorus [P\u003dS]  ...............  : -1.1599\n                  1   Pyridine ring .........................  : -0.3080\n                  *   Poly-Chlorinated Aromatic .............  :  0.3438\n         Corrected Log Koc  .................................. :  3.8623\n\n                         Estimated Koc:  7283  L/kg   \u003c\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n\n  Koc Estimate from Log Kow:\n  -------------------------\n         Log Kow  (User entered   )  ......................... :  4.96\n         Non-Corrected Log Koc (0.55313 logKow + 0.9251)  .... :  3.6686\n         Fragment Correction(s):\n                  1   OrganoPhosphorus [P\u003dS]  ...............  : -0.0917\n                  1   Pyridine ring .........................  :  0.1764\n                  *   Poly-Chlorinated Aromatic .............  :  0.1444\n         Corrected Log Koc  .................................. :  3.8977\n\n                         Estimated Koc:  7901  L/kg   \u003c\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n\n"
      },
      "value": 3.862281322479248,
      "units": "L/kg",
      "valueType": "ESTIMATED"
    },
    "selectedValue": {
      "value": 3.7,
      "units": "L/kg",
      "valueType": "EXPERIMENTAL"
    }
  },
  "hydrolysis": {
    "halfLives": [
      {
        "ph": 7.0,
        "value": 0.0,
        "unit": null,
        "baseCatalyzed": true,
        "acidCatalyzed": false,
        "phosphorusEster": false,
        "isomer": null
      },
      {
        "ph": 7.0,
        "value": 0.0,
        "unit": null,
        "baseCatalyzed": false,
        "acidCatalyzed": true,
        "phosphorusEster": false,
        "isomer": null
      },
      {
        "ph": 7.0,
        "value": 0.0,
        "unit": null,
        "baseCatalyzed": false,
        "acidCatalyzed": false,
        "phosphorusEster": false,
        "isomer": null
      },
      {
        "ph": 7.0,
        "value": 178.3363037109375,
        "unit": "days",
        "baseCatalyzed": false,
        "acidCatalyzed": true,
        "phosphorusEster": true,
        "isomer": null
      },
      {
        "ph": 7.0,
        "value": 0.0,
        "unit": null,
        "baseCatalyzed": false,
        "acidCatalyzed": true,
        "phosphorusEster": false,
        "isomer": null
      },
      {
        "ph": 8.0,
        "value": 0.0,
        "unit": null,
        "baseCatalyzed": true,
        "acidCatalyzed": false,
        "phosphorusEster": false,
        "isomer": null
      }
    ],
    "phosphorusEsterHalfLives": [
      {
        "ph": 5.0,
        "value": 178.4478302001953,
        "unit": "days",
        "baseCatalyzed": false,
        "acidCatalyzed": false,
        "phosphorusEster": true,
        "isomer": null
      },
      {
        "ph": 6.0,
        "value": 178.43768310546875,
        "unit": "days",
        "baseCatalyzed": false,
        "acidCatalyzed": false,
        "phosphorusEster": true,
        "isomer": null
      },
      {
        "ph": 7.0,
        "value": 178.3363037109375,
        "unit": "days",
        "baseCatalyzed": false,
        "acidCatalyzed": false,
        "phosphorusEster": true,
        "isomer": null
      },
      {
        "ph": 8.0,
        "value": 177.32875061035156,
        "unit": "days",
        "baseCatalyzed": false,
        "acidCatalyzed": false,
        "phosphorusEster": true,
        "isomer": null
      },
      {
        "ph": 9.0,
        "value": 167.84584045410156,
        "unit": "days",
        "baseCatalyzed": false,
        "acidCatalyzed": false,
        "phosphorusEster": true,
        "isomer": null
      },
      {
        "ph": 10.0,
        "value": 109.3626480102539,
        "unit": "days",
        "baseCatalyzed": false,
        "acidCatalyzed": false,
        "phosphorusEster": true,
        "isomer": null
      }
    ],
    "fragments": [],
    "baseCatalyzedRateConstant": 0.0,
    "acidCatalyzedRateConstant": 0.0,
    "acidCatalyzedRateConstantForTransIsomer": 0.0,
    "neutralRateConstant": -7.347231864929199,
    "output": "SMILES : CCOP(\u003dS)(OCC)Oc1nc(c(cc1Cl)Cl)Cl\nMOL FOR: C9 H11 CL3 N1 O3 P1 S1 \nMOL WT : 350.59\n--------------------------- HYDROWIN v2.00 Results ---------------------------\n\nThiophosphate: S\u003dP-({O,S}-R)3           \n                                           R1{-O-}: -CH2-CH3            \n                                           R1{-O-}: -Phenyl             \n                                           R1{-O-}: -CH2-CH3            \n\n Log Kn (/sec) \u003d -7.3472\n Kn \u003d 4.495e-08/sec \u003d 2.697e-06/min\n    \u003d 0.0001618/hr \u003d 0.003884/day\n\n Log Kb (/M-sec) \u003d -3.5467\n Kb \u003d 0.0002840/M-sec \u003d 0.01704/M-min\n    \u003d 1.022/M-hr \u003d 24.54/M-day\n\n Log Ka : ** Acid-catalyzed rates can NOT be estimated at this time.\n\n Estimated Half-Lives (for Phosphorus Ester): \n -------------------------------------------\n   pH5 :  178.4 days\n   pH6 :  178.4 days\n   pH7 :  178.3 days\n   pH8 :  177.3 days\n   pH9 :  167.8 days\n   pH10:  109.4 days\n"
  },
  "bioconcentration": {
    "parameters": {
      "smiles": "CCOP(\u003dS)(OCC)OC1\u003dNC(\u003dC(C\u003dC1Cl)Cl)Cl",
      "cas": "002921-88-2",
      "logKow": {
        "value": 4.96,
        "units": null,
        "valueType": "EXPERIMENTAL"
      }
    },
    "bioconcentrationFactor": 870.18,
    "experimentalBioconcentrationFactor": 3.1826999187469482,
    "experimentalBioTransformationRate": 0.773,
    "logBioconcentrationFactor": 2.94,
    "biotransformationHalfLife": 0.77,
    "bioaccumulationFactor": 2122.48,
    "logBioaccumulationFactor": 3.33,
    "biotransformationFactors": [
      {
        "type": "Fragmant",
        "description": "Aromatic chloride   [-CL]",
        "fragmentCount": 3,
        "coefficient": 0.3778464198112488,
        "totalCoefficient": 1.1335391998291016,
        "trainingCount": 145,
        "maxFragmentCount": 10
      },
      {
        "type": "Fragmant",
        "description": "Pyridine ring",
        "fragmentCount": 1,
        "coefficient": -0.9021201133728027,
        "totalCoefficient": -0.9021201133728027,
        "trainingCount": 3,
        "maxFragmentCount": 1
      },
      {
        "type": "Fragmant",
        "description": "Phosphate ester (P\u003dS type)",
        "fragmentCount": 1,
        "coefficient": 0.19779671728610992,
        "totalCoefficient": 0.19779671728610992,
        "trainingCount": 18,
        "maxFragmentCount": 1
      },
      {
        "type": "Fragmant",
        "description": "Aromatic-H",
        "fragmentCount": 1,
        "coefficient": 0.2663780748844147,
        "totalCoefficient": 0.2663780748844147,
        "trainingCount": 305,
        "maxFragmentCount": 15
      },
      {
        "type": "Fragmant",
        "description": "Methyl  [-CH3]",
        "fragmentCount": 2,
        "coefficient": 0.2451052963733673,
        "totalCoefficient": 0.4902105927467346,
        "trainingCount": 170,
        "maxFragmentCount": 12
      },
      {
        "type": "Fragmant",
        "description": "-CH2-  [linear]",
        "fragmentCount": 2,
        "coefficient": 0.02418706938624382,
        "totalCoefficient": 0.04837413877248764,
        "trainingCount": 109,
        "maxFragmentCount": 28
      },
      {
        "type": "LogKow",
        "description": "Log Kow \u003d 4.96  used for calc",
        "fragmentCount": 0,
        "coefficient": 0.30734214186668396,
        "totalCoefficient": 1.5244170427322388,
        "trainingCount": 0,
        "maxFragmentCount": 0
      },
      {
        "type": "MolWt",
        "description": "Molecular Weight Parameter",
        "fragmentCount": 0,
        "coefficient": 0.0,
        "totalCoefficient": -0.899017870426178,
        "trainingCount": 0,
        "maxFragmentCount": 0
      },
      {
        "type": "Constant",
        "description": "Equation Constant",
        "fragmentCount": 0,
        "coefficient": 0.0,
        "totalCoefficient": -1.537068486213684,
        "trainingCount": 0,
        "maxFragmentCount": 0
      },
      {
        "type": "Result",
        "description": "LOG Bio Half-Life (days)",
        "fragmentCount": 0,
        "coefficient": 0.0,
        "totalCoefficient": 0.32250916957855225,
        "trainingCount": 0,
        "maxFragmentCount": 0
      },
      {
        "type": "Result",
        "description": "Bio Half-Life (days)",
        "fragmentCount": 0,
        "coefficient": 0.0,
        "totalCoefficient": 2.1014020442962646,
        "trainingCount": 0,
        "maxFragmentCount": 0
      },
      {
        "type": "Note",
        "description": "Bio Half-Life Normalized to 10 g fish at 15 deg C",
        "fragmentCount": 0,
        "coefficient": 0.0,
        "totalCoefficient": 0.0,
        "trainingCount": 0,
        "maxFragmentCount": 0
      }
    ],
    "biotransformationRateConstants": [
      {
        "type": "KMRateConstant",
        "value": 0.32984986901283264,
        "unit": "/day (10 gram fish)"
      },
      {
        "type": "KMRateConstant",
        "value": 0.18548820912837982,
        "unit": "/day (100 gram fish)"
      },
      {
        "type": "KMRateConstant",
        "value": 0.10430768877267838,
        "unit": "/day (1 kg fish)"
      },
      {
        "type": "KMRateConstant",
        "value": 0.05865652486681938,
        "unit": "/day (10 kg fish)"
      }
    ],
    "bioconcentrationFactors": [
      {
        "type": "Correction",
        "description": "No Applicable Correction Factors",
        "fragmentCount": 1,
        "coefficient": 0.0,
        "totalCoefficient": 0.0,
        "trainingCount": 0,
        "maxFragmentCount": 0
      }
    ],
    "biocontrationFactorEquation": "Log BCF \u003d 0.6598 * 4.96 - 0.333 + Correction",
    "biocontrationFactorEquationSum": 2.9396080251693726,
    "arnotGobasBcfBafEstimates": [
      {
        "trophicLevel": "Upper Trophic",
        "trophicLevelNote": null,
        "bioconcentrationFactor": 1859.4316651456538,
        "logBioconcentrationFactor": 3.2693802224930626,
        "bioaccumulationFactor": 2122.479331362487,
        "logBioaccumulationFactor": 3.326843469790466,
        "unit": "L/kg wet-wt"
      },
      {
        "trophicLevel": "Mid Trophic",
        "trophicLevelNote": null,
        "bioconcentrationFactor": 993.0025897738118,
        "logBioconcentrationFactor": 2.9969503811469513,
        "bioaccumulationFactor": 1117.5544134578895,
        "logBioaccumulationFactor": 3.0482686780135384,
        "unit": "L/kg wet-wt"
      },
      {
        "trophicLevel": "Lower Trophic",
        "trophicLevelNote": null,
        "bioconcentrationFactor": 1051.1212893000593,
        "logBioconcentrationFactor": 3.0216528323312892,
        "bioaccumulationFactor": 1445.8223674005192,
        "logBioaccumulationFactor": 3.1601149391573053,
        "unit": "L/kg wet-wt"
      },
      {
        "trophicLevel": "Upper Trophic",
        "trophicLevelNote": "where Km \u003d 0",
        "bioconcentrationFactor": 7361.384323565516,
        "logBioconcentrationFactor": 3.866959491994196,
        "bioaccumulationFactor": 92555.73324914069,
        "logBioaccumulationFactor": 4.966403325750686,
        "unit": "L/kg wet-wt"
      }
    ],
    "notes": "",
    "output": "MOL FOR: C9 H11 Cl3 N1 O3 P1 S1 \nMOL WT : 350.59\n--------------------------------- BCFBAF v3.02 --------------------------------\nSummary Results:\n  Log BCF (regression-based estimate):  2.94  (BCF \u003d 870 L/kg wet-wt)\n  Biotransformation Half-Life (days) :  2.10  (normalized to 10 g fish)\n  Log BAF (Arnot-Gobas upper trophic):  3.33  (BAF \u003d 2.12e+03 L/kg wet-wt)\n\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\nBCF (Bioconcentration Factor):\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\nLog Kow  (estimated)  :  5.11\nLog Kow used by BCF estimates:  4.96\n\nEquation Used to Make BCF estimate:\n   Log BCF \u003d 0.6598 log Kow - 0.333 + Correction\n\n      Correction(s):                    Value\n       No Applicable Correction Factors\n\n   Estimated Log BCF \u003d  2.940  (BCF \u003d 870.2 L/kg wet-wt)\n\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\nWhole Body Primary Biotransformation Rate Estimate for Fish:\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n------+-----+--------------------------------------------+---------+---------\n TYPE | NUM | LOG BIOTRANSFORMATION FRAGMENT DESCRIPTION |  COEFF  |  VALUE  \n------+-----+--------------------------------------------+---------+---------\n Frag |  3  |  Aromatic chloride   [-CL]                 |  0.3778 |  1.1335\n Frag |  1  |  Pyridine ring                             | -0.9021 | -0.9021\n Frag |  1  |  Phosphate ester (P\u003dS type)                |  0.1978 |  0.1978\n Frag |  1  |  Aromatic-H                                |  0.2664 |  0.2664\n Frag |  2  |  Methyl  [-CH3]                            |  0.2451 |  0.4902\n Frag |  2  |  -CH2-  [linear]                           |  0.0242 |  0.0484\n L Kow|  *  |  Log Kow \u003d   4.96 ( used for calc )        |  0.3073 |  1.5244\n MolWt|  *  |  Molecular Weight Parameter                |         | -0.8990\n Const|  *  |  Equation Constant                         |         | -1.5371\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n   RESULT   |        LOG Bio Half-Life (days)            |         |  0.3225\n   RESULT   |            Bio Half-Life (days)            |         |   2.101\n   NOTE     |  Bio Half-Life Normalized to 10 g fish at 15 deg C   |\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d+\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n\nBiotransformation Rate Constant:\n kM (Rate Constant):  0.3298 /day (10 gram fish)   \n kM (Rate Constant):  0.1855 /day (100 gram fish)   \n kM (Rate Constant):  0.1043 /day (1 kg fish)   \n kM (Rate Constant):  0.05866 /day (10 kg fish)   \n\nArnot-Gobas BCF \u0026 BAF Methods (including biotransformation rate estimates):\n   Estimated Log BCF (upper trophic) \u003d  3.269  (BCF \u003d 1859 L/kg wet-wt)\n   Estimated Log BAF (upper trophic) \u003d  3.327  (BAF \u003d 2122 L/kg wet-wt)\n   Estimated Log BCF (mid trophic)   \u003d  2.997  (BCF \u003d 993.0 L/kg wet-wt)\n   Estimated Log BAF (mid trophic)   \u003d  3.048  (BAF \u003d 1118 L/kg wet-wt)\n   Estimated Log BCF (lower trophic) \u003d  3.022  (BCF \u003d 1051 L/kg wet-wt)\n   Estimated Log BAF (lower trophic) \u003d  3.160  (BAF \u003d 1446 L/kg wet-wt)\n\n Arnot-Gobas BCF \u0026 BAF Methods (assuming a biotransformation rate of zero):\n   Estimated Log BCF (upper trophic) \u003d  3.867  (BCF \u003d 7361 L/kg wet-wt)\n   Estimated Log BAF (upper trophic) \u003d  4.966  (BAF \u003d 9.256e+04 L/kg wet-wt)\n\n "
  },
  "waterVolatilization": {
    "parameters": {
      "molecularWeight": 350.5875487105098,
      "henrysLawConstant": {
        "value": 2.5232941425201716E-6,
        "units": "atm-m3/mol",
        "valueType": "ESTIMATED"
      },
      "riverWaterDepthMeters": 1.0,
      "riverWindVelocityMetersPerSecond": 5.0,
      "riverCurrentVelocityMetersPerSecond": 1.0,
      "lakeWindVelocityMetersPerSecond": 0.5,
      "lakeCurrentVelocityMetersPerSecond": 0.05000000074505806,
      "lakeWaterDepthMeters": 1.0
    },
    "riverHalfLifeHours": 436.4904568208122,
    "lakeHalfLifeHours": 4918.734498717316
  },
  "sewageTreatmentModel": {
    "parameters": {
      "molecularWeight": {
        "value": 350.5875487105098,
        "units": "g/mol",
        "valueType": "NONE"
      },
      "henrysLawConstant": {
        "value": 2.5232941425201716E-6,
        "units": "atm-m3/mol",
        "valueType": "ESTIMATED"
      },
      "waterSolubility": {
        "value": 1.6555993556976318,
        "units": "mg/L",
        "valueType": "ESTIMATED"
      },
      "vaporPressure": {
        "value": 2.03E-5,
        "units": "mmHg",
        "valueType": "EXPERIMENTAL"
      },
      "logKow": {
        "value": 4.96,
        "units": null,
        "valueType": "EXPERIMENTAL"
      },
      "biowin3": {
        "value": 1.7441823035478592,
        "units": "",
        "valueType": "NONE"
      },
      "biowin5": {
        "value": -0.07246652248431928,
        "units": "",
        "valueType": "NONE"
      },
      "halfLifeHoursPrimaryClarifier": {
        "value": 10000.0,
        "units": "hours",
        "valueType": "USER_PROVIDED"
      },
      "halfLifeHoursAerationVessel": {
        "value": 10000.0,
        "units": "hours",
        "valueType": "USER_PROVIDED"
      },
      "halfLifeHoursSettlingTank": {
        "value": 10000.0,
        "units": "hours",
        "valueType": "USER_PROVIDED"
      }
    },
    "model": {
      "Influent": {
        "MassPerHour": 10.0,
        "MolPerHour": 0.02852354571223259,
        "Percent": 100.0
      },
      "PrimarySludge": {
        "MassPerHour": 4.707540182736018,
        "MolPerHour": 0.013427573559061212,
        "Percent": 47.07540112484217
      },
      "WasteSludge": {
        "MassPerHour": 2.863464403906033,
        "MolPerHour": 0.008167615660129083,
        "Percent": 28.63464361173837
      },
      "TotalSludge": {
        "MassPerHour": 7.571004586642051,
        "MolPerHour": 0.021595189219190295,
        "Percent": 75.71004473658054
      },
      "PrimVloitilization": {
        "MassPerHour": 2.92568362819678E-4,
        "MolPerHour": 8.345086946304312E-7,
        "Percent": 0.0029256836281967803
      },
      "SettlingVloitilization": {
        "MassPerHour": 7.002616132059806E-4,
        "MolPerHour": 1.9973943836726354E-6,
        "Percent": 0.0070026161320598055
      },
      "AerationOffGas": {
        "MassPerHour": 0.0017432991877553991,
        "MolPerHour": 4.9725073329979346E-6,
        "Percent": 0.01743299161739709
      },
      "TotalAir": {
        "MassPerHour": 0.0027361291637810576,
        "MolPerHour": 7.804410411301002E-6,
        "Percent": 0.027361291377653675
      },
      "PrimBiodeg": {
        "MassPerHour": 0.014136326828097652,
        "MolPerHour": 4.032181584669777E-5,
        "Percent": 0.1413632682809765
      },
      "SettlingBiodeg": {
        "MassPerHour": 0.003719189080732173,
        "MolPerHour": 1.0608445817357549E-5,
        "Percent": 0.03719189080732173
      },
      "AerationBiodeg": {
        "MassPerHour": 0.04897345509486296,
        "MolPerHour": 1.396896564238056E-4,
        "Percent": 0.48973455094862955
      },
      "TotalBiodeg": {
        "MassPerHour": 0.06682897100369278,
        "MolPerHour": 1.9061991808786094E-4,
        "Percent": 0.6682897100369278
      },
      "FinalEffluent": {
        "MassPerHour": 2.359430550706065,
        "MolPerHour": 0.006729932416357788,
        "Percent": 23.59430515495692
      },
      "TotalRemoval": {
        "MassPerHour": 7.640569449293935,
        "MolPerHour": 0.0217936132958748,
        "Percent": 76.40569449293935
      },
      "PrimaryRateConstant": {
        "MassPerHour": 7.119956717360765E-5,
        "MolPerHour": 9733.205078125,
        "Percent": 10000.0
      },
      "AerationRateConstant": {
        "MassPerHour": 7.119956717360765E-5,
        "MolPerHour": 9733.205078125,
        "Percent": 10000.0
      },
      "SettlingRateConstant": {
        "MassPerHour": 7.119956717360765E-5,
        "MolPerHour": 9733.205078125,
        "Percent": 10000.0
      },
      "CalculationVariables": [
        350.5875549316406,
        1.6555993556976318,
        0.0027064441237598658,
        2.6710527123441352E-8,
        2.029999996011611E-5,
        2.523294062125683E-6,
        1.0319522698409855E-4,
        91201.09375,
        4.960000038146973,
        18241.01953125,
        25.0,
        0.0
      ]
    },
    "output": "\nSTP Fugacity Model:  Predicted Fate in a Wastewater Treatment Facility\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\n   (using User entered values)\nPROPERTIES OF: \n-------------\nMolecular weight (g/mol)                               350.588 \nAqueous solubility (mg/l)                              1.65560 \nVapour pressure (Pa)                                   0.00270644 \n                (atm)                                  2.67105E-08 \n                (mm Hg)                                2.03000E-05 \nHenry \u0027s law constant (Atm-m3/mol)                     2.52329E-06 \nAir-water partition coefficient                        0.000103195 \nOctanol-water partition coefficient (Kow)              91201.1 \nLog Kow                                                4.96000 \nBiomass to water partition coefficient                 18241.0 \nTemperature [deg C]                                    25.0000 \nBiodeg rate constants (h^-1),half life in biomass (h) and in 2000 mg/L MLSS (h):\n          -Primary tank        0.00      9733.21       10000.00\n          -Aeration tank       0.00      9733.21       10000.00\n          -Settling tank       0.00      9733.21       10000.00\n\n STP Overall Chemical Mass Balance:\n ---------------------------------\n                             g/h               mol/h          percent\n \nInfluent                     1.00E+01          2.9E-02        100.00\n \nPrimary sludge               4.71E+00          1.3E-02        47.08\nWaste sludge                 2.86E+00          8.2E-03        28.63\nPrimary volatilization       2.93E-04          8.3E-07         0.00\nSettling volatilization      7.00E-04          2.0E-06         0.01\nAeration off gas             1.74E-03          5.0E-06         0.02\n\nPrimary biodegradation       1.41E-02          4.0E-05         0.14\nSettling biodegradation      3.72E-03          1.1E-05         0.04\nAeration biodegradation      4.90E-02          1.4E-04         0.49\n \nFinal water effluent         2.36E+00          6.7E-03        23.59\n \nTotal removal                7.64E+00          2.2E-02        76.41\nTotal biodegradation         6.68E-02          1.9E-04         0.67\n\n"
  },
  "fugacityModel": {
    "parameters": {
      "henrysLawConstant": {
        "value": 2.5232941425201716E-6,
        "units": "atm-m3/mol",
        "valueType": "ESTIMATED"
      },
      "logKow": {
        "value": 4.96,
        "units": null,
        "valueType": "EXPERIMENTAL"
      },
      "logKoc": {
        "value": 3.7,
        "units": "L/kg",
        "valueType": "EXPERIMENTAL"
      },
      "molecularWeight": {
        "value": 350.5875487105098,
        "units": "g/mol",
        "valueType": "NONE"
      },
      "meltingPoint": {
        "value": 42.0,
        "units": "celsius",
        "valueType": "EXPERIMENTAL"
      },
      "vaporPressure": {
        "value": 2.03E-5,
        "units": "mmHg",
        "valueType": "EXPERIMENTAL"
      },
      "waterSolubility": {
        "value": 1.6555993556976318,
        "units": "mg/L",
        "valueType": "ESTIMATED"
      },
      "atmosphericHydroxylRateConstant": {
        "value": 9.168490600585937E-11,
        "units": "cm3/molecule-sec",
        "valueType": "ESTIMATED"
      },
      "ultimateBiodegradation": {
        "value": 1.7441823035478592,
        "units": "",
        "valueType": "NONE"
      },
      "halfLifeAir": {
        "value": 0.0,
        "units": "hours",
        "valueType": "USER_PROVIDED"
      },
      "halfLifeWater": {
        "value": 0.0,
        "units": "hours",
        "valueType": "USER_PROVIDED"
      },
      "halfLifeSoil": {
        "value": 0.0,
        "units": "hours",
        "valueType": "USER_PROVIDED"
      },
      "halfLifeSediment": {
        "value": 0.0,
        "units": "hours",
        "valueType": "USER_PROVIDED"
      },
      "emissionRateAir": {
        "value": 1000.0,
        "units": "kg/hour",
        "valueType": "USER_PROVIDED"
      },
      "emissionRateWater": {
        "value": 1000.0,
        "units": "kg/hour",
        "valueType": "USER_PROVIDED"
      },
      "emissionRateSoil": {
        "value": 1000.0,
        "units": "kg/hour",
        "valueType": "USER_PROVIDED"
      },
      "emissionRateSediment": {
        "value": 0.0,
        "units": "kg/hour",
        "valueType": "USER_PROVIDED"
      },
      "advectionTimeAir": {
        "value": 100.0,
        "units": "hours",
        "valueType": "USER_PROVIDED"
      },
      "advectionTimeWater": {
        "value": 1000.0,
        "units": "hours",
        "valueType": "USER_PROVIDED"
      },
      "advectionTimeSoil": {
        "value": 0.0,
        "units": "hours",
        "valueType": "USER_PROVIDED"
      },
      "advectionTimeSediment": {
        "value": 50000.0,
        "units": "hours",
        "valueType": "USER_PROVIDED"
      }
    },
    "model": {
      "Air": [
        {
          "MassAmount": 0.029525613756278185,
          "HalfLife": 2.7994429819262034,
          "Emissions": 1000.0
        },
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "Water": [
        {
          "MassAmount": 6.349544768337707,
          "HalfLife": 4320.0,
          "Emissions": 1000.0
        },
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "Soil": [
        {
          "MassAmount": 90.19181218361003,
          "HalfLife": 8640.0,
          "Emissions": 1000.0
        },
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "Sediment": [
        {
          "MassAmount": 3.42911743429598,
          "HalfLife": 38880.0,
          "Emissions": 0.0
        },
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "Persistence": 4477.026197733514,
      "aEmissionArray": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "aAdvectionTimeArray": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "aFugacities": [
        9.688373579707984E-13,
        1.0679195220636637E-11,
        1.4082515765236145E-11,
        2.395489509629532E-11
      ],
      "aReaction": [
        981.6833674173826,
        136.80531418173666,
        971.622348733293,
        8.209188481322803
      ],
      "aAdvection": [
        39.656083887305535,
        852.8123481458907,
        0.0,
        9.211349153068701
      ],
      "aReactionPercent": [
        32.722778913912755,
        4.5601771393912225,
        32.387411624443104,
        0.2736396160440934
      ],
      "aAdvectionPercent": [
        1.321869462910185,
        28.427078271529698,
        0.0,
        0.3070449717689569
      ],
      "aSums": [
        1051.762646131529,
        69.94400729379117,
        30.05599270620884
      ],
      "aTimes": [
        4477.026197733514,
        6400.871741489333,
        14895.619124929686
      ],
      "HalfLifeArray": [
        2.7994429819262034,
        4320.0,
        8640.0,
        38880.0
      ],
      "HalfLifeFactorArray": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "Emission": [
        1000.0,
        1000.0,
        1000.0,
        0.0
      ],
      "AdvectionTimesArray": [
        100.0,
        1000.0,
        0.0,
        50000.0
      ],
      "aNotes": []
    }
  },
  "dermalPermeability": {
    "parameters": {
      "smiles": "CCOP(\u003dS)(OCC)OC1\u003dNC(\u003dC(C\u003dC1Cl)Cl)Cl",
      "logKow": {
        "value": 4.96,
        "units": null,
        "valueType": "EXPERIMENTAL"
      },
      "molecularWeight": {
        "value": 350.5875487105098,
        "units": "g/mol",
        "valueType": "NONE"
      },
      "dermalPermeabilityCoefficient": {
        "value": -999.0,
        "units": "cm/hr",
        "valueType": "USER_PROVIDED"
      },
      "waterConcentrationMgPerLiter": {
        "value": 1.6555993556976318,
        "units": "mg/L",
        "valueType": "ESTIMATED"
      },
      "eventDurationHours": 0.58,
      "fractionAbsorbedWater": 1.0,
      "skinSurfaceAreaCm2": 18000.0,
      "exposureEventsPerDay": 1.0,
      "exposureDurationYears": 30.0,
      "exposureDaysPerYear": 350.0,
      "bodyWeightKg": 70.0,
      "averagingTimeDays": 25550.0
    },
    "dermalPermeabilityCoefficient": 0.03340948530766861,
    "dermalAbsorbedDose": 38655.08151601346,
    "dermalAbsorbedDosePerEvent": 365.7916047163496,
    "lagTimePerEventHours": 9.87024720315288,
    "timeToReachSteadyStateHours": 23.688593287566913,
    "output": "MOL FOR: C9 H11 CL3 N1 O3 P1 S1 \nMOL WT : 350.59\n------------------------------ Dermwin v2.02 ----------------------------------\nLog Kow  (estimated)  :  5.11\nLog Kow (User) :  4.96   (used in Kp calculations)\n\nGENERAL Equation:   log Kp \u003d -2.80 + 0.66 log Kow - 0.0056 MW\n    Kp (predicted): 0.0334  cm/hr\n\nDermally Absorbed Dose per Event for Organic Compounds - Water Contact:\n   Water Conc (mg/cm3): 1.66e+03  (entered by user)\n   Event Duration (hr): 0.580\n   Fraction Absorbed  : 1.0000\n\n   DA(event):  366 mg/cm2-event (using eqn 3.2 \u0026 3.3)\n                   (tau \u003d 9.87 hr,  t* \u003d 23.7 hr)\n\nDermally Absorbed Dose (70.00 kg Human) - Water Contact:\n   DAD:  3.87e+04 mg/kg-day (using eqn 3.1)\n      using:\n        SA: 18000.0 cm2  (skin surface area)\n        EV: 1.00 event/day  (event freq)\n        ED: 30.0 years  (exposure duration)\n        EF: 350.0 day/year  (exposure freq)\n        BW: 70.00 kg  (body weight)\n        AT: 25550.00 days  (averaging time)\n\n"
  },
  "ecosar": {
    "parameters": {
      "smiles": "CCOP(\u003dS)(OCC)OC1\u003dNC(\u003dC(C\u003dC1Cl)Cl)Cl",
      "cas": "002921-88-2",
      "logKow": {
        "value": 4.96,
        "units": null,
        "valueType": "EXPERIMENTAL"
      },
      "waterSolubility": {
        "value": 1.6555993556976318,
        "units": "mg/L",
        "valueType": "ESTIMATED"
      },
      "meltingPoint": {
        "value": 42.0,
        "units": "celsius",
        "valueType": "EXPERIMENTAL"
      },
      "databasePath": "/resources/"
    },
    "modelResults": [
      {
        "qsarClass": "Neutral Organics",
        "organism": "Fish",
        "duration": "96-hr",
        "endpoint": "LC50",
        "concentration": 0.6324383616447449,
        "maxLogKow": 5.0,
        "flags": []
      },
      {
        "qsarClass": "Neutral Organics",
        "organism": "Daphnid",
        "duration": "48-hr",
        "endpoint": "LC50",
        "concentration": 0.47196951508522034,
        "maxLogKow": 5.0,
        "flags": []
      },
      {
        "qsarClass": "Neutral Organics",
        "organism": "Green Algae",
        "duration": "96-hr",
        "endpoint": "EC50",
        "concentration": 1.0883842706680298,
        "maxLogKow": 6.400000095367432,
        "flags": []
      },
      {
        "qsarClass": "Neutral Organics",
        "organism": "Fish",
        "duration": "",
        "endpoint": "ChV",
        "concentration": 0.08533478528261185,
        "maxLogKow": 8.0,
        "flags": []
      },
      {
        "qsarClass": "Neutral Organics",
        "organism": "Daphnid",
        "duration": "",
        "endpoint": "ChV",
        "concentration": 0.09848050028085709,
        "maxLogKow": 8.0,
        "flags": []
      },
      {
        "qsarClass": "Neutral Organics",
        "organism": "Green Algae",
        "duration": "",
        "endpoint": "ChV",
        "concentration": 0.5238535404205322,
        "maxLogKow": 8.0,
        "flags": []
      },
      {
        "qsarClass": "Neutral Organics",
        "organism": "Fish (SW)",
        "duration": "96-hr",
        "endpoint": "LC50",
        "concentration": 0.8104276657104492,
        "maxLogKow": 5.0,
        "flags": []
      },
      {
        "qsarClass": "Neutral Organics",
        "organism": "Mysid",
        "duration": "96-hr",
        "endpoint": "LC50",
        "concentration": 0.0810927078127861,
        "maxLogKow": 5.0,
        "flags": []
      },
      {
        "qsarClass": "Neutral Organics",
        "organism": "Fish (SW)",
        "duration": "",
        "endpoint": "ChV",
        "concentration": 0.5361745357513428,
        "maxLogKow": 8.0,
        "flags": []
      },
      {
        "qsarClass": "Neutral Organics",
        "organism": "Mysid (SW)",
        "duration": "",
        "endpoint": "ChV",
        "concentration": 0.0029156124219298363,
        "maxLogKow": 8.0,
        "flags": []
      },
      {
        "qsarClass": "Neutral Organics",
        "organism": "Earthworm",
        "duration": "14-day",
        "endpoint": "LC50",
        "concentration": 300.63677978515625,
        "maxLogKow": 6.0,
        "flags": [
          "Chemical may not be soluble enough to measure this predicted effect. If the effect level exceeds the water solubility by 10X, typically no effects at saturation (NES) are reported."
        ]
      },
      {
        "qsarClass": "Esters, Monothiophosphates",
        "organism": "Fish",
        "duration": "96-hr",
        "endpoint": "LC50",
        "concentration": 0.050741832703351974,
        "maxLogKow": 5.0,
        "flags": []
      },
      {
        "qsarClass": "Esters, Monothiophosphates",
        "organism": "Daphnid",
        "duration": "48-hr",
        "endpoint": "LC50",
        "concentration": 2.4719175416976213E-4,
        "maxLogKow": 5.0,
        "flags": []
      },
      {
        "qsarClass": "Esters, Monothiophosphates",
        "organism": "Green Algae",
        "duration": "96-hr",
        "endpoint": "EC50",
        "concentration": 0.2144935429096222,
        "maxLogKow": 6.400000095367432,
        "flags": []
      },
      {
        "qsarClass": "Esters, Monothiophosphates",
        "organism": "Fish",
        "duration": "",
        "endpoint": "ChV",
        "concentration": 0.008251501247286797,
        "maxLogKow": 8.0,
        "flags": []
      },
      {
        "qsarClass": "Esters, Monothiophosphates",
        "organism": "Daphnid",
        "duration": "",
        "endpoint": "ChV",
        "concentration": 4.108337088837288E-5,
        "maxLogKow": 8.0,
        "flags": []
      },
      {
        "qsarClass": "Esters, Monothiophosphates",
        "organism": "Green Algae",
        "duration": "",
        "endpoint": "ChV",
        "concentration": 0.09502680599689484,
        "maxLogKow": 8.0,
        "flags": [
          "The toxicity value was estimated through application of acute-to-chronic ratios per methods outlined in the ECOSAR Methodology provided in the ECOSAR Help Documents."
        ]
      },
      {
        "qsarClass": "Esters, Monothiophosphates",
        "organism": "Fish (SW)",
        "duration": "96-hr",
        "endpoint": "LC50",
        "concentration": 0.09153645485639572,
        "maxLogKow": 5.0,
        "flags": []
      },
      {
        "qsarClass": "Halopyrdines ",
        "organism": "Fish",
        "duration": "96-hr",
        "endpoint": "LC50",
        "concentration": 0.7031987905502319,
        "maxLogKow": 5.0,
        "flags": []
      },
      {
        "qsarClass": "Halopyrdines ",
        "organism": "Daphnid",
        "duration": "48-hr",
        "endpoint": "LC50",
        "concentration": 0.6883193850517273,
        "maxLogKow": 5.0,
        "flags": []
      },
      {
        "qsarClass": "Halopyrdines ",
        "organism": "Fish",
        "duration": "",
        "endpoint": "ChV",
        "concentration": 0.015350344590842724,
        "maxLogKow": 8.0,
        "flags": []
      },
      {
        "qsarClass": "Halopyrdines ",
        "organism": "Daphnid",
        "duration": "",
        "endpoint": "ChV",
        "concentration": 0.007043265271931887,
        "maxLogKow": 8.0,
        "flags": [
          "The toxicity value was estimated through application of acute-to-chronic ratios per methods outlined in the ECOSAR Methodology provided in the ECOSAR Help Documents."
        ]
      }
    ],
    "output": "SMILES : CCOP(\u003dS)(OCC)Oc1nc(c(cc1Cl)Cl)Cl\nMOL FOR: C9 H11 CL3 N1 O3 P1 S1 \nMOL WT : 350.59\nLog Kow: 5.108      (EPISuite Kowwin v1.68 Estimate)\nLog Kow: 4.960      (User Entered)\nLog Kow: 4.96       (PhysProp DB exp value - for comparison only)\nMelt Pt: 42.00      (deg C, User Entered for Wat Sol estimate)\nMelt Pt:            (deg C, PhysProp DB exp value for Wat Sol estimate)\nWat Sol: 1.656      (mg/L, EPISuite WSKowwin v1.43 Estimate)\nWat Sol: 1.656      (mg/L, User Entered)\nWat Sol:            (PhysProp DB exp value)\n\n--------------------------------------\nValues used to Generate ECOSAR Profile\n--------------------------------------\nLog Kow: 4.960      (User Entered)\nWat Sol: 1.656      (mg/L, User Entered)\n\n\n------------------------------------------------\nAvailable Measured Data from ECOSAR Training Set\n------------------------------------------------\n\n---------------------------------------\nECOSAR v2.20 Class-specific Estimations\n---------------------------------------\nEsters, Monothiophosphates\nHalopyrdines \n\n ******************************************************************************\n | Not Related to an Existing ECOSAR Class Definition                         |\n |                                                                            |\n | Estimates provided below use the Neutral Organics QSAR equations which     |\n | represent baseline toxicity potential (minimum toxicity) assuming a simple |\n | non-polar narcosis model.  Without empirical data on structurally similar  |\n | chemicals, it is uncertain if this substance will present significantly    |\n | higher toxicity above baseline estimates.                                  |\n ******************************************************************************\n\n                                                                    Predicted\nECOSAR Class                 Organism            Duration  End Pt   mg/L (ppm)\n\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d  \u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d  \u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d  \u003d\u003d\u003d\u003d\u003d\u003d   \u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\nNeutral Organics           : Fish                96-hr     LC50        0.632\nNeutral Organics           : Daphnid             48-hr     LC50        0.472\nNeutral Organics           : Green Algae         96-hr     EC50        1.088\nNeutral Organics           : Fish                          ChV         0.085\nNeutral Organics           : Daphnid                       ChV         0.098\nNeutral Organics           : Green Algae                   ChV         0.524\nNeutral Organics           : Fish (SW)           96-hr     LC50        0.810\nNeutral Organics           : Mysid               96-hr     LC50        0.081\nNeutral Organics           : Fish (SW)                     ChV         0.536\nNeutral Organics           : Mysid (SW)                    ChV         0.003\nNeutral Organics           : Earthworm           14-day    LC50      300.637 *\n\nEsters, Monothiophosphates : Fish                96-hr     LC50        0.051\nEsters, Monothiophosphates : Daphnid             48-hr     LC50     0.000247\nEsters, Monothiophosphates : Green Algae         96-hr     EC50        0.214\nEsters, Monothiophosphates : Fish                          ChV         0.008\nEsters, Monothiophosphates : Daphnid                       ChV      4.11e-05\nEsters, Monothiophosphates : Green Algae                   ChV         0.095 !\nEsters, Monothiophosphates : Fish (SW)           96-hr     LC50        0.092\n\nHalopyrdines               : Fish                96-hr     LC50        0.703\nHalopyrdines               : Daphnid             48-hr     LC50        0.688\nHalopyrdines               : Fish                          ChV         0.015\nHalopyrdines               : Daphnid                       ChV         0.007 !\n\n Note:  * \u003d asterisk designates: Chemical may not be soluble enough to\n        measure this predicted effect. If the effect level exceeds the\n        water solubility by 10X, typically no effects at saturation (NES)\n        are reported.\n\n NOTE:  ! \u003d exclamation designates: The toxicity value was estimated through\n            application of acute-to-chronic ratios per methods outlined in\n            the ECOSAR Methodology Document provided in the ECOSAR Help Menu.\n \n------------------------------\nClass Specific LogKow Cut-Offs\n------------------------------\nIf the log Kow of the chemical is greater than the endpoint specific cut-offs\npresented below, then no effects at saturation are expected for those endpoints.\n\nNeutral Organics:\n----------------\nMaximum LogKow: 5.0 (Fish 96-hr LC50; Daphnid LC50, Mysid LC50)\nMaximum LogKow: 6.0 (Earthworm LC50)\nMaximum LogKow: 6.4 (Green Algae EC50)\nMaximum LogKow: 8.0 (ChV)\n\nEsters, Monothiophosphates:\n--------------------------\nMaximum LogKow: 5.0 (LC50)\nMaximum LogKow: 6.4 (EC50)\nMaximum LogKow: 8.0 (ChV)\n\nHalopyrdines :\n-------------\nMaximum LogKow: 5.0 (LC50)\nMaximum LogKow: 6.4 (EC50)\nMaximum LogKow: 8.0 (ChV)\n\n\n",
    "alerts": [
      "Not Related to an existing ECOSAR class definition. Provided estimates use the neutral organics QSAR equations which represent baseline toxicity potential (minimum toxicity) assuming a simple non-polar narcosis model. Without empirical data on structurally similar chemicals, it is uncertain if this substance will present significantly higher toxicity above baseline estimates."
    ]
  },
  "logKowAnalogs": [
    "002921-88-2",
    "005598-13-0"
  ],
  "analogs": [
    "002921-88-2",
    "005598-13-0"
  ]
};
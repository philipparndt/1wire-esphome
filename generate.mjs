#!/usr/bin/env zx

import {toMqttYaml} from "./mqtt/json/mqtt-temperature.mjs";
import {toSensorYaml} from "./sensors/temperature-sensor.mjs";

const sensors = [
    { "uid": "28.FF3493331801", "topic": "haus/ug/server/raum"	},
    { "uid": "28.517781331401", "topic": "haus/ug/server/rack"	},
    { "uid": "28.FFE629C21604", "topic": "haus/ug/heizung/brauchwasser"	},
    { "uid": "28.FF8D56331802", "topic": "haus/ug/heizung/gas_vl" },
    { "uid": "28.FF3956331801", "topic": "haus/ug/heizung/gas_rl" },
    { "uid": "28.FFF057331801", "topic": "haus/ug/heizung/hk_og_vl" },
    { "uid": "28.FFD618331802", "topic": "haus/ug/heizung/hk_og_rl" },
    { "uid": "28.FFC873B51605", "topic": "haus/ug/heizung/solar_vl"	},
    { "uid": "28.FFD422C21604", "topic": "haus/ug/heizung/solar_rl"	},
    { "uid": "28.FF2D76B51605", "topic": "haus/ug/heizung/hk_eg_vl"	},
    { "uid": "28.FFF2D2C11604", "topic": "haus/ug/heizung/hk_eg_rl"	},
    { "uid": "28.40556F331401", "topic": "haus/ug/lueftung/eingang"	},
    { "uid": "28.D45DB0321401", "topic": "haus/ug/lueftung/ausgang"	},
    { "uid": "28.35AA90331401", "topic": "haus/ug/heizung/raum"	},
    { "uid": "28.763261331401", "topic": "haus/ug/lager/raum"	},
]

await fs.writeFile("./sensors/sensors.yaml", sensors.map(toSensorYaml).join("\n"))
await fs.writeFile("./mqtt/json/sensors.yaml", sensors.map(toMqttYaml).join("\n"))
#!/usr/bin/env zx

import { toMqttYaml } from "./mqtt/json/mqtt-temperature.mjs"
import {topicToID, toSensorYaml} from "./sensors/temperature-sensor.mjs"

const sensors = [
    { "uid": "28.FF349333180144", "topic": "haus/ug/server/raum"	},
    { "uid": "28.517781331401DE", "topic": "haus/ug/server/rack"	},
    { "uid": "28.FFE629C21604d6", "topic": "haus/ug/heizung/brauchwasser"	},
    { "uid": "28.FF8D56331802a2", "topic": "haus/ug/heizung/gas_vl" },
    { "uid": "28.FF395633180110", "topic": "haus/ug/heizung/gas_rl" },
    { "uid": "28.FFF0573318014e", "topic": "haus/ug/heizung/hk_og_vl" },
    { "uid": "28.FFD618331802b2", "topic": "haus/ug/heizung/hk_og_rl" },
    { "uid": "28.FFC873B5160584", "topic": "haus/ug/heizung/solar_vl"	},
    { "uid": "28.FFD422C2160445", "topic": "haus/ug/heizung/solar_rl"	},
    { "uid": "28.FF2D76B516050d", "topic": "haus/ug/heizung/hk_eg_vl"	},
    { "uid": "28.FFF2D2C11604b4", "topic": "haus/ug/heizung/hk_eg_rl"	},
    { "uid": "28.40556F33140195", "topic": "haus/ug/lueftung/eingang"	},
    { "uid": "28.D45DB0321401f6", "topic": "haus/ug/lueftung/ausgang"	},
    { "uid": "28.35AA90331401c4", "topic": "haus/ug/heizung/raum"	},
    { "uid": "28.7632613314019f", "topic": "haus/ug/lager/raum"	},
]

const files = []

for (const sensor of sensors) {
    const id = topicToID(sensor.topic)
    const sensorYaml = toSensorYaml(sensor)
    const file = `./sensors/temperature/${id}.yaml`
    //files.push(`temperature/${id}.yaml`)
    files.push(file)
    await fs.writeFile(file, sensorYaml)
}

//await fs.writeFile("./sensors/temperature.yaml", files.map(file => `  - <<: !include ${file}`).join("\n"))

for (const sensor of sensors) {
    const id = topicToID(sensor.topic)
    const sensorYaml = toMqttYaml(sensor)
    const file = `./mqtt/json/temperature/${id}.yaml`
    files.push(file)
    await fs.writeFile(file, sensorYaml)
}
// await fs.writeFile("./mqtt/json/temperature.yaml", sensors.map(toMqttYaml).join("\n"))
await fs.writeFile("./sensors.yaml", files.map(file => `  - <<: !include ${file}`).join("\n"))
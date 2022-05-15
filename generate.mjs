#!/usr/bin/env zx

import { toMqttYaml } from "./mqtt/json/mqtt-temperature.mjs"
import { topicToID, toSensorYaml} from "./sensors/temperature-sensor.mjs"

const sensors = [
    { "uid": "28.FF3493331801", "topic": "ug/server/raum"	},
    { "uid": "28.517781331401", "topic": "ug/server/rack"	},
    { "uid": "28.FFE629C21604", "topic": "ug/heizung/brauchwasser"	},
    { "uid": "28.FF8D56331802", "topic": "ug/heizung/gas_vl" },
    { "uid": "28.FF3956331801", "topic": "ug/heizung/gas_rl" },
    { "uid": "28.FFF057331801", "topic": "ug/heizung/hk_og_vl" },
    { "uid": "28.FFD618331802", "topic": "ug/heizung/hk_og_rl" },
    { "uid": "28.FFC873B51605", "topic": "ug/heizung/solar_vl"	},
    { "uid": "28.FFD422C21604", "topic": "ug/heizung/solar_rl"	},
    { "uid": "28.FF2D76B51605", "topic": "ug/heizung/hk_eg_vl"	},
    { "uid": "28.FFF2D2C11604", "topic": "ug/heizung/hk_eg_rl"	},
    { "uid": "28.40556F331401", "topic": "ug/lueftung/eingang"	},
    { "uid": "28.D45DB0321401", "topic": "ug/lueftung/ausgang"	},
    { "uid": "28.35AA90331401", "topic": "ug/heizung/raum"	},
    { "uid": "28.763261331401", "topic": "ug/lager/raum"	},
]

for (const sensor of sensors) {
    const id = topicToID(sensor.topic)
    const sensorYaml = toSensorYaml(sensor)
    const file = `./sensors/temperature/${id}.yaml`
    // files.push(file)
    await fs.writeFile(file, sensorYaml)
}

for (const sensor of sensors) {
    const id = topicToID(sensor.topic)
    const sensorYaml = toMqttYaml(sensor)
    const file = `./mqtt/json/temperature/${id}.yaml`
    // files.push(file)
    await fs.writeFile(file, sensorYaml)
}

// await fs.writeFile("./sensors.yaml", files.map(file => `  - <<: !include ${file}`).join("\n"))

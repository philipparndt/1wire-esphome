 const toEspHomeId = (uid) => {
    const id = uid.replace(".", "")
    let split = id.match(/.{2}/g)
    split = split.reverse()

    return `0x${split.join("")}`
}

export const topicToID = (topic) => {
    return topic.replaceAll("/", "_")
}

export const toSensorYaml = (sensor) => {
    return `
- platform: dallas
  address: ${toEspHomeId(sensor.uid)}
  name: "${sensor.topic}"
  id: ${topicToID(sensor.topic)}
  internal: true`
}
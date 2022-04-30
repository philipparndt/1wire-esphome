const topicToID = (topic) => {
    return topic.replaceAll("/", "_")
}

export const toMqttYaml = (sensor) => {
    let id = topicToID(sensor.topic)
    return `
- platform: uptime
  id: publish_${id}_json
  update_interval: \${publish_temperature_interval}
  on_value:
    if:
      condition:
        lambda: 'return !isnan(id(${id}).state);'
      then:
        - mqtt.publish_json:
            topic: \${base_topic}/${sensor.topic}
            retain: True
            payload: |-
              root["temperature"] = round(id(${id}).state * 100) / 100;`
}
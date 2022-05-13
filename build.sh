#!/bin/bash
docker run --rm -v "${PWD}":/config -it esphome/esphome compile app.yaml
cp .esphome/build/1wire/.pioenvs/1wire/firmware.bin ./firmware.bin
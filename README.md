# 1-wire esphome

Connect 1-wire sensors to MQTT using a ESP32 POE

- [ESP32-POE](https://www.olimex.com/Products/IoT/ESP32/ESP32-POE/open-source-hardware)
- [Temparature sensors (1-wire)](https://www.amazon.de/gp/product/B075FV3PQR)
- [RJ12 6P6C](https://www.amazon.de/gp/product/B00EZ7J45G)
- [UEXT 1-wire PCB](https://oshwlab.com/pa.philipp.arndt/uext-1-wire-small)

Features:
- POE power supply
- Ethernet
- Custom MQTT messages
- Packed in an [electrical junction box](https://www.amazon.de/Kopp-347114008-Abzweigdose-Aufputz-Feuchtraum-Klemmleiste/dp/B00BGT6MK6)

# Configure sensors

Configure your 1-wire sensors in `generate.mjs` and execute the script.

# Messages

// TBD

# Installation

## IP address
- Have a look at your switch to figure out the MAC address
- Assign a static IP to the MAC address
- Put the IP address in to `./config/ethernet.yaml`

## First upload

- Run `./build.sh` to build the firmware. You can find the result in `./firmware.bin`
- Use [esphome-flasher](https://github.com/esphome/esphome-flasher/releases) to flash the image
  Note that the MAC address that will be printed in this tool is the Wifi address of the ESP32
  and not the Ethernet address.

## Update the firmware

Run `./run.sh` to do a OTA update.

## Get 1-wire sensor addresses

Set the log level to `DEBUG` in `app.yaml` and observe the output of the console.
There will be a list of sensor addresses.

https://www.youtube.com/watch?v=XvA3UMDDrAQ
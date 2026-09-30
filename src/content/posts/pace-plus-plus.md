---
title: Pace++
order: 4
image: /images/paceplusplus.png
repo: https://github.com/PacePlusPlus/PacePlusPlus
---

Pace++ is a simulated pacemaker system built to visually and functionally represent the features of modern pacemakers today, strictly following Boston Scientific specifications. It features 8 unique pacing modes, real-time ECG plotting, encrypted local data storage, and serial communication with a K64F / STM32 hardware board.

## Pacemaker Modeling with Simulink
Central to modelling our pacemaker's functionality was the use of MATLAB Simulink, which allowed us to generate code iteratively and quickly flash our code into our board. Through user-set parameters, our Simulink code allow for pacing of both the atrium and ventricle alongside rate adaptive pacing with a in-built accelerometer. All important user-set data and electrocardiogram data was framed. The resulting packet was sent through a micro-usb to the device controller monitor.

![Simulink Stateflow Diagram](/images/Simulink1.jpg)

## Device Controller Monitor (DCM)
Through python's tkinter, we created a secure interface that allows for the modification of the pacemaker. Our GUI allows for:

- Real-time display of the simulated heartbeat
- Patient data to be saved and modified
- Encryption of patient data
- Serial communication to the K64F board

![Electrocardiogram Display Screen](/images/EgramScreen1.png)

## Validation
To test and validate our pacemaker mode function, we employed Heartview, a McMaster created cardiac simulation tool that was pre-flashed onto our board.
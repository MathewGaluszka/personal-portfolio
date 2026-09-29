---
title: Jukebox Robot Arm
order: 1
image: /images/jukeboxrobotarm.jpg
repo: https://github.com/MathewGaluszka/JukeboxRobotArm
---

As an avid vinyl collector, I always wanted a jukebox to automatically play through my collection. However, most jukeboxes can't play 12-inch records, and the ones that do are either known for damaging the records inside or are well into a 5-digit price range. 

So I made my own.

<figure>
  <video src="/videos/JukeboxArm0822.mp4#t=4.17" autoplay muted playsinline controls style="display: block; width: 100%; height: auto; border-radius: 6px;"></video>
  <figcaption>Robot arm working through a pick and place action.</figcaption>
</figure>

## Scope
This project was a massive undertaking as I wanted this to be a one-of-a-kind system built from scratch, incorporating everything that I have learned through my studies and work experience. I went all the way back to basics, working through initial R&D and pulling on knowledge of industrial automation tech to determine the best approach for this project. I started by defining scope and outlining required capabilities, such as payload, speed, and accuracy. Since records are light at around 200g, robot strength and payload were a low concern, and while having an ultra fast robot would be cool, it’s a secondary target that can be dialed in later provided the robot actuators were powerful enough. From the beginning, I knew my biggest problem was going to be accuracy since these records need to be placed on a peg with a 7mm diameter. To make sure the robot could reliably place a record down, I set an accuracy target of **+/- 2mm** on the entire arm. This meant for any given position in range, the robot must be within 2mm of its target position. On top of robot capabilities, I also decided that vacuum suction was going to be the best method of picking a record up. By only interacting with the label on the disk, rather than the edge of the disk, I greatly reduced the risk of scratching the record.

<table>
  <thead>
    <tr>
      <th colspan="3">Tech Stack</th>
    </tr>
    <tr>
      <th>Electrical</th>
      <th>Mechanical</th>
      <th>Software</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>STM32 Microcontroller</td>
      <td>Custom Designed Arm</td>
      <td>Embedded C Firmware</td>
    </tr>
    <tr>
      <td>Custom Shield PCB</td>
      <td>PETG/PA6-GF 3D Prints</td>
      <td>PyQT6 Desktop App</td>
    </tr>
    <tr>
      <td>TMC2209 Drivers</td>
      <td>SCARA Arm Base</td>
      <td>Fully Onboard Control</td>
    </tr>
    <tr>
      <td>Incremental Encoders</td>
      <td>Differential End Effector</td>
      <td>Inverse Kinematics</td>
    </tr>
    <tr>
      <td>Current Sense Homing</td>
      <td>Vacuum Pick/Place</td>
      <td>S-Curve Trajectory</td>
    </tr>
    <tr>
      <td>Int/Ext UART COM</td>
      <td>Off-Shelf Integration</td>
      <td>Python Math Tests</td>
    </tr>
  </tbody>
</table>

## Initial Electrical Tests
With scope defined, I started by planning out the overall electrical/software tech stack, and the first concrete decision I made was that closed-loop motion was a necessity. This means that the robot will always be able to track its current position and ensure that it will not crash and damage a record. From the decided control method, I looked at closed-loop actuation options, and the one that checked all the boxes while still making financial sense was to use NEMA17 stepper motors with TMC2209 motor drivers with incremental encoders tracking joint angles. These stepper motors move a fixed distance/angle for every step pulse given to the motor driver, so by changing the frequency of the step pulses, the motor will rotate at the speed you want. This would all be tracked by the encoder, which feeds a signal back to the microcontroller that tells it how far it has moved. As for the microcontroller, I settled on an STM32 board as it was capable of the milli/microsecond level timing constraints required for embedded robot control code, while also having features that would make motor and encoder signals much easier to work with. With an initial outline complete, I created a test bench to verify that the tech stack would be capable of the +/- 2mm goal that I set. This arm featured only 2 joints, and the goal was to see how far the arm would stray from its commanded position during a linear move.

<figure>
  <video src="/videos/accuracytest.MOV" autoplay muted playsinline controls style="display: block; width: 100%; height: auto; border-radius: 6px;"></video>
  <figcaption>Prototype arm accuracy test. Result: Success, avg. 0.43mm deviation between commanded and actual.</figcaption>
</figure>

This early prototype showed that the accuracy required would be achievable. The average error between commanded and actual position was 0.43mm, with a peak hitting 1.42mm, well within the +/- 2mm target that was set. This was a crucial step of this project, as this solidified that the electrical sub-system would be capable of executing the commands I needed, and it gave me the confidence required to design the whole mechanical arm.

## Mechanical Build and Manufacturing
Following the electrical bench test, next steps were to build out the rest of the arm. I first set out by figuring out the working area required and defining joint sections. I wanted the arm to be able to fold up into the cabinet, out of sight and inconspicuous when not in use. When commanded, it would unfold out of the cabinet and work through the pick and place procedure before folding back in. I landed on a SCARA arm style with a differential wrist at the end. The prismatic (linear) joint would move the arm in and out of the cabinet, and the SCARA revolute joints would contribute to the main working area. The differential wrist at the end of the SCARA arm would then be responsible for correctly orienting the record as it is picked and placed. With a general joint layout, next I determined how many motors/encoders would be on each joint, as well as what gearboxes/reduction systems would be required for the motors to output enough torque to hold the record.

![Full arm CAD model. Orange: Prismatic (J2), Green/Blue: SCARA (J3/J4), Purple:  Wrist (J5/J6)](/images/armcadss.png)

From a design standpoint, I attempted to use standard off-the-shelf bearings, aluminum extrusion, and fasteners where I could, as this greatly reduced design time and would yield a much more rigid assembly than to make the entire arm 100% 3D printed. I then bridged the gap between the off-the-shelf components and what I needed with 3D printed assemblies and brackets. The majority of the assembly was designed around the use of standard PETG, a strong, durable, and impact resistant material that is very easy to print compared to some of the high end (and much more expensive) engineering grade filaments. In areas where I needed more strength, I stepped up to PA6-GF, or glass filled nylon. This stuff is much more durable for meshing gears and comes with the added bonus of being self-lubricating.

![Multi-material internals of J3 gearbox. Black structure: PETG, Brown gears: PA6-GF](/images/J3gearbox.jpg)

I worked my way through all the joints individually, designing and validating each one as a stepping stone. Like with the electrical tests, accuracy and rigidity were the keys to a successful arm. Each one went through multiple iterations on their own, narrowing down individual fit and function to make sure it stood up to the stresses it would regularly see, and then even more iterations when integrated into the arm as a whole. Each joint was also electrically tested with the test bench setup to ensure smooth operation. Eventually, the full arm was manufactured and ready for full-scale integration into the cabinet, but before that, I needed to clean up the mess of wiring sitting on the desk.

<figure>
  <video src="/videos/fullarmbenchtest.mov" autoplay muted playsinline controls style="display: block; width: 100%; height: auto; border-radius: 6px;"></video>
  <figcaption>Full arm bench test with breadboarded circuit and on-hand drivers.</figcaption>
</figure>

## Custom Shield PCB

To aid in packaging and to reduce the mess of wires, I wanted to design a custom PCB that would deal with the majority of incoming/outgoing signals and power delivery requirements. However, instead of jumping the gun and making a whole board, I first started by making my own mini TMC2209 driver modules to test out the circuitry. These mini modules could interface with the Nucleo board via a breadboard and was utilized in the video above for those tests. I was happy with the result, but there were a couple of things that I noted to change for the bigger board such as heat dissipation due to the high current application and some minor component placement notes.

![Custom mini TMC2209 stepper motor driver](/images/minidriver.jpg)

Moving onto the bigger PCB, this one would act as a shield for the Nucleo F446RE microcontroller I was using, and was responsible for powering 8 TMC2209 stepper drivers, 4 incremental encoders, and the controls for the vacuum pump. Power delivery consisted of 12V input routed to the stepper drivers, as well as regulators that stepped it down to 5V and 3V3 lines for the encoders and microcontroller respectively. The biggest constraint on this board by far was space, as I had just shy of 150 components that needed to be placed on a 70mmx70mm form factor, and this ended up being one of the most densely packed boards I have designed.

![PCB layout for custom shield](/images/pcblayout.png)

After the design was complete and I received the board, I assembled it myself with a hot plate and hot air gun and began permanently wiring the arm. This included sleeving all the wires to prevent abrasion and wear, and tying everything to the arm itself so a stray wire loom wouldn’t knock a record in the cabinet.

![Arm fully wired on bench with custom shield](/images/fullarmtestbench.jpg)

## Software and Controls System

With the arm wired, the next problem was developing the embedded C firmware required to command it all together in sync. The first problem was getting it to repeatably move to a consistent position, which was accomplished through StallGuard homing. This is a special feature on the TMC2209 motor drivers, where essentially, you can controllably crash the robot into a known reference surface and the driver will output a signal when it feels the motor stall out. This tells the microcontroller exactly where the arm is and the angle it is at within about half of a degree. 

<figure class="control-flow">
  <div class="control-flow__steps">
    <div class="control-flow__step">Home Procedure<span>Robot utilizes StallGuard to calibrate encoders to a known position/angle</span></div>
    <div class="control-flow__step">End Position<span>End position set by internal command or user specified position</span></div>
    <div class="control-flow__step">Inverse Kinematics<span>Finds joint angles for setpoint positions reached during the move</span></div>
    <div class="control-flow__step">S-Curve<span>Figures out when to reach the inbetween positions to limit speed/acceleration/jerk</span></div>
    <div class="control-flow__step">PI loop<span>Compares actual position to setpoint position and commands motors to shrink the difference </span></div>
    <div class="control-flow__step">Vacuum<span>Turns vacuum on/off to pick/place record at certain known positions</span></div>
  </div>
</figure>

Once homed and the position of the arm is known, the robot can then be controlled either by each individual joint or positioned in global space through a process called inverse kinematics. Inverse kinematics is a bunch of math that converts x/y/z coordinates from a global coordinate system into joint angles required for the robot to reach that position. If we have a point in global space that we want the arm to reach, we can solve for all the joint angles for each position as we move through that space. This, alongside a S-Curve trajectory planner that slowly ramps the arm speed up and down so there isn’t jerky motion, gives us target angle setpoints across the whole move. Finally, we utilize a PI controller that calculates the error between the target setpoints and the actual arm position and controls the motor accordingly to shrink that error. This calculation occurs every millisecond, so the robot is constantly evaluating how close it is to its target setpoint and attempting to bring itself as close to it as it can.

![Windows control panel for the arm](/images/controlpanel.png)

On top of the firmware, I also built a Python-based control panel to test the arm and bring it up. All communication between the panel and the robot is through a custom UART ASCII command interface. This panel outputs nice to knows such as current mode, joint home status, current joint angles, and TMC2209 driver status. It also allows the user to manually jog the robot arm at certain speeds, home the arm, move the arm to given joint angles, complete synchronized moves, and even run through whole pick and place sequences in a singular command.

## Current Progress And Next Steps

Even though most of the design work is done, there are still some remaining integrations that need to be made. The main one is the doors of the cabinet, which I am currently working on implementing linear actuators to open and close them. I also want to create a proper user interface other than the python control panel, and that is something I am working on alongside the SmartHome Stained Glass Lamps as I am modifying a Wii remote into a smart home controller to be able to control both projects. Overall though, I am incredibly happy with the current progress and it is a joy to see the arm in action moving my disks around.







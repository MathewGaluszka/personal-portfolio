---
title: Robotic Operating Healthcare Buddy
order: 3
image: /images/rohb.png
---

Hospital staff spend a lot of their shift on repetitive logistics: moving equipment, delivering items, and clearing meal trays. Every minute spent on these tasks is a minute not spent on patient care. Our team worked through the design process to create a compact, quiet, autonomous robotic aid to take over some of this workload. This project required a prototype for one of the sub-systems, so we focused on one of its core tasks: collecting meal trays from tables and repositioning them to a common area.

## The Problem

Nurses and support staff handle tray retrieval many times a day, and a missed or delayed pickup adds to their workload and can disrupt the ward. We wanted a robot that could do this reliably without getting in the way of patients, visitors, or staff.

## Design Inputs

We defined 13 design inputs, each traced to a user requirement and tagged as either a performance or a design characteristic. Where possible they were backed by research and set as measurable, verifiable targets. The main ones were:

- Function: complete 2–3 hospital tasks multiple times a day, and accept and hold up to 5 trays through a receptacle
- Non-disruptive operation: no louder than 65 dB (normal conversation level), with high-contrast colours such as blue and orange for easy recognition
- Compact footprint: no larger than 0.5 m × 0.5 m × 1 m, about half the minimum standard door width
- Mobility: stainless steel or nylon castors with polyurethane wheels that can cross small bumps like cables and door sills
- Perception and navigation: a camera vision system with image and text recognition (for trays, beds, carts, IV stands, room numbers), combined with GPS and onboard vision for pathfinding within 10 m
- Power: DC drive motors able to output 30 kgF to move equipment, and batteries for 10 hours of continuous runtime
- Data security: encryption and authentication protocols to comply with PIPEDA and HIPAA
- Hygiene and maintenance: a non-porous, easily disinfected outer shell (UHMWPE), and a design that can be disassembled with common tools using off-the-shelf parts

## Design Review

At Design Review, feedback from our supervisors pushed the design in a few clear directions:

- Room recognition: the robot should read room numbers to know where it is, which led to a dedicated requirement and a more specific vision input.
- Task focus: we narrowed the scope to two concrete tasks.
- Justification: design choices needed citations and research behind them, so we added sources for the major ones.
- Verifiability: we replaced vague goals with metrics (5 trays, 30 kgF, 10 hours).
- Traceability: we added a legend separating performance from design characteristics.

## Risk Analysis (FMEA)

We catalogued failure modes across the robot's functions, scoring each on severity and probability to get a risk number. One of the highest risk items was damage occuring to nearby equipment during the grab process. Lower-risk items included grabbing the wrong item, hazards from the robot's size in hallways, and dropped food. The grab system was one of the top risks and the top-weighted design input, so that is how we decided that our prototype would center around verifying and validating the design.

![FMEA table for the robot as a whole](/images/fmea.png)

## Prototype

For the prototype, we utilized PVC tubing for the overall structure. Linear motion was accomplished with stepper motors powering lead screws, with the tray bounded by linear motion rods to keep it all in line. Another stepper motor was used to drive the extension arm that pulled the meal tray into the robot body. Since this was a short 4 month project, a complete vision system was not in scope, so we utilized limit switches to determine the position of the robot at its travel endpoints. C Firmware was built on a STM32 Discovery board that featured a touchscreen, allowing for user input for the prototype.

<figure>
  <video src="/videos/rohb.MOV" autoplay muted playsinline controls style="display: block; width: 100%; height: auto; border-radius: 6px;"></video>
  <figcaption>Prototype working through the tray grab process.</figcaption>
</figure>


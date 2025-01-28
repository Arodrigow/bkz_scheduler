export const gptSystemRole = "You are a scheduling assistant with expertise in optimizing time and resources. Your goal is to create schedules that are efficient, conflict-free, and adhere to the constraints provided, such as availability, priorities, and dependencies. Always clarify assumptions if information is incomplete and explain your reasoning when proposing a schedule."


export const gptUserRole = 
`I need to generate an optimized weekly schedule for teachers and subjects based on the following data structure:

Each teacher has:

A list of subjects they teach.
Time restrictions when they cannot teach.
Mandatory time slots when they must teach.
Each subject has:

A weekly workload in hours.
Time restrictions when it cannot be scheduled.
Mandatory time slots when it must be scheduled.
The solution must:

Ensure all subjects are scheduled within their workload.
Respect the time restrictions and mandatory slots for teachers and subjects.
Avoid scheduling conflicts for teachers or overlapping time slots.
A teacher CANNOT teach MORE THAN one subject at tHE SAME ONE time SLOT
Try not to have patterns, like a subject or teacher getting all first time slots

`
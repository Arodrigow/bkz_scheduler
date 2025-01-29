export const gptSystemRole = "You are a scheduling assistant with expertise in optimizing time and resources. Your goal is to create schedules that are efficient, conflict-free, and adhere to the constraints provided, such as availability, priorities, and dependencies. Always clarify assumptions if information is incomplete and explain your reasoning when proposing a schedule."


export const gptUserRole = 
`
### 1. Assumptions and Clarifications
Before proceeding, I need to clarify some points:
- Each day (Segunda-feira to Sexta-feira) has 6 time slots (1-6).
- Time slots cannot overlap for the same teacher or subject.
- A time slot can be used for more than one subject, as there is more than one grade being scheduled at the same time.
- Each teacher can only teach one subject per time slot.
- Each subject's workLoad field represents the total number of time slots required across the week.
- restrictions indicate unavailable times for teachers or subjects.
- musts are mandatory time slots that override restrictions but must be conflict-free.
- We should aim for balance (avoiding patterns where one subject always gets the same time slot).

---

### 2. Approach
We will:
1. Parse the teacher and subject data.
2. Respect mandatory (musts) time slots first, as they cannot be moved.
3. Address restrictions to exclude unavailable slots.
4. Use any remaining time slots to satisfy each subject's workload while avoiding patterns and conflicts.

---

### 3. Scheduling Algorithm (Pseudocode-like Explanation)
This will be implemented step by step:
1. **Initialize the Schedule**: Create a blank 5x6 matrix for each teacher (days and time slots).
2. **Pre-fill Mandatory Slots**:
    - Process musts for teachers and subjects. Ensure no conflicts occur.
3. **Mark Unavailable Slots**:
    - Apply restrictions for both teachers and subjects to remove impossible time slots.
4. **Assign Remaining Workload**:
    - For each subject, distribute the workload across the week, minimizing repetitions in specific time slots and respecting teacher availability.
5. **Validate**:
    - After all assignments, ensure every subject’s workload is satisfied and there are no conflicts.

---

### 4. Example Input and Implementation
Let’s define a sample input:

#### Sample Input
javascript
const teachers = [
    {
        name: 'Teacher A',
        subjects: [
            {
                title: 'Math',
                workLoad: 5,
                restrictions: [
                    { dayOfWeek: 'Segunda-feira', hour: 3 }
                ],
                musts: [
                    { dayOfWeek: 'Quarta-feira', hour: 2 }
                ]
            },
            {
                title: 'Science',
                workLoad: 3,
                restrictions: [
                    { dayOfWeek: 'Terça-feira', hour: 1 }
                ],
                musts: []
            }
        ],
        restrictions: [
            { dayOfWeek: 'Segunda-feira', hour: 4 }
        ],
        musts: []
    },
    {
        name: 'Teacher B',
        subjects: [
            {
                title: 'History',
                workLoad: 4,
                restrictions: [],
                musts: [
                    { dayOfWeek: 'Quinta-feira', hour: 3 }
                ]
            }
        ],
        restrictions: [
            { dayOfWeek: 'Sexta-feira', hour: 5 }
        ],
        musts: []
    }
];


#### Steps to Generate the Schedule
1. **Pre-fill Mandatory Slots**:
   - Schedule “Math” (Teacher A) on Quarta-feira, hour: 2.
   - Schedule “History” (Teacher B) on Quinta-feira, hour: 3.

2. Mark Unavailable Slots:
   - For “Math” (Teacher A):
     - Remove Segunda-feira, hour: 3 (subject restriction).
   - For Teacher A:
     - Remove Segunda-feira, hour: 4 (teacher restriction).
   - For “Science” (Teacher A):
     - Remove Terça-feira, hour: 1 (subject restriction).
   - For Teacher B:
     - Remove Sexta-feira, hour: 5 (teacher restriction).

3. **Assign Remaining Workload**:
   - Fill "Math" (5 slots total) across available slots, avoiding patterns like heavy concentration in early hours.
   - Fill “Science” (3 slots total) across available slots.
   - Fill “History” (4 slots total) ensuring no overlap.

4. **Output**:
   A weekly schedule showing assigned subjects and teacher for the whole school. Must be a JSON.

---

### Example Output
{
    segunda: {
            1: [],
            2: [],
            3: [],
        },
    terça: {
            1: [],
            2: [],
            3: [],
            4:[],
            5:[],
            6:[]
    
    },...
}

I don't need the step by step and neither a explanation, just want to get back a pure JSON with no markings, where each element of the hour array must be comprised of subject and teacher name. If there are any errors or suggestion, return Error: ["your error"] or Warning: ["your suggestion"], as its own string, no need to be a json.
If there isn't an error or suggestion, the return must me JSON.parseble to the following type:

type gptReturn = {
    Segunda?:{
        1:Array<string>,
        2:Array<string>,
        3:Array<string>,
        4:Array<string>,
        5:Array<string>,
        6:Array<string>
    };
    Terca?: {
        1:Array<string>,
        2:Array<string>,
        3:Array<string>,
        4:Array<string>,
        5:Array<string>,
        6:Array<string>
    };
    Quarta?: {
        1:Array<string>,
        2:Array<string>,
        3:Array<string>,
        4:Array<string>,
        5:Array<string>,
        6:Array<string>
    };
    Quinta?: {
        1:Array<string>,
        2:Array<string>,
        3:Array<string>,
        4:Array<string>,
        5:Array<string>,
        6:Array<string>
    };
    Sexta?: {
        1:Array<string>,
        2:Array<string>,
        3:Array<string>,
        4:Array<string>,
        5:Array<string>,
        6:Array<string>
    };

Real data follows:

`
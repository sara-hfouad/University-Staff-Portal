import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import '../styling/main.css';
import '../styling/dropDown.css';
import '../styling/App.css';
//import '.dropDown.css';


export default function AddSlots() {
    const [Type, setType] = useState("")
    const [Time, setTime] = useState("")
    const [Day, setDay] = useState("")
    const [Location, setLocation] = useState("")
    const locs = ['1', '2', '3']
    //if the course is not found (azabtha fl backend)
    const CourseTaughtRef = useRef()
    const TimeRef = useRef()
    const LocationRef = useRef()
    async function HandleChange(e) {
        await setType(e.target.value)
        console.log(Type)
    }
    async function HandleTime(e) {
        await setTime(e.target.value)
        console.log(Time)
    }
    async function HandleDay(e) {
        await setDay(e.target.value)
        console.log(Day)
    }
    async function HandleLocation(e) {
        await setLocation(e.target.value)
        console.log(Location)
    }
    const [locations, setLocations] = useState([])
    function HandleAddSlot() {

        const body = {
            type: Type, time: Time,
            courseTaught: CourseTaughtRef.current.value, location: LocationRef.current.value,
            day: Day
        }
        //  console.log(body)

        axios
            .post('http://localhost:8000/coordinator/addSlot', body)

            .then(res => console.log(res.data));
        // callAPI()
    }

    useEffect(() => {
        // Update the document title using the browser API
        axios
            .get('http://localhost:8000/viewLocations')
            .then(res => {
                setLocations(res.data)

            });
    });



    return (
        <>
            <div >
                <span className="login100-form-title">
                    Add Slot
					</span>

                {/* <div class="dropdown"> */}
                {/* <button class="dropbtn">Type</button>
                        <div class="dropdown-content"> */}

                {/* <div>
                        <input required={true} ref={TimeRef} className="input100" name="time" placeholder="Time" />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                        </span>
                        <br />
                    </div> */}

                <div>
                    <input required={true} ref={CourseTaughtRef} className="input100" name="courseTaught" placeholder="Course Taught" />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                    </span>
                    <br />
                </div>

                {/* <div>
                        <input required={true} ref={DayRef} className="input100" name="day" type='checkbox' placeholder="Day" />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                        </span>
                        <br />
                    </div> */}

                {/* <div>
                        <input required={true} ref={LocationRef} className="input100" name="location" placeholder="Slot's Location" />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                        </span>
                        <br />
                    </div> */}
                <div className='whole'>
                    <label className='textDown'>Choose a Location: </label>
                    <select className='dropbtn' name="types" id="type" onChange={HandleLocation}>
                        {locations.map(item => (
                            <option key={item.name} value={item.name}>{item.name}</option>
                        ))}
                        {/* {locs.map(item => (
                            <option key={item} value={item}>{item}</option>
                          ))} */}
                    </select>
                    <label className='textDown'> Choose A Day: </label>
                    <select className='dropbtn' name="types" id="type" onChange={HandleDay}>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                    </select>                
                    </div>
                <br></br>
                <div className='whole'>
                    <label className='textDown'>Choose The Type: </label>
                    <select className='dropbtn' name="types" id="type" onChange={HandleChange}>
                        <option value="lab">Lab</option>
                        <option value="tutorial">Tutorial</option>
                        <option value="lecture">Lecture</option>
                    </select>

                    {/* </div> */}
                    <label className='textDown'> Slot Time: </label>
                    <select className='dropbtn' name="types" id="type" onChange={HandleTime}>
                        <option value="First Slot">First Slot</option>
                        <option value="Second Slot">Second Slot</option>
                        <option value="Third Slot">Third Slot</option>
                        <option value="Fourth Slot">Fourth Slot</option>
                        <option value="Fifth Slot">Fifth Slot</option>
                    </select>



                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="buttons">
                    <button onClick={HandleAddSlot} className="buttons">
                        Add Slot
						</button>
                </div>

            </div>

        </>






        // <div>
        //  Name:
        // <input ref={NameRef} type="text"/>
        // <br></br>
        // Email:
        // <input ref={EmailRef} type="text"/>
        // <br></br>
        // Role:
        // <input ref={RoleRef} type="text"/>
        // <br></br>
        // Day Off:
        // <input ref={DayOffRef} type="text"/>
        // <br></br>
        // Salary:
        // <input ref={SalaryRef} type="text"/>
        // <br></br>
        // Office number:
        // <input ref={OfficeRef} type="text"/>
        // <br></br>
        // Gender:
        // <input ref={GenderRef} type="text"/>
        // <br></br>
        // <button onClick={HandleAddStaff}> Add </button>
        // </div>
    )
}


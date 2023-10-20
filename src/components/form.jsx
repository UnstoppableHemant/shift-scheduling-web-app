import { useState, useEffect } from "react";

const ShiftForm = ({data}) => {
   // const shiftData = JSON.parse(localStorage.getItem("shiftData") || "[]");

    const [formData,setFormData] = useState({
        id:Math.ceil(Math.random()*1000000000),
        assigneeName:"",
        fromTime:"",
        toTime:"",
        scheduleDate:""
    });

    const handleReset = () =>{
        setFormData({assigneeName:"",
        fromTime:"",
        toTime:"",
        scheduleDate:""});
    } 

    const [allData,setallData] = useState(data);

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData({...formData,id:Math.ceil(Math.random()*100000000000),[name]:value});
    }

    const handleSubmit = () => {
        setallData([...allData, formData]);
        handleReset();
    }

    useEffect(() => {
        localStorage.setItem('shiftData', JSON.stringify(allData));
    },[allData])
    return (
        <div className="modal fade" id="shiftForm" tabindex="-1" aria-labelledby="shiftForm" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="text-start">
                            <h3 className="text-center">Schedule a Shift</h3>
                            <div className="mt-2">
                                <label className="fw-bold">Assign To:</label>
                                <input type="text" className="form-control mt-1" name="assigneeName" value={formData.assigneeName} onChange={handleChange} />
                            </div>
                            <div className="mt-2">
                                <label className="fw-bold">Schedule Date:</label>
                                <input type="date" className="form-control mt-1" name="scheduleDate" value={formData.scheduleDate} onChange={handleChange} />
                            </div>
                            <div className="mt-2">
                                <label className="fw-bold">From:</label>
                                <input type="time" className="form-control mt-1" name="fromTime" value={formData.fromTime} onChange={handleChange} />
                            </div>
                            <div className="mt-2">
                                <label className="fw-bold">To:</label>
                                <input type="time" className="form-control mt-1" name="toTime" value={formData.toTime} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShiftForm;
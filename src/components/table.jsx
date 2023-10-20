import { useEffect, useState } from "react"
import ShiftForm from "./form";

const jsonData = [
    {
        "id": 123456789,
        "assigneeName": "Alex",
        "fromTime": "10:00",
        "toTime": "11:00",
        "scheduleDate": "2023-10-28"
    },
    {
        "id": 123546789,
        "assigneeName": "John Doe",
        "fromTime": "11:00",
        "toTime": "12:00",
        "scheduleDate": "2023-10-24"
    },
    {
        "id": 123465789,
        "assigneeName": "Albuerto",
        "fromTime": "13:00",
        "toTime": "14:00",
        "scheduleDate": "2023-10-22"
    }
]

const Table = () => {
    debugger;
    const [allData, setallData] = useState(jsonData);

    useEffect(()=>{
        setallData(JSON.parse(localStorage.getItem('shiftData')));
    },[allData]);

    const handleDelete=(e)=>{
        const d = allData.filter((data)=>{return data?.id != e.target.value})
        localStorage.setItem('shiftData', JSON.stringify(d));;
    }
    return (
        <div className='table-responsive'>
            <ShiftForm data={jsonData}/>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Assign To</th>
                        <th>Shift Timings</th>
                        <th>Schedule Date</th>
                        {/* <th>Edit</th> */}
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allData.map((items) => {
                        return (
                            <tr>
                                <td>{items.assigneeName}</td>
                                <td>{items.fromTime} - {items.toTime}</td>
                                <td>{items.scheduleDate}</td>
                                {/* <td><Buttons btnName="Edit" btnStyle="badge bg-warning border-0 p-2 text-black" value={JSON.stringify(items)} onClick={handleUpdate} /></td> */}
                                <td><button className="badge bg-danger border-0 p-2" value={items.id} onClick={handleDelete}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
import Header from "./components/header";
import Table from "./components/table";

const App = () => {
    return (
        <>
            <Header />
            <div className="container-fluid px-5 pt-3">
                <div className="text-end">
                    <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#shiftForm">Add New Shift</button>
                </div>
                <div className="shadow px-4 mt-2 rounded">
                    <Table />
                </div>
            </div>
        </>
    )
}

export default App;
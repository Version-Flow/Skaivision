import { useNavigate } from 'react-router-dom';

const FormSelection = () => {
    const navigate = useNavigate();
    const institutions = [
        { id: 1, name: "Skai Version Tiral Forms" },
        { id: 2, name: "Achease Junior High School A" },
        { id: 3, name: "Abetifi Akenteng Mmofra Senior High School" },
        // Add more institutions if needed
    ];

    const handleBuyForm = (institution) => {
        // Store institution ID and name in session storage
        sessionStorage.setItem('institutionId', institution.id);
        sessionStorage.setItem('institutionName', institution.name);

        // Navigate to the application forms page
        navigate('/school/application-forms');
    };

    return (
        <>
            <div>
                <div className="col-md-12">
                    <div className="card-box">
                        <h2 className="header-titles text-center"><b>Online Admission Market</b></h2>
                        <h4 className="text-center mt-3"><b>Institutions Available</b></h4>
                        <h6 className="text-center text-muted text-uppercase">Select the School you want to buy forms from the list</h6>
                        <hr />

                        <form id="">
                            <div className="col-md-12 mt-2">

                                <div className="row col-md-12">
                                    <select className="form-control select2" id="type-of-school" required>
                                        <option value={0}>Filter the search by school type...</option>
                                        <option value="junior-high">Junior High School</option>
                                        <option value="senior-high">Senior High School</option>
                                        <option value="tertiary">Tertiary Institution</option>
                                    </select>
                                </div>
                                <div className="row d-flex">
                                    <div className="col-md-6 mt-2">
                                        <select className="form-control select2" id="region-select">
                                            <option value={0}>Filter by region...</option>
                                            <option value="A">A</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6 mt-2">
                                        <select className="form-control select2" id="district-select" required>
                                            <option value={0}>Filter by district or municipal...</option>
                                            <option value="A">A</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-2">
                                    <input type="text" className="form-control" id="city" placeholder="Search by school name" required />
                                </div>
                                <div className="col-md-12 d-flex mt-2">
                                    <button type="submit" className="btn btn-danger mr-1 mb-1"> <i className='fe-repeat'></i> Clear Filters</button>
                                    <button type="submit" className="btn btn-info mr-1 mb-1"> <i className='fe-tag'></i> Have Token</button>
                                    <button type="submit" className="btn btn-info mr-1 mb-1"> <i className='fe-search'></i> Apply filter</button>
                                </div>

                                {/* Table Section */}
                                <div className="col-md-12 mt-4">
                                    <table className="table table-responsive">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th style={{ width: '85%' }}>Institution</th>
                                                <th className='w-25'>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {institutions.map((institution) => (
                                                <tr key={institution.id}>
                                                    <td>{institution.id}</td>
                                                    <td className='text-uppercase'>{institution.name}</td>
                                                    <td className='w-25 text-truncate'>
                                                        <button className="btn btn-info" onClick={() => handleBuyForm(institution)}>
                                                            Buy Form
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <hr />
                            <button type="submit" className="btn btn-secondary mr-1 mb-1" onClick={() => navigate('/school/find-admission')}> <i className='fe-arrow-left'></i> Go Back</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormSelection;

import { useEffect, useState } from 'react';
import $ from 'jquery';
import Config from '../../../../helpers/config';
import { useOutletContext } from 'react-router-dom';


const Permission = () => {
  const [data, setData] = useState([]);

  const { setPageTitle } = useOutletContext();


  // Set the page title dynamically
  useEffect(() => {
    const titles = "Permission";
    setPageTitle(titles);
    Config[0].currentPage = titles;
    document.getElementById("pageTitle").innerHTML = Config[0].currentPage + Config[0].APP_TITLE;
  }, [setPageTitle]);



  // Fetch data from your API or use static data
  useEffect(() => {
    const fetchData = () => {
      const sampleData = [
        { id: 1, name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, startDate: '2011/04/25' },
        { id: 2, name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', age: 63, startDate: '2011/07/25' },
        { id: 3, name: 'Ashton Cox', position: 'Junior Technical Author', office: 'San Francisco', age: 66, startDate: '2009/01/12' },
      ];
      setData(sampleData);
    };

    fetchData();
  }, []);


  useEffect(() => {
    // Initialize DataTable after data is set
    const datatable = $('#datatable').DataTable({
      responsive: true,
      destroy: true,
      rowReorder: false,
      dom: '<"row"<"col-sm-12 col-md-6 mb-1"B><"col-sm-12 col-md-6 text-md-right"f>>' +
        '<"row"<"col-sm-12"tr>>' +
        '<"row"<"col-sm-12 col-md-5"i><"col-sm-12 col-md-6 text-md-right"p>>',
      buttons: ['copy', 'excel', 'pdf', 'colvis', 'print'].map(type => ({ extend: type, className: 'btn btn-sm btn-success' })),
      data: data,
      columns: [
        {
          data: null, render: function () {
            return `<input type="checkbox" class="row-select" />`;
          }
        },
        { data: 'name' },
        { data: 'position' },
        { data: 'office' },
        { data: 'age' },
        { data: 'startDate' },
        {
          data: null, width: 15, render: function () {
            return `
              <div class="btn-group dropdown">
                  <a href="#" class="btn btn-outline-secondary table-action-btn dropdown-toggle btn-sm" data-toggle="dropdown" aria-expanded="false">Action Here<i class="mdi mdi-dots-vertical"></i></a>
                  <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#"><i class="mdi mdi-pencil mr-1 text-muted font-18 vertical-middle"></i>Edit Ticket</a>
                      <a class="dropdown-item" href="#"><i class="mdi mdi-check-all mr-1 text-muted font-18 vertical-middle"></i>Close</a>
                      <a class="dropdown-item" href="#"><i class="mdi mdi-delete mr-1 text-muted font-18 vertical-middle"></i>Remove</a>
                      <a class="dropdown-item" href="#"><i class="mdi mdi-star mr-1 font-18 text-muted vertical-middle"></i>Mark as Favorite</a>
                  </div>
              </div>
            `;
          }
        },
      ],
      // Reinitialize dropdown after DataTable draw
      drawCallback: function () {
        // Select/Deselect All Checkbox functionality
        $('#select-all').on('click', function () {
          const checked = $(this).is(':checked');
          $('.row-select').prop('checked', checked);
        });
      }
    });

    return () => {
      datatable.destroy();
    };
  }, [data]);


  // Calling New Modal for Creating New
  const createNew = () => {
    document.getElementById('modal-title').innerText = "Creating New Permission";
    $('#btn-edit').hide();

    const modal = new window.bootstrap.Modal(document.getElementById('myModal'));
    modal.show();
  };

  return (
    <>


      <div className="row">
        <div className="col-12">
          <div className="card-box table-responsive">
            <div className='row d-flex col-md-12 justify-content-between align-items-center'>
              <div className="btn-group">
                <button type="button" className="btn btn-outline-primary dropdown-toggle waves-effect" data-toggle="dropdown" aria-expanded="false">Bulk Actions <i className="mdi mdi-chevron-down" /> </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item text-danger" href="#"><i className='fe-trash mr-1'></i>Remove Record</a>
                  <a className="dropdown-item" href="#"><i className='mdi mdi-folder-open-outline mr-1'></i>Next Action</a>
                </div>
              </div>
              <button className='btn btn-primary btn-sm' onClick={createNew}><i className='fe-plus mr-1'></i>Create New</button>
            </div>

            <hr className='custom-hr' />

            <table id="datatable" className="table table-striped table-bordered dt-responsive nowrap i-table">
              <thead>
                <tr>
                  <th><input type="checkbox" id="select-all" /></th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody> </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Section */}
      <div className="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-truncate" id="modal-title">...</h4>
              <img src="/temp/assets/images/sv-bar-color.png" height={20} style={{ opacity: 0.5 }} />
              <button type="button" className="close modal-close" data-bs-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div className="modal-body">
              <div className="card-block">

                <div className="col-md-12">
                  <label htmlFor="buyerName" className="form-label">Default role for the permission</label>
                  <select className="form-control select2" id="role" required>
                    <option value="">Choose...</option>
                  </select>

                </div>
                <div className="col-md-12 mt-2">
                  <label htmlFor="buyerName" className="form-label">Select Permission you want to create</label>
                  <select className="form-control select2" id="permission" required>
                    <option value="">Choose...</option>
                    <optgroup label="POLITICAL ROLES">
                      <option value="Coordinator">Coordinator</option>
                      <option value="Electoral Officer">Electoral Officer</option>
                      <option value="Presiding Member">Presiding Member</option>
                      <option value="Candidate">Candidate</option>
                      <option value="Delegate">Delegate</option>
                    </optgroup>

                  </select>

                </div>

                <div className="col-md-12 mt-2">
                  <label htmlFor="phone" className="form-label">Role Decriptions</label>
                  <textarea className='form-control' rows="2" id="description"></textarea>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type='reset' className="btn btn-danger btn-sm"><i className='mdi mdi-delete-empty mr-1'></i>Clear</button>
              <button className="btn btn-info btn-sm" id='btn-save'><i className='mdi mdi-account-convert mr-1'></i>Send Request</button>
              <button className="btn btn-info btn-sm" id='btn-edit'><i className='mdi mdi-account-convert mr-1'></i>Send Request</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Permission;

import { useEffect, useState } from 'react';
import $ from 'jquery';
import Config from '../../../../helpers/config';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Spinner } from 'react-bootstrap';

const SchoolStatus = () => {

  const headers = Config[0].headers;
  const baseUrl = Config[0].BASE_URL;


  const [data, setData] = useState([]);
  const { setPageTitle } = useOutletContext();
  const [isSaving, setIsSaving] = useState(false);
  const [isAnySelected, setBulkButton] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Set the page title dynamically
  useEffect(() => {
    const titles = "School Statuses";
    setPageTitle(titles);
    Config[0].currentPage = titles;
    document.getElementById("pageTitle").innerHTML = Config[0].currentPage + Config[0].APP_TITLE;
  }, [setPageTitle]);


  // Fetch data from your API or use static data
  const fetchData = () => {
    axios.get(`${baseUrl}/settings/school-statuses`, { headers })
      .then(response => {
        const fetchedData = response.data;
        if (fetchedData.success) {
          setData(fetchedData.data);
        } else {
          Swal.fire({ icon: 'error', title: 'Error!', text: fetchedData.message });
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        Swal.fire({ icon: 'error', title: 'Error!', text: 'Failed to fetch data.' });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseUrl, headers]);


  //Datatable initialization and populating
  useEffect(() => {
    // Format the data before passing it to the DataTable
    const formattedData = data.map(item => ({
      ...item,
      created_at: item.created_at.replace('T', ' ').slice(0, 19)
    }));

    const datatable = $('#datatable').DataTable({
      responsive: true,
      destroy: true,
      rowReorder: false,
      dom: '<"row"<"col-sm-12 col-md-6 mb-1"B><"col-sm-12 col-md-6 text-md-right"f>>' +
        '<"row"<"col-sm-12"tr>>' +
        '<"row"<"col-sm-12 col-md-5"i><"col-sm-12 col-md-6 text-md-right"p>>',
      buttons: ['copy', 'excel', 'pdf', 'colvis', 'print'].map(type => ({ extend: type, className: 'btn btn-sm btn-success' })),
      data: formattedData,
      columns: [

        {
          data: null, render: function (data) {
            return `<input type="checkbox" class="row-select" data-title="${data.title}" data-id="${data.id}" />`;
          }
        },

        { data: 'title' },
        { data: 'description', width: '100%' },
        { data: 'created_at' },
        { data: 'status' },
        {
          data: null, render: function (data) {
            return `
              <div class="btn-group dropdown">
                  <a href="#" class="btn btn-outline-secondary table-action-btn dropdown-toggle btn-sm" data-toggle="dropdown" aria-expanded="false">Action Here<i class="mdi mdi-dots-vertical"></i></a>
                  <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item edit-btn" 
                        href="#" data-title="${data.title}" data-description="${data.description}" data-id="${data.id}">
                        <i class="mdi mdi-pencil mr-1 text-muted font-18 vertical-middle"></i>Modify Record
                      </a> 
                      <a class="dropdown-item" href="#"><i class="mdi mdi-star-outline mr-1 font-18 text-muted vertical-middle"></i>Mark as Favorite</a>
                      <a class="dropdown-item text-danger delete-btn" href="#" data-title="${data.title}" data-id="${data.id}"><i class="mdi mdi-delete-outline mr-1 font-18 vertical-middle"></i>Remove Record</a>
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
          if (checked) {
            const allSelectedItems = formattedData.map(item => ({ id: item.id, title: item.title }));
            setSelectedItems(allSelectedItems);
            setBulkButton(true);
          } else {
            setSelectedItems([]);
            setBulkButton(false);
          }
        });
      
        // Use event delegation
        $('.row-select').on('change', function () {
          const id = $(this).data('id');
          const title = $(this).data('title');
      
          if ($(this).is(':checked')) {
            // Add the individual item only if it's not already in the array
            setSelectedItems(prev => {
              if (!prev.some(item => item.id === id)) {
                return [...prev, { id, title }];
              }
              return prev;
            });
          } else {
            // Remove the item when unchecked
            setSelectedItems(prev => prev.filter(item => item.id !== id));
          }
      
          const anyChecked = $('.row-select:checked').length > 0;
          setBulkButton(anyChecked);
        });
      }


    });

    return () => {
      datatable.destroy();
    };
  }, [data, isLoading]);


  // Calling New Modal for Creating New
  const createNew = () => {
    document.getElementById('modal-title').innerText = "Creating New School Status";
    $('#btn-edit').hide();
    $('#btn-save').show();

    window.bootstrap.Modal.getOrCreateInstance(document.getElementById('myModal')).show();
  };


  // Global event binding for edit buttons
  useEffect(() => {
    const handleEditClick = (e) => {
      e.preventDefault();

      // Get the clicked button's data attributes
      const button = $(e.currentTarget);
      const title = button.data('title');
      const description = button.data('description');
      const id = button.data('id');

      // Set the values into the input fields
      document.getElementById('role').value = title;
      document.getElementById('description').value = description;
      document.getElementById('gottenId').value = id;

      // Update modal title and show it
      document.getElementById('modal-title').innerText = "Modifying " + title;
      $('#btn-save').hide();
      $('#btn-edit').show();

      // Now show the modal after data is populated
      window.bootstrap.Modal.getOrCreateInstance(document.getElementById('myModal')).show();
    };

    $(document).on('click', '.edit-btn', handleEditClick);

    return () => {
      $(document).off('click', '.edit-btn', handleEditClick);
    };
  }, []);


  // Global event binding for delete buttons
  $(document).on('click', '.delete-btn', function (e) {
    e.preventDefault();

    const title = $(this).data('title');
    const id = $(this).data('id');

    Swal.fire({
      title: "Confirm Action",
      html: `Are you sure you want to remove <strong>${title}</strong> from the records ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#32c861',
      cancelButtonColor: '#f96a74',
      confirmButtonText: 'Yes, proceed',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(`${baseUrl}/settings/school-statuses/delete`, { school_status_id: id }, { headers })
          .then(response => {
            const data = response.data;
            if (data.success) {
              Swal.fire({ icon: 'success', title: 'Success!', text: data.message, }).then(() => {
                fetchData();
              });
            } else { Swal.fire({ icon: 'error', title: 'Failed!', text: data.message, }); }
          })
          .catch(error => {
            if (error.response && error.response.data) {
              const errorMessage = error.response.data.message || 'An unexpected error occurred.';
              Swal.fire({ icon: 'error', title: 'Error!', text: errorMessage });
            } else {
              Swal.fire({ icon: 'error', title: 'Error!', text: 'An error occurred while sending the request' });
            }
          })
          .finally(() => {
            setIsSaving(false);
          });
      }
    });
  });

  // Ready to save the data
  const sendSaveRequest = () => {
    const title = document.getElementById('role').value;
    const description = document.getElementById('description').value;


    if (!title) {
      Swal.fire({ icon: 'warning', title: 'Attention Please', text: 'Please fill all the fields and it is required', });
      return;
    }

    // Disable the button and show loading indicator
    setIsSaving(true);

    const payload = { title, description };

    // Send POST request to the API using axios
    axios.post(`${baseUrl}/settings/school-statuses`, payload, { headers })
      .then(response => {
        const data = response.data;
        if (data.success) {
          Swal.fire({ icon: 'success', title: 'Success!', text: data.message, }).then(() => {
            clearData();

          });
        } else {
          Swal.fire({ icon: 'error', title: 'Failed!', text: data.message, });
        }
      })
      .catch(error => {
        if (error.response && error.response.data) {
          const errorMessage = error.response.data.message || 'An unexpected error occurred.';
          Swal.fire({ icon: 'error', title: 'Error!', text: errorMessage });
        } else {
          Swal.fire({ icon: 'error', title: 'Error!', text: 'An error occurred while sending the request' });
        }
      })
      .finally(() => {
        setIsSaving(false);
      });
  };

  // Ready to edit the data
  const sendEditRequest = () => {
    const title = document.getElementById('role').value;
    const description = document.getElementById('description').value;
    const school_status_id = document.getElementById('gottenId').value;


    if (!title) {
      Swal.fire({ icon: 'warning', title: 'Attention Please', text: 'Please fill all the fields and it is required', });
      return;
    }

    // Disable the button and show loading indicator
    setIsSaving(true);

    const payload = { school_status_id, title, description };

    // Send POST request to the API using axios
    axios.post(`${baseUrl}/settings/school-statuses/update`, payload, { headers })
      .then(response => {
        const data = response.data;
        if (data.success) {
          Swal.fire({ icon: 'success', title: 'Success!', text: data.message, }).then(() => {
            clearData();
          });
        } else {
          Swal.fire({ icon: 'error', title: 'Failed!', text: data.message, });
        }
      })
      .catch(error => {
        if (error.response && error.response.data) {
          const errorMessage = error.response.data.message || 'An unexpected error occurred.';
          Swal.fire({ icon: 'error', title: 'Error!', text: errorMessage });
        } else {
          Swal.fire({ icon: 'error', title: 'Error!', text: 'An error occurred while sending the request' });
        }
      })
      .finally(() => {
        setIsSaving(false);
      });
  };


  // Get all input, select, and textarea elements within the .card-block
  const resetInputFields = () => {
    const cardBlock = document.querySelector('.card-block');

    if (cardBlock) {
      const inputs = cardBlock.querySelectorAll('input, select, textarea');
      inputs.forEach(input => {
        if (input.type === 'hidden' || input.type === 'submit') return;

        if (input.classList.contains('select2')) {
          input.selectedIndex = 0, input.dispatchEvent(new Event('change'));
        } else {
          input.value = '';
        }
      });
    }
  };


  const clearData = () => {
    // eslint-disable-next-line no-undef
    const modal = bootstrap.Modal.getInstance(document.getElementById('myModal'));
    if (modal) {
      modal.hide();
    }
    window.bootstrap.Modal.getOrCreateInstance(document.getElementById('myModal')).show();
    fetchData();
  }

  // Prepare the selected items and remove them bulk
  const getReadyListRemove = () => {
    if (selectedItems.length === 0) {
      alert("No records selected for removal.");
      return;
    }

    const titles = selectedItems.map(item => item.title).join(', ');
    const ids = selectedItems.map(item => item.id);

    Swal.fire({
      title: "Confirm Action",
      html: `Are you sure you want to remove the following items <strong>${titles}</strong> from the records ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#32c861',
      cancelButtonColor: '#f96a74',
      confirmButtonText: 'Yes, proceed',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(`${baseUrl}/universal/bulk-remove`, { ids: ids, table:"school_statuses" }, { headers })
          .then(response => {
            const data = response.data;
            if (data.success) {
              Swal.fire({ icon: 'success', title: 'Success!', text: data.message, }).then(() => {
                fetchData();
              });
            } else { Swal.fire({ icon: 'error', title: 'Failed!', text: data.message, }); }
          })
          .catch(error => {
            if (error.response && error.response.data) {
              const errorMessage = error.response.data.message || 'An unexpected error occurred.';
              Swal.fire({ icon: 'error', title: 'Error!', text: errorMessage });
            } else {
              Swal.fire({ icon: 'error', title: 'Error!', text: 'An error occurred while sending the request' });
            }
          })
      }
    });

  };


  return (
    <>

      {isLoading ? (
        <div className="text-center justify-content-center align-items-center mt-4">
          <Spinner animation="border" role="status" style={{ marginTop: 150 }}>
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (

        <div className="row">
          <div className="col-12">
            <div className="card-box table-responsive">
              <div className='row d-flex col-md-12 justify-content-between align-items-center'>
                {isAnySelected && (
                  <div className="btn-group">
                    <button type="button" className="btn btn-outline-primary dropdown-toggle waves-effect" data-toggle="dropdown" aria-expanded="false">
                      Bulk Actions <i className="mdi mdi-chevron-down" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item text-danger" href="#" onClick={getReadyListRemove}><i className='fe-trash mr-1'></i>Remove Record</a>
                      <a className="dropdown-item" href="#"><i className='mdi mdi-folder-open-outline mr-1'></i>Next Action</a>
                    </div>
                  </div>
                )}
                <div className="ms-auto">
                  <button className='btn btn-primary mr-1' onClick={createNew}>
                    <i className='fe-plus mr-1'></i>Create New
                  </button>
                  <button className='btn btn-outline-secondary' onClick={() => window.location.reload()}>
                    <i className='mdi mdi-refresh mr-1'></i>Refresh
                  </button>
                </div>
              </div>

              <hr className='custom-hr' />

              <table id="datatable" className="table table-striped table-bordered dt-responsive nowrap i-table">
                <thead>
                  <tr>
                    <th><input type="checkbox" id="select-all" /></th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date Added</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      <div className="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-truncate text-monospace" id="modal-title">...</h4>
              <img src="/temp/assets/images/sv-bar-color.png" height={20} style={{ opacity: 0.5 }} />
              <button type="button" className="close modal-close" data-bs-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div className="modal-body">

              <div className="card-block">
                <input type="hidden" id='gottenId' />

                <div className="col-md-12">
                  <label htmlFor="role" className="form-label">Title of the status you want to create <span className='required'>*</span></label>
                  <input type="text" id='role' className='form-control' placeholder='eg. Boarding' />
                </div>
                <div className="col-md-12 mt-2">
                  <label htmlFor="phone" className="form-label">Specify Decription</label>
                  <textarea className='form-control' rows="2" id="description" defaultValue="There is no description for now"></textarea>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type='reset' className="btn btn-danger btn-sm" onClick={resetInputFields}><i className='mdi mdi-delete-empty mr-1'></i>Clear</button>
              <button className="btn btn-info btn-sm" id='btn-save' onClick={sendSaveRequest} disabled={isSaving}>
                {isSaving ? <><i className="mdi mdi-atom-variant mdi-spin"></i> Sending...</> : <><i className="mdi mdi-account-convert mr-1"></i>Send Request</>}
              </button>
              <button className="btn btn-info btn-sm" id='btn-edit' onClick={sendEditRequest} disabled={isSaving}>
                {isSaving ? <><i className="mdi mdi-atom-variant mdi-spin"></i> Sending...</> : <><i className="mdi mdi-account-convert mr-1"></i>Send Request</>}
              </button>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default SchoolStatus;

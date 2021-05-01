import { DataGrid } from '@material-ui/data-grid';
import { Card, CardHeader, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const columns = [
  { field: 'hubName', headerName: 'Hub Name', width: 250 },
  {
    field: 'mobileNo',
    headerName: 'Mobile Number',
    type: 'Number',
    width: 180
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 300
  },
  {
    field: 'address',
    headerName: 'Address',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 500
  },
  {
    field: 'edit',
    headerName: 'Edit',
    width: 150,
    sortable: false,
    renderCell: (params) => (
      <strong>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {
            alert(params.id);
          }}
          startIcon={<EditIcon />}
        >
          EDIT
        </Button>
      </strong>
    )
  },
  {
    field: 'delete',
    headerName: 'Delete',
    sortable: false,
    width: 200,
    renderCell: (params) => (
      <strong>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {
            alert(params.id);
          }}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </strong>
    )
  }
];

const rows = [
  {
    id: 1,
    mobileNo: 1234567890,
    hubName: 'Jon',
    email: 'support@shreesurbhi.com',
    address: '736A, Rajendra Nagar Easttttttttttttttttttttttt',
    edit: 'Edit'
  },
  {
    id: 2,
    mobileNo: 7754949803,
    hubName: 'Cersei',
    email: 42,
    address: '736A, Rajendra Nagar Easttttttttttttttttttttttt',
    edit: 'Edit'
  },
  {
    id: 3,
    mobileNo: 1234567890,
    hubName: 'Jon',
    email: 'support@shreesurbhi.com',
    address: '736A, Rajendra Nagar Easttttttttttttttttttttttt',
    edit: 'Edit'
  },
  {
    id: 4,
    mobileNo: 7754949803,
    hubName: 'Cersei',
    email: 42,
    address: '736A, Rajendra Nagar Easttttttttttttttttttttttt',
    edit: 'Edit'
  },
  {
    id: 5,
    mobileNo: 1234567890,
    hubName: 'Jon',
    email: 'support@shreesurbhi.com',
    address: '736A, Rajendra Nagar Easttttttttttttttttttttttt',
    edit: 'Edit'
  },
  {
    id: 6,
    mobileNo: 7754949803,
    hubName: 'Cersei',
    email: 42,
    address: '736A, Rajendra Nagar Easttttttttttttttttttttttt',
    edit: 'Edit'
  }
];

export default function DisplayHub() {
  return (
    <Card>
      <CardHeader subheader="Currently added Hubs." title="Hubs" />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>
    </Card>
  );
}

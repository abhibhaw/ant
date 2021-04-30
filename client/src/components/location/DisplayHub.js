import { DataGrid } from '@material-ui/data-grid';
import { Card, CardHeader } from '@material-ui/core';

const columns = [
  { field: 'hubName', headerName: 'Hub Name', width: 160 },
  {
    field: 'mobileNo',
    headerName: 'Mobile Number',
    type: 'Number',
    width: 180
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200
  },
  {
    field: 'address',
    headerName: 'Address',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 400
  },
  {
    field: 'action',
    headerName: 'Action',
    sortable: false
  }
];

const rows = [
  {
    id: 1,
    mobileNo: 1234567890,
    hubName: 'Jon',
    email: 'support@shreesurbhi.com',
    address: '736A, Rajendra Nagar Easttttttttttttttttttttttt'
  },
  {
    id: 2,
    mobileNo: 7754949803,
    hubName: 'Cersei',
    email: 42,
    address: '736A, Rajendra Nagar Easttttttttttttttttttttttt'
  },
  {
    id: 3,
    mobileNo: 1234567890,
    hubName: 'Jon',
    email: 'support@shreesurbhi.com',
    address: '736A, Rajendra Nagar Easttttttttttttttttttttttt'
  },
  {
    id: 4,
    mobileNo: 7754949803,
    hubName: 'Cersei',
    email: 42,
    address: '736A, Rajendra Nagar Easttttttttttttttttttttttt'
  },
  {
    id: 5,
    mobileNo: 1234567890,
    hubName: 'Jon',
    email: 'support@shreesurbhi.com',
    address: '736A, Rajendra Nagar Easttttttttttttttttttttttt'
  },
  {
    id: 6,
    mobileNo: 7754949803,
    hubName: 'Cersei',
    email: 42,
    address: '736A, Rajendra Nagar Easttttttttttttttttttttttt'
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

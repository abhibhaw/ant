import { DataGrid } from '@material-ui/data-grid';
import { Card, CardHeader, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useQuery, useMutation } from '@apollo/client';
import GET_HUBS from './hubQuery';
import { DELETE_HUB } from './hubMutation';
import Loading from '../shared/Loading';

export default function DisplayHub() {
  const { loading, error, data } = useQuery(GET_HUBS);
  const [deleteHub, deletedHubData] = useMutation(DELETE_HUB);
  if (loading) return <Loading />;
  if (error) return 'Error!';
  if (deletedHubData.loading) return <Loading />;
  if (deletedHubData.error) return 'Error!';

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
            color="primary"
            size="small"
            onClick={() => {
              // eslint-disable-next-line no-alert
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
            onClick={(e) => {
              e.stopPropagation();
              deleteHub({ variables: { id: params.id } });
              // eslint-disable-next-line no-alert
              alert('Deleted, Refresh Page to see effect');
            }}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </strong>
      )
    }
  ];
  const rows = data.hubs;

  return (
    <Card>
      <CardHeader subheader="Currently added Hubs." title="Hubs" />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>
    </Card>
  );
}

// src/components/MessageGrid.jsx
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function MessageGrid({ rows }) {
  const columns = [
    { field: 'uid',      headerName: 'UID',      width: 150 },
    { field: 'business', headerName: 'Business', width: 200 },
    { field: 'subject',  headerName: 'Subject',  width: 400 },
  ];

  const formatted = rows.map(r => ({ id: r.uid, ...r }));

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={formatted}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
      />
    </div>
  );
}

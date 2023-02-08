import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { DataGrid } from '@mui/x-data-grid';
import GetScrapers from '../Scripts/Get_Scrapers'
import CircularProgress from '@mui/joy/CircularProgress';
import Alert from '@mui/joy/Alert';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'scraperName',
    headerName: 'Scraper Name',
    width: 200,
  },
  {
    field: 'gitURL',
    headerName: 'Git URL',
    width: 250,
    renderCell: (params) => (
      <Button variant="outlined" href={params.value} target="_blank">
        {(params.value.length > 18 && 
          params.value.slice(0, 17) + "..."
        ) || params.value
        }
      </Button>
    )
  },
  {
    field: 'downloadURL',
    headerName: 'Download URL',
    width: 250,
    renderCell: (params) => (
      <Button variant="outlined" href={params.value} target="_blank">
        {(params.value.length > 18 && 
          params.value.slice(0, 17) + "..."
        ) || params.value
        }
      </Button>
    )
  },
];


const Landing = () => {
  let [error, rows] = GetScrapers()

  if (!rows) {
    return <Box>
      <CircularProgress
        color="primary"
        determinate={false}
        size="lg"
        value={25}
        variant="soft"
      />
      </Box>;
  }

  if (error) {
    return <Alert color="danger" size="lg" variant="solid">{error.message}</Alert>;
  }

  return (
    <Box sx={{ height: 635, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[10, 25, 50, 100]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  )
}

export default Landing

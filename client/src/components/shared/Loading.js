import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

export default function CircularIndeterminate() {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    </div>
  );
}

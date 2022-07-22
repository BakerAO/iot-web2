import { Typography, Link } from '@mui/material'

export default function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {`Copyright © ${new Date().getFullYear()} `}
      <Link color="inherit" href="https://tidoba.com">
        Tidoba LLC
      </Link>
    </Typography>
  );
}

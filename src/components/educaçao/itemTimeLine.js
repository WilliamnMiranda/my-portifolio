import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { MdAccountBalance} from "react-icons/md";
import { FaReact,FaUserGraduate,FaNodeJs} from "react-icons/fa";
import {createTheme} from '@mui/system';
export default function ItemTimeLine() {
  
  const dot = createTheme({
          width:'50px',
          height: "50px",
          alignItems:"center",
          justifyContent:"center",
          fontSize : '1.5em',
          backgroundColor:"white",
          color: "black"
  });

  return (
    <Timeline sx={{width : "1000px"}} position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          06/2016 | 01/2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={dot}>
            <FaUserGraduate />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="h6" component="span">
            Estácio
          </Typography>
          <Typography>Análise e desenvolvimento de sistemas</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          01/2019 | 08/2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={dot}>
            <FaReact/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="h6" component="span">
            Origamid
          </Typography>
          <Typography>React HTML CSS JavaScript Sass Bootstrap</Typography>
        </TimelineContent>
      </TimelineItem>

    <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          01/2020 | 03/2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={dot}>
            <MdAccountBalance sx={{fontSize : "4.0em"}} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="h6" component="span">
            Udemy
          </Typography>
          <Typography>Mysql,Typescipt</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          06/2021 | 01/2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={dot}>
            <FaNodeJs/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="h6" component="span">
            One bit code
          </Typography>
          <Typography>MongoDB Express Mongoose NodeJS</Typography>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  );
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player'
class MdiaC extends React.Component {
  render() {
  return (
    <>
    <ReactPlayer url='rtsp://surv:zara0786@73.2.206.254:5445/Stream1/Channel=1' playing/>
    </>
        // <Card sx={{ maxWidth: 300 }}>
        //   {/* <CardMedia
        //   component="iframe"
        //   src="rtsp://user:saad1234@73.232.30.202:8554/cam/realmonitor?channel=1&subtype=0"
        //   allow="autoPlay"
        //   onPlaying
        //   /> */}
          
        //   <CardContent>
        //     {/* <Typography gutterBottom variant="h5" component="div">
        //       Lizard
        //     </Typography> */}
        //     {/* <Typography variant="body2" color="text.secondary">
              
        //     </Typography> */}
        //   </CardContent>
        //   <CardActions>
        //     {/* <Button size="small">Share</Button>
        //     <Button size="small">Learn More</Button> */}
        //   </CardActions>
        // </Card>
      );
}
}

export default MdiaC;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({weatherInfo}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
            title="default weather image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherInfo.city}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              
                <p>mininum temperature : {weatherInfo.tempMin}</p>
                <p>maximum temperature : {weatherInfo.tempMax}</p>
                <p>humidity : {weatherInfo.humidity}</p>
              
            </Typography>
          </CardContent>
        </Card>
      );
}
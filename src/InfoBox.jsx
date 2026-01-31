import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1580049904360-a9c3b79f86ff?w=1600&auto=format&fit=crop&q=60";


  if (!info) {
    return null;
  }

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={INIT_URL}
            title="weather image"
          />

          <CardContent>
            <Typography gutterBottom variant="h5">
              {info.city}
            </Typography>

            <Typography variant="body2" color="text.secondary" component="span">
              <p>Temperature: {info.temp}°C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Min Temp: {info.tempMin}°C</p>
              <p>Max Temp: {info.tempMax}°C</p>
              <p>
                Weather is <b>{info.weather}</b> and feels like{" "}
                <b>{info.feelslike}°C</b>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
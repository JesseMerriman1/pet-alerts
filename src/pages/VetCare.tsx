import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import './VetCare.css';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const defaultCenter = {
  lat: 37.7749,
  lng: -122.4194,
};

const VetCare: React.FC = () => {
  const [mapCenter, setMapCenter] = useState(defaultCenter);

  const openNearbyVetClinics = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=veterinary+care&location=${mapCenter.lat},${mapCenter.lng}`;
    InAppBrowser.create(url, '_system');
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setMapCenter(currentLocation);
        },
        () => {
          console.log('Geolocation not available.');
        }
      );
    } else {
      console.log('Geolocation not available.');
    }
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Vet Care</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="map-container">
          <LoadScript googleMapsApiKey="AIzaSyADMpBmUb_Qvge3MSvoxKsoOvnC31cFcRA">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={mapCenter}
              zoom={13}
            >
              <Marker position={mapCenter} />
            </GoogleMap>
          </LoadScript>
        </div>
        <IonButton expand="full" onClick={openNearbyVetClinics}>
          Find Nearby Vet Clinics
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default VetCare;

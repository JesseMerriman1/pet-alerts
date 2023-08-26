import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
} from '@ionic/react';
import './Pets.css'; // Import the custom CSS file

const Tab1: React.FC = () => {
  const [pets, setPets] = useState<string[]>([]);
  const [duePets, setDuePets] = useState<string[]>([]);

  useEffect(() => {
    // Simulate fetching a list of pets
    setTimeout(() => {
      const fetchedPets = ['Fluffy, DOG', 'Beth, CAT', 'Elsa, DOG', 'Chirpy, Bird'];
      setPets(fetchedPets);

      // Determine pets due for vaccines
      const petsDueForVaccines = fetchedPets.filter((_, index) => (index + 1) % 3 === 0);
      setDuePets(petsDueForVaccines);
    }, 1000);

    // ... Rest of the code
  }, []);

  const showVaccineAlert = (petName: string) => {
    alert(`Your pet ${petName} is due for Vaccines!`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pets</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Pets</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {pets.map((pet, index) => (
            <IonItem key={index} className="pet-item">
              <IonLabel>{pet}</IonLabel>
              {duePets.includes(pet) && (
                <IonButton
                  className="vaccine-button"
                  slot="end"
                  onClick={() => showVaccineAlert(pet)}
                >
                  Vaccine Alert
                </IonButton>
              )}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

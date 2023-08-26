import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import './Records.css';

interface PetRecord {
  id: number;
  name: string;
  age: number;
  breed: string;
  weight: string;
  sex: string;
  color: string;
  file: File | null;
}

const Records: React.FC = () => {
  const [records, setRecords] = useState<PetRecord[]>([]);
  const [newRecord, setNewRecord] = useState<PetRecord>({
    id: 0,
    name: '',
    age: 0,
    breed: '',
    weight: '',
    sex: '',
    color: '',
    file: null,
  });

  const handleFileChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setNewRecord((prevRecord) => ({ ...prevRecord, file: selectedFile }));
    }
  };

  const addRecord = () => {
    if (newRecord.name.trim() !== '') {
      setNewRecord((prevRecord) => ({
        ...prevRecord,
        id: prevRecord.id + 1,
      }));
      setRecords([...records, newRecord]);
      setNewRecord({
        id: 0,
        name: '',
        age: 0,
        breed: '',
        weight: '',
        sex: '',
        color: '',
        file: null,
      });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Medical Records</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="record-entry">
          <IonItem>
            <IonLabel position="floating">Pet's Name</IonLabel>
            <IonInput
              value={newRecord.name}
              onIonChange={(e) =>
                setNewRecord({ ...newRecord, name: e.detail.value! })
              }
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Age</IonLabel>
            <IonInput
              type="number"
              value={newRecord.age}
              onIonChange={(e) =>
                setNewRecord({ ...newRecord, age: +e.detail.value! })
              }
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Breed</IonLabel>
            <IonInput
              value={newRecord.breed}
              onIonChange={(e) =>
                setNewRecord({ ...newRecord, breed: e.detail.value! })
              }
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Weight</IonLabel>
            <IonInput
              value={newRecord.weight}
              onIonChange={(e) =>
                setNewRecord({ ...newRecord, weight: e.detail.value! })
              }
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Sex</IonLabel>
            <IonSelect
              value={newRecord.sex}
              onIonChange={(e) =>
                setNewRecord({ ...newRecord, sex: e.detail.value! })
              }
            >
              <IonSelectOption value="Male">Male</IonSelectOption>
              <IonSelectOption value="Female">Female</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Color</IonLabel>
            <IonInput
              value={newRecord.color}
              onIonChange={(e) =>
                setNewRecord({ ...newRecord, color: e.detail.value! })
              }
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Upload Photo</IonLabel>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e.target.files)}
            />
          </IonItem>
          <IonButton expand="full" onClick={addRecord}>
            Add Record
          </IonButton>
        </div>
        <div className="record-list">
          {records.map((record) => (
            <div key={record.id} className="record-item">
              <div>Name: {record.name}</div>
              <div>Age: {record.age}</div>
              <div>Breed: {record.breed}</div>
              <div>Weight: {record.weight}</div>
              <div>Sex: {record.sex}</div>
              <div>Color: {record.color}</div>
              {record.file && (
                <img
                  src={URL.createObjectURL(record.file)}
                  alt="Selected"
                  className="selected-image"
                />
              )}
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Records;

import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Pets from './pages/Pets';
import Records from './pages/Records';
import VetCare from './pages/VetCare';
import React from 'react';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Pets">
            <Pets />
          </Route>
          <Route exact path="/Records">
            <Records/>
          </Route>
          <Route path="/VetCare">
            <VetCare />
          </Route>
          <Route exact path="/">
            <Redirect to="/Pets" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Pets" href="/Pets">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Pets</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Records" href="/Records">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Records</IonLabel>
          </IonTabButton>
          <IonTabButton tab="VetCare" href="/VetCare">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Vet Care</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

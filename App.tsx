import * as React from 'react';
import './style.css';
import Accrdion from './Accordion';
export default function App() {
  return (
    <div>
      <Accrdion
        title={'Accordion Titile-1'}
        content={
          'This is Mohan Dandigam And I am Currently Pursing My masters at California State University East Bay'
        }
      />
      <Accrdion
        title={'Accordion Titile-1'}
        content={
          'This is Mohan Dandigam And I am Currently Pursing My masters at California State University East Bay'
        }
      />
      <Accrdion
        title={'Accordion Titile-1'}
        content={
          'This is Mohan Dandigam And I am Currently Pursing My masters at California State University East Bay'
        }
      />
    </div>
  );
}

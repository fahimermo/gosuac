import React from 'react'
import ContactForm from '../components/Contacto/ContactForm'
import Logo from '../components/Logo'
import Menu from '../components/Menu'

import { getContactPage } from '../lib/squidex'

// Google map
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

import styles from '../styles/Contacto.module.css'
import Container from '../components/Container'
import Toggle from '../components/Contacto/Toggle'

const mapStyles = require('../styles/GoogleMapStyles.json')

export default function Contacto({ data }) {
  const MyMapComponent = compose(
    withProps({
      googleMapURL:
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyDvuFWzm09XxxbywLcjZRvvg8AiAn-e94M&v=3.exp&libraries=geometry,drawing,places',
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: (
        <div
          style={{
            height: `100vh`,
            // position: "absolute",
            // top: "0px",
            // left: "0px",
          }}
        />
      ),
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: props.lat + 0.5, lng: props.lng - 2 }}
      defaultOptions={{
        disableDefaultUI: true, // disable default map UI
        draggable: true, // make map draggable
        keyboardShortcuts: false, // disable keyboard shortcuts
        scaleControl: true, // allow scale controle
        scrollwheel: true, // allow scroll wheel
        styles: mapStyles, // change default map styles
      }}
    >
      {props.isMarkerShown && (
        <Marker
          icon={{
            url: `${process.env.assetsUrl}/${props.marker}`,
          }}
          position={{ lat: props.lat, lng: props.lng }}
        />
      )}
    </GoogleMap>
  ))

  return (
    <div className={styles.contacto}>
      <Menu contactData={data} rightBar="black" ribbon="black" />

      <MyMapComponent
        isMarkerShown={true}
        lat={data.location.iv.latitude}
        lng={data.location.iv.longitude}
        marker={data.markericon.iv[0]}
      />

      <div className={`absolute top-0 left-0 w-full ${styles.container}`}>
        <Logo src={data.darklogo.iv[0]} />
        <Container>
          <div className="z-0 sm:mx-20 md:mx-32 lg:mx-48 xs:mx-0">
            <ContactForm data={data} />
          </div>
        </Container>
      </div>

      <Toggle />
    </div>
  )
}

export async function getStaticProps() {
  const data = await getContactPage()
  // console.log('contact page', data)

  return {
    props: {
      data,
    },
  }
}

import React from 'react'
import Image from '../Image'
import styles from './ContactForm.module.css'

export default function ContactForm({ data }) {
  return (
    <div className={`${styles.contacts} px-8 py-12 sm:px-12 sm:py-16 relative`}>
      <h1 className={`${styles.hey}`}>{data.bigtitle['es']}</h1>

      <div className={`${styles.title}`}>{data.title['es']}</div>
      <div className={`${styles.text} my-2`}>{data.subtitle['es']}</div>
      <div className="mt-4">
        <input type="text" placeholder="Tu Nombre" className="mb-4 block py-2 px-4 w-full" />
        <input type="text" placeholder="Tu E mail" className="mb-4 block py-2 px-4 w-full" />
        <textarea rows="5" placeholder="Había una vez…" className="py-2 px-4 w-full" />
      </div>
      <button className="px-4 py-1 sm:px-8 sm:py-2 my-4">{true ? 'ENVIAR' : 'SUBMIT'}</button>
      <ul>
        <li>
          <i className="icofont-at"></i> {data.email['es']}
        </li>
        <li>
          <i className="icofont-phone"></i> {data.phonenumber['es']}
        </li>
        <li>
          <i className="icofont-google-map"></i> {data.address.iv}
        </li>
      </ul>

      {data.formimage.iv[0] && (
        <div className={styles.image}>
          <Image src={data.formimage.iv[0]} altText="Contact form" />
        </div>
      )}
    </div>
  )
}

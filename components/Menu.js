import React from 'react'
import { useState } from 'react'
// import { slide as MainMenu } from "react-burger-menu";
import Link from 'next/link'

import styles from './Menu.module.css'

/**
* rightBar: desktop
* ribbon: mobile
*/
export default function Menu({ rightBar = 'green', ribbon = 'green' }) {
  const [visibility, setVisibility] = useState(false)
  const [hoverExpertise, setHoverExpertise] = useState(0)
  const [hoverSub, setHoverSub] = useState(0)

  return (
    <>
      {!visibility && (
        <>
          {/* <div
            className={`${styles.fixed_right_bar} invisible sm:visible`}
            onClick={() => setVisibility(true)}
          >
            <div className="relative h-full">
              <div className={styles.burger_icon}>
                <div className={styles.top}></div>
                <div className={styles.middle}></div>
                <div className={styles.top}></div>
              </div>
            </div>
          </div> */}
          <div className={`${styles[rightBar === 'green' ? 'right_bar_green' : 'right_bar_black']} ${styles[ribbon === 'green' ? 'background_green' : 'background_black']}`} onClick={() => setVisibility(true)}>
            <div className="relative h-full">
              <div className={`${styles[rightBar === 'green' ? 'burger_icon' : 'burger_icon_black']} ${styles[ribbon === 'green' ? 'mobile_burger_green' : 'mobile_burger_black']} ${styles.burger_icon}`}>
                <div className={styles.top} />
                <div className={styles.middle} />
                <div className={styles.top} />
              </div>
            </div>
          </div>
        </>
        // ) : (
        //     <div className={`${styles.fixed_right_bar_black}`} onClick={() => setVisibility(true)}>
        //       <div className="relative h-full">
        //         <div className={`${styles.burger_icon_black} ${styles.burger_icon}`}>
        //           <div className={styles.top} />
        //           <div className={styles.middle} />
        //           <div className={styles.top} />
        //         </div>
        //       </div>
        //     </div>
        //   )}
      )}
      {visibility && (
        <div className={styles.menu}>
          <div className={styles.close} onClick={() => setVisibility(false)}>
            <i className="icofont-close" />
          </div>
          <div className="container mx-auto px-0">
            <div className={`${styles.menu_items} mt-32 sm:mt-64 sm:mb-10`}>
              <Link href="/">
                <a id="home">
                  <div className={`${styles.number} invisible sm:visible`}>01. </div>
                  HOME
                </a>
              </Link>
              <div onMouseEnter={() => setHoverExpertise(1)} onMouseLeave={() => setHoverExpertise(0)}>
                <Link href="/expertise">
                  <a id="expertise">
                    <div className={`${styles.number} invisible sm:visible`}>02. </div>
                    EXPERTISE
                  </a>
                </Link>
                {hoverExpertise === 1 && (
                  <>
                    <Link href="/">
                      <a>
                        <div
                          className={`${styles.sub_titulo}`}
                          onMouseEnter={() => setHoverSub(1)}
                          onMouseLeave={() => setHoverSub(0)}
                        >
                          <div className={styles.text}>Desarrollo de Negocio</div>
                          {hoverSub === 1 && <div className={styles.greenbar} />}
                        </div>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <div
                          className={`${styles.sub_titulo}`}
                          onMouseEnter={() => setHoverSub(2)}
                          onMouseLeave={() => setHoverSub(0)}
                        >
                          <div className={styles.text}>Marketing Online</div>
                          {hoverSub === 2 && <div className={styles.greenbar} />}
                        </div>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <div
                          className={`${styles.sub_titulo}`}
                          onMouseEnter={() => setHoverSub(3)}
                          onMouseLeave={() => setHoverSub(0)}
                        >
                          <div className={styles.text}>Marketing Offline</div>
                          {hoverSub === 3 && <div className={styles.greenbar} />}
                        </div>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <div
                          className={`${styles.sub_titulo}`}
                          onMouseEnter={() => setHoverSub(4)}
                          onMouseLeave={() => setHoverSub(0)}
                        >
                          <div className={styles.text}>Software</div>
                          {hoverSub === 4 && <div className={styles.greenbar} />}
                        </div>
                      </a>
                    </Link>
                  </>
                )}
              </div>
              <Link href="/culpable">
                <a id="culpable">
                  <div className={`${styles.number} invisible sm:visible`}>03. </div>
                  LOS CULPABLES
                </a>
              </Link>
              <Link href="/blog">
                <a id="blog">
                  <div className={`${styles.number} invisible sm:visible`}>04. </div>
                  BLOG
                </a>
              </Link>
              <Link href="/contacto">
                <a id="contacto">
                  <div className={`${styles.number} invisible sm:visible`}>05. </div>
                  CONTACTO
                </a>
              </Link>
            </div>
            {/* {!hoverExpertise ? (
              <div className="pt-12 flex">
                <div className={`${styles.socials} w-1/2`}>
                  <div className={`pl-20`}>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`${styles.contacts} w-1/2 justify-end flex`}>
                  <div>
                    <ul>
                      <li>
                        <i className="icofont-at"></i> {contactData.email["es"]}
                      </li>
                      <li>
                        <i className="icofont-phone"></i>{" "}
                        {contactData.phonenumber["es"]}
                      </li>
                      <li>
                        <i className="icofont-google-map"></i>{" "}
                        {contactData.address.iv}
                      </li>
                    </ul>
                    <div className={`${styles.copyright}`}>
                      <b>
                        <em>@GosuaC</em>
                      </b>{" "}
                      2020. S.L /Todos los derechos reservados
                    </div>
                  </div>
                </div>
              </div>
            ) : ( */}
            <div className={`${styles.socials} ml-12 sm:ml-0 sm:justify-end sm:flex`}>
              <div className={`sm:pl-20`}>
                <ul className="sm:flex">
                  <li>
                    <a href="#">
                      <i className="icofont-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-linkedin" />
                    </a>
                  </li>
                </ul>
                <div className={`${styles.copyright}`}>
                  <b>
                    <em>@GosuaC</em>
                  </b>{' '}
                  2020. S.L /Todos los derechos reservados
                </div>
              </div>
            </div>
            {/* )} */}
          </div>
        </div>
      )}
    </>
  )
}

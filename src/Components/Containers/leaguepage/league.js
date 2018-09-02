import React, { Component } from 'react';

import './league.css';
// import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { Wrapper } from '../../Wrappers/wrapbut.js';

const text = [
  { name: 'RPL', fullname: 'SERIE A',
    txt: '' },
  { name: 'EPL', fullname: 'ENGLISH PREMIER LEAGUE',
    txt: '' },
  { name: 'LL', fullname: 'LA LIGA',
    txt: '' },
  { name: 'Bundesliga', fullname: 'BUNDESLIGA',
    txt: '' }
];

export default class Leaguepage extends Component {
  constructor(props){
      super(props);
  }

  render() {
    const link = this.props.link;
    const content = ' consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    // console.log(link);

    return (
      <div className = 'container pl-0 pr-0 pb-0'>
        <div className = 'row align-items-center justify-content-center'>

          {text.map((item) => {
            if (link === item.name) {
              return (
                <div className='col-10 col-md-10 mr-1 pt-4' key = {item.name}
                  style = {{ paddingTop: '1%' }}
                >


                  <div className = 'container m-0 p-2'>
                    <div className = 'row justify-content-center'
                      style = {{ height: '88%' }}
                    >


                      {/* <figure>
                                                                <img src = 'https://vignette.wikia.nocookie.net/necyklopedie/images/a/ab/Bean_Avatar.jpg/revision/latest?cb=20120117111843'
                                                                 style = {{width: '100px', height: '100px', borderRadius: '20px'}}/>
                                                                <figcaption>Simple image</figcaption>
                                                            </figure>*/}

                      <div className = 'col pl-4 pr-4 pb-4 anim'
                        style = {{ width: '50%', marginTop: '4%' }}
                      >


                        <Link to = {`/public/table/${link}`} key = {item.name}
                          className='btn btn-primary'
                          style = {{ borderRadius: '50%', display: 'block', height: '363.56px' }}
                        >
                          <h3 className = 'p-1 display-4'
                            style = {{ marginTop: '110px' }}
                          >TABLE GRAPH</h3>
                          <p
                            style = {{ fontSize: '20pt' }}
                          >
                              Кликни на кружок
                          </p>
                        </Link>


                      </div>

                      <div className = 'col pl-4 pr-4 pb-4 anim'
                        style = {{ width: '50%', marginTop: '4%' }}
                      >

                        <Link to = {`/public/scores/${link}`}
                          className='btn btn-primary'
                          style = {{ borderRadius: '50%', display: 'block', height: '363.56px' }}
                        >
                          <h3 className = 'p-1 display-4'
                            style = {{ marginTop: '110px' }}
                          >SIMPLE TABLE</h3>
                          <p
                            style = {{ fontSize: '20pt' }}
                          >
                              Кликни на кружок
                          </p>
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // console.log('false');
          })
          }
        </div>
      </div>
    );
  }
}

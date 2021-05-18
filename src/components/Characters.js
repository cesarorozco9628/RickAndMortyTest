import React from 'react';
import {useHistory} from 'react-router-dom'
import Navigation from '../components/Navigation';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost'



const CHAQ = () => {
    const history = useHistory();
    return <Query query={gql`{
        characters {
          results{
            id
            name
            image
            location{
                name
                type
            }
          }
        }
      }`}>
          {({loading, error, data}) => {
              if(loading) return <p>loading ...</p>
              if(error) return <p>Error!!</p>
              return data.characters.results.map((element) => {
                  return (
                      <div className='card'>
                        <div className='card-chart'>
                            <div className='card-img'>
                                <img className='img' src={element.image}/>
                            </div>
                            <div className='card-text'>
                                <p>Name: {element.name}</p>
                                <p>Location: {element.location.name}</p>
                                <button className='btn btn-primary' onClick={() => history.push(`/characters/character/${element.id}`)}>info...</button>
                            </div>
                        </div>
                      </div>
                  );
              });
          }}
      </Query>
}

const Characters = () => {
    return(
        <>
            <Navigation/>
            <section>
                <div className='cards'>
                    <CHAQ/>
                </div>
            </section>
        </>
    )
}

export default Characters;
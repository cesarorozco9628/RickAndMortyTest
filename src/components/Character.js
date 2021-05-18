import React from 'react';
import {useParams} from 'react-router-dom'
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';
import Navigation from './Navigation';

const Char = () => {
    const {id} = useParams();
    return <Query query={gql`{
        character(id: ${id}){
         id
        name
        status
        species
        type
        gender
        image
        episode{
          episode
        }
      }
    }`}>
          {({loading, error, data}) => {
              if(loading) return <p>loading ...</p>
              if(error) return <p>Error!!</p>
              return (
                <div className='card-chart-info'>
                   <div className='card-info'>
                        <div className='card-img-info'>
                            <img className='img-info' src={data.character.image}/>
                        </div>
                        <div className='card-text-info'>
                            <p>Name: {data.character.name}</p>
                            <p>Status: {data.character.status}</p>
                            <p>Species: {data.character.species}</p>
                            <p>Type: {data.character.type}</p>
                            <p>Gender: {data.character.gender}</p>
                            <p>Numero de episodios: {data.character.episode.length}</p>
                        </div>
                   </div>
                </div>
              );
          }}
      </Query>
}



const Character = () => {
    return(
        <>
            <Navigation/>
            <section>
                <div className='cards-info'>
                    <Char/>
                </div>
            </section>
        </>
    );
}

export default Character;
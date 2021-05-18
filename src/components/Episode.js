import React from 'react';
import {useParams} from 'react-router-dom'
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';
import Navigation from './Navigation';


const EpisodeInfo = () => {
    const {id} = useParams();
    return <Query query={gql`{
        episode(id:${id}){
            id
            name
            characters{
              name
            }
          }
        }`}>
          {({loading, error, data}) => {
              if(loading) return <p>loading ...</p>
              if(error) return <p>Error!!</p>
              return (
                <div className='card-episode-info'>
                    <div>
                        <p className='p-name'>Name:</p>
                        <p className='text-name'>{data.episode.name}</p>
                    </div>
                   <div className='pad-char'>
                        <p className='p-name'>Characters:</p>
                        <ul className='list-char'>  
                            {data.episode.characters.map((element) => {
                                return <li className='li-char'>{element.name}</li>
                            })}
                        </ul>
                   </div>
                </div>
              );
          }}
      </Query>
}



const Episode = () => {
    return(
        <>
            <Navigation/>
            <section>
                <div className='card-episode'>
                    <EpisodeInfo/>
                </div>
            </section>
        </>
    );
}

export default Episode;
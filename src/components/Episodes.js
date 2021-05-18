import React from 'react';
import {useHistory} from 'react-router-dom'
import Navigation from '../components/Navigation';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost'



const EpisodesLists = () => {
    const history = useHistory();
    return <Query query={gql`{
        episodes{
        results{
        id
        name
        air_date
        episode
        }
        }
      }`}>
          {({loading, error, data}) => {
              if(loading) return <p>loading ...</p>
              if(error) return <p>Error!!</p>
              return data.episodes.results.map((element) => {
                  return (
                      <div className='card-episodes'>
                        <div className='card-chart'>
                            <div className='card-text'>
                                <p>Name: {element.name}</p>
                                <p>Air Date: {element.air_date}</p>
                                <button className='btn btn-primary' onClick={() => history.push(`/episodes/episode/${element.id}`)}>info...</button>
                            </div>
                        </div>
                      </div>
                  );
              });
          }}
      </Query>
}

const Episodes = () => {
    return(
        <>
            <Navigation/>
            <section>
                <div className='cards'>
                    <EpisodesLists/>
                </div>
            </section>
        </>
    )
}

export default Episodes;
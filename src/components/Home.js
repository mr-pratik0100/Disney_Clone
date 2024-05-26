import React, { useEffect } from 'react'
import './Home.css'
import ImageSlider from './ImageSlider'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Recommends from './Recommends'
import Tranding from './Tranding'
import Viewers from './Viewers'
import { useDispatch, useSelector } from 'react-redux'
import db from '../firebase'
import { setMovies } from '../features/movie/movieSlice'
import { selectUserName } from '../features/user/userSlice'


const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];



    useEffect(() => {
        db.collection('movies').onSnapshot((snapShot) => {
            snapShot.docs.map((doc) => {
                console.log(recommends)
                switch (doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends, { id: doc.id, ...doc.data() }]
                        break;
                    case 'new':
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }]
                        break;
                    case 'original':
                        originals = [...originals, { id: doc.id, ...doc.data() }]
                        break;
                    case 'trending':
                        trending = [...trending, { id: doc.id, ...doc.data() }]
                        break;

                }
            });


            dispatch(setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                trending: trending,
            }));
        });
    }, [userName]);

    return (
        <div className='home'>
            <ImageSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Tranding />

        </div>
    )
}

export default Home
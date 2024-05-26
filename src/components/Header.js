import React, { useEffect } from 'react'
import { auth, provider } from '../firebase'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../features/user/userSlice'
import Login from './Login'
import { Link } from 'react-router-dom'

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {
        //to navigate to home
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                navigate('/home')
            }
        })
    }, [userName])

    const handleAuth = (e) => {
        e.preventDefault();

        if (!userName) {
            auth
                .signInWithPopup(provider)
                .then((result) => {
                    // console.log(result.user);
                    // console.log(result.user.displayName)
                    setUser(result.user);

                })
                .catch((error) => {
                    alert(error.message)
                });
        }
        else if (userName) {
            auth
                .signOut()
                .then(() => {
                    dispatch(setSignOutState())
                    navigate('/')
                })
                .catch((err) => alert(err.message))
        }
    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        })
        );
    };



    return (
        <div className='header'>
            <Link to='/home'>
            <a className='header__logo'>
                <img className='header__logoImg' src="/images/logo.svg" alt="disney" />
            </a>
            
            </Link>

            {
                !userName ? <a onClick={handleAuth} className='header__login' href="">Login</a> : <>


                    <div className='nav'>
                        <a href="/home">
                            <img src="/images/home-icon.svg" alt="" />
                            <span>HOME</span>
                        </a>
                        <a href="/home">
                            <img src="/images/search-icon.svg" alt="" />
                            <span>SEARCH</span>
                        </a>
                        <a href="/home">
                            <img src="/images/watchlist-icon.svg" alt="" />
                            <span>WATCHLIST</span>
                        </a>
                        <a href="/home">
                            <img src="/images/original-icon.svg" alt="" />
                            <span>ORIGINALS</span>
                        </a>
                        <a href="/home">
                            <img src="/images/movie-icon.svg" alt="" />
                            <span>MOVIES</span>
                        </a>
                        <a  href="/home">
                            <img className='header__series' src="/images/series-icon.svg" alt="" />
                            <span className='header__series'>SERIES</span>
                        </a>
                    </div>
                    <div className='header__right'>
                        <img className='header__userphoto' src={userPhoto} alt={userName} />
                        <div className='header__rightSignout'>
                            <span  className='header__signOut' onClick={handleAuth} >Sign Out</span>
                        </div>
                    </div>
                </>
            }

            {/* <a onClick={handleAuth} className='header__login' href="">Login</a> */}
        </div>


    )
}

export default Header
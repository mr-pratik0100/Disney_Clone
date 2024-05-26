import React, { useEffect, useState } from 'react'
import './Detail.css'
import { useParams } from 'react-router-dom'
import db from '../firebase'

const Detail = () => {
    const { id } = useParams()
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        db.collection("movies")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setDetailData(doc.data());
                }
                else {
                    console.log("no such document");
                }
            })
            .catch((error) => {
                console.log("Error getting document", error)
            });
    }, [id]);

    return (
        <div className='detail'>
            <div className="detail__background">
                <img src={detailData.backgroundImg}alt={detailData.title} />
            </div>
            <div className='detail__imageTitle'>
                <img src={detailData.titleImg} alt={detailData.titleImg} />
            </div>
            <div className='detail__content'>
                <div className='detail__contentControl'>
                    <button className='detail__playImg'>
                        <img src="/images/play-icon-black.png" alt="" />
                        <span>Play</span>
                    </button>
                    <button className='detail__playImg detail__player' >
                        <img src="/images/play-icon-white.png" alt="" />
                        <span>Trailer</span>
                    </button>

                    <div className="detal__Addlist">
                        <span></span>
                        <span></span>
                    </div>
                    <div className='detail__group'>
                        <div>
                            <img src="/images/group-icon.png" alt="" />
                        </div>
                    </div>

                    
                </div>

                <div className='detail__subtitle'>
                    {detailData.subTitle}
                </div>
                <div className="detail__description">
                    {detailData.description}
                </div>

            </div>
        </div>
    )
}

export default Detail


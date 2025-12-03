import React from 'react'
import './Rowlist.css'
import Row from '../Row/Row'
// import img from '../../../assets/images/netflix-curent-baner.jpg'
import MyRequests from '../../../Utils/MyRequests'

function Rowlist() {
return (
    <>
        <Row myTitle="Trending Now" fetchUrl={MyRequests.fetchTrending} />
        <Row myTitle="Top Rated" fetchUrl={MyRequests.fetchTopRated} />
    </>
);
}

export default Rowlist

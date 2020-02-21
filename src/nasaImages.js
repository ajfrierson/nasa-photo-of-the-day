import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function NasaImages() {
    const [nasaImg, updateNasaImg] = useState("");
    const [imgExplanation, updateImgExplanation] = useState("");
    const [imgDate, updateImgDate] = useState("");

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=Z12Kj94pFs9dM4vrc1yWs4NDYFsu6gL8M9yXcb17`)
          .then(res => {
            console.log(res.data)
            updateNasaImg(res.data.url)
            updateImgExplanation(res.data.explanation)
            updateImgDate(res.data.date)
          }).catch(err => {
            console.log(err)
          })
      }, [])

   

    return (
        <div>
            <p>{imgDate}</p>
            <img src={nasaImg} alt="Nasa Pic" />
            <p>{imgExplanation}</p>
        </div>
    );
};





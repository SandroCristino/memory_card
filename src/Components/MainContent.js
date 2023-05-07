import React, { useState, useEffect } from 'react'
import '../Styles/MainContent.css'

export default function MainContent(props) {
    const [totalCards] = useState(12)
    const [knownCards, setKnownCards] = useState([])
    const [cardsList, setCardsList] = useState([])


    function handleScore(card) {
        let newKnownCards = [...knownCards]

        if (!knownCards.includes(card.image)) {
            newKnownCards.push(card.image)
            setKnownCards(newKnownCards)
            props.increaseScore()
        } else {
            props.checkBestscore(newKnownCards.length)
            props.resetScore()
            setKnownCards([])
        }

    }

    function handleBuildCardsList() {
        const images = [
            require('../assets/Bird.jpg'),
            require('../assets/Bison.jpg'),
            require('../assets/Cat.jpg'),
            require('../assets/Dog.jpg'),
            require('../assets/Goose.jpg'),
            require('../assets/Meerkat.jpg'),
            require('../assets/Ostrich.jpg'),
            require('../assets/Owl.jpg'),
            require('../assets/Sheep.jpg'),
            require('../assets/Tiger.jpg'),
            require('../assets/Chicken.jpg'),
            require('../assets/Butterfly.jpg'),
            
        ]
        const newCardsList = []
        let randomNumber = -1
        let numbers = []

        for (let i = 0; i < totalCards; i++) {
            while (randomNumber === -1 || numbers.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * totalCards)
            }
            numbers.push(randomNumber)
        }

        for (let i = 0; i < totalCards; i++) {
            newCardsList.push({
                image: images[numbers[i]]
            })   
        }

        setCardsList(newCardsList)
    }

    useEffect(() => {
        handleBuildCardsList()
      }, []);

        return (
        <div>
            <h2>Get points by clicking on an image but don't click on any more then once</h2>
            <div>
                <div className='cardGrid'>
                     {cardsList.length > 0 && cardsList.map((card, index) => (
                            <div
                            className='cardItem'
                            onClick={() => {handleScore(card); handleBuildCardsList()}}
                            >
                                <img src={card.image} alt={`card ${index}`} />
                            </div>
                    ))} 
                </div>
            </div>
        </div>
        )
  }


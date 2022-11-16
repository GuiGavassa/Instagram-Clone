import { useEffect, useState } from 'react'
import './style.css'

export function Story() {
    const [stories, setStories] = useState([])

    const [limitUsers, setLimitUsers] = useState(9)

    const slice = stories.slice(0, limitUsers)

    useEffect(() => {
        fetch('https://api.github.com/users/GuiGavassa/followers')
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                setStories(result)
            })
            .catch((err) => {
                throw new Error(err)
            })
    }, [])

    return (
        <div className='container'>
            {slice.map((story, key) => (

                <div className='user-elements'>


                    <div key={key}>
                        <img className='image-user-story' src={`https://github.com/${story.login}.png`} />
                    </div>
                    <span className='user'>{story.login}</span>


                </div>
            ))}
        </div>
    );
}
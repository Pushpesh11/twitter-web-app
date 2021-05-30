import { FaGlobeAfrica, FaPhotoVideo, FaFilm, FaRegComment } from 'react-icons/fa'
import { AiOutlineBarChart, AiOutlineStar, AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'
import { BiTime, BiSmile, BiDotsHorizontalRounded, BiUpload } from 'react-icons/bi'
import Data from './Data'
import { useState } from 'react';
import { useGlobalContext } from 'react';

export default function Main() {
    //   const { increase } = useGlobalContext()

    const [data, setData] = useState(Data);
    const [input, setInput] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const handleTweet = () => {



        // e.preventDefault();
        // if(input && isEditing) {
        //     setInput (
        //         input.map((item) => {
        //             if(item.id === editID) {
        //                 return { ...item, title: input};
        //             }
        //             return item;
        //         })
        //     );
        //     setInput('');
        //     setEditID(null);
        //     setIsEditing(false);
        // } else {
        //     const newItem = { id: new Date().getTime.toString(), title: input};
        // }



        const newTweet = {name: 'Pushpesh Sharma',
        idname: '@thepushpesh',
        tweet: input,
        image: './img/push.png'};
        
        const newTwe = [...data, newTweet];
        setData(newTwe)
        setInput('');
    };

    const editItem = (id) => {
    const specificItem = data.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setInput(specificItem.title);
    };
    
    return (
        <main className="center">
            <header>Home <AiOutlineStar /></header>
            <div className="post">
                <div className="acc">
                    <img src="./img/push.png" alt=""/>
                    <div className="both">
                        {/* <form onSubmit={handleTweet}> */}
                        <div className="post-content">
                            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="What's happening?"/>
                            <span className="write"><FaGlobeAfrica/>Everyone can reply </span>
                        </div>
                        <div className="icons">
                            <FaPhotoVideo />
                            <FaFilm />
                            <AiOutlineBarChart />
                            <BiSmile />
                            <BiTime />
                            {/* <button type='submit'>Tweet</button> */}
                            <button onClick={() => {handleTweet()}}>Tweet</button>
                        </div>
                        {/* </form> */}
                    </div>
                </div>

                <div className="account-post">
                    <a href="">
                        {data.map((item,index) => {
                            const {id, image, name, idname, datetime, sponser, tweet, like} = (item);
                            return (

                        <div className="accountpo">
                            <div className="image">
                                <img src={image} alt={name}/>
                            </div>
                            <div className="tweeted">
                                <div className="account">{name}<span className="id">{idname} .{datetime}
                                    </span><span className="option"><BiDotsHorizontalRounded /></span></div>
                                <div className="content">{tweet}</div>
                                <div className="react">
                                    <button type="button"><FaRegComment/></button>
                                    <button type="button"><AiOutlineRetweet/></button>
                                    <button onClick = {() => console.log('pushpeh')} type="button"><AiOutlineHeart />{like}</button>
                                    <button type="button" onClick={() => editItem(id)}> <BiUpload /></button>
                                </div>
                            </div>
                        </div>
                            )}).reverse()}
                    </a>
                </div>
            </div>
        </main>
    )
}



import React from 'react'
import { FaTwitter, FaFeatherAlt, FaHome, FaEnvelope, FaRegBookmark, FaRegListAlt } from 'react-icons/fa';
import { MdNotifications, MdPerson, MdKeyboardArrowDown, MdSearch } from 'react-icons/md';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';

export default function Left() {
    return (
        <aside className="left">
            <div className="left-inside">
                <ul>
                    <button><FaTwitter/></button>
                    <button><FaHome /><span className="name">Home</span></button>
                    <button><MdSearch /><span className="name">Explore</span></button>
                    <button><MdNotifications /><span className="name">Notification</span></button>
                    <button><FaEnvelope /><span className="name">Message</span></button>
                    <button><FaRegBookmark /><span className="name">Bookmarks</span></button>
                    <button><FaRegListAlt/><span className="name">List</span></button>
                    <button><MdPerson /><span className="name">Profile</span></button>
                    <button><HiOutlineDotsCircleHorizontal /><span className="name">More</span></button>
                    <button><FaFeatherAlt/><span className="name">Tweet</span></button>
                </ul>

                <div className="account">
                   <img src="./img/push.png" alt=""/>
                    <div className="name-id">
                        <div className="myname">Pushpesh</div>
                        <div className="id">@thepushpesh</div>
                    </div>
                    <MdKeyboardArrowDown />
                </div>
            </div>
        </aside>
    )
}

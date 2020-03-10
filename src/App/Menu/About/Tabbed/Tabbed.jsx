import React, { useState } from 'react';
import './Tabbed.scss';

const tabItems = [
    {
        image: '/img/Photos/office-1.jpg',
        title: 'of1',
        text: 'This is the office 1.',
    },
    {
        image: '/img/Photos/office-2.jpg',
        title: 'of2',
        text: 'This is the office 2.',
    },
    {
        image: '/img/Photos/office-3.jpg',
        title: 'of3',
        text: 'This is the office 3.',
    },
];

const Tabbed = () => {

    const [currentTab, setCurrentTab] = useState(tabItems[0]);

    const isOf1 = (currentTab.title === 'of1') ? 'tab active':'tab';
    const isOf2 = (currentTab.title === 'of2') ? 'tab active':'tab';
    const isOf3 = (currentTab.title === 'of3') ? 'tab active':'tab';

    return (
        <div className={ 'Tabbed' }>

            <div className="tabs">
                <div onClick={ () => { setCurrentTab(tabItems[0]) } } className={ isOf1 }  >Office1</div>
                <div onClick={ () => { setCurrentTab(tabItems[1]) } } className={ isOf2 } >Office2</div>
                <div onClick={ () => { setCurrentTab(tabItems[2]) } } className={ isOf3 } >Office3</div>
            </div>

            <div className="content">
                <img  className="jpgs" src={ currentTab.image } alt={currentTab.title}/>
                <h2>{ currentTab.title }</h2>
                <p>{ currentTab.text }</p>
            </div>
        </div>
    )
}

export default Tabbed;
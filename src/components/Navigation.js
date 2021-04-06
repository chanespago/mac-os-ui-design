import React from 'react'

// CSS Import
import '../assets/css/Navigation.css';

// Images Import
import icon_setting from '../assets/img/apple-settings.png';
import icon_appstore from '../assets/img/app-store-2019-09-25.png';
import icon_media from '../assets/img/claquette-gif-video-tool-2021-02-25.png';
import icon_calendar from '../assets/img/fantastical-2-2015-03-25.png';
import icon_notes from '../assets/img/goodnotes-5-2021-03-19.png';
import icon_catalina from '../assets/img/macos-catalina-2019-10-08.png';
import icon_message from '../assets/img/messages-2019-09-25.png';
import icon_itunes from '../assets/img/music-2019-09-25.png';
import icon_twitter from '../assets/img/twitter-2015-12-30.png';
import icon_word from '../assets/img/microsoft-word-2019-05-01.png';
import icon_excel from '../assets/img/microsoft-excel-2019-05-01.png';
import icon_onenote from '../assets/img/microsoft-onenote-2019-05-01.png';
import icon_outlook from '../assets/img/microsoft-outlook-2019-04-22.png';
import icon_powerpoint from '../assets/img/microsoft-powerpoint-2019-05-01.png';
import { DOCK_ICONS } from './DOCK_ICONS';

export const Navigation = () => {
  return (
    <div className="dock">
      <ul className="dock-items">
        <DOCK_ICONS icon={icon_setting} />
        <DOCK_ICONS icon={icon_appstore} />
        <DOCK_ICONS icon={icon_media} />
        <DOCK_ICONS icon={icon_calendar} />
        <DOCK_ICONS icon={icon_notes} />
        <DOCK_ICONS icon={icon_catalina} />
        <DOCK_ICONS icon={icon_message} />
        <DOCK_ICONS icon={icon_itunes} />
        <DOCK_ICONS icon={icon_word} />
        <DOCK_ICONS icon={icon_excel} />
        <DOCK_ICONS icon={icon_onenote} />
        <DOCK_ICONS icon={icon_powerpoint} />
        <DOCK_ICONS icon={icon_outlook} />
        <DOCK_ICONS icon={icon_twitter} />
        </ul>
    </div>
  )
}

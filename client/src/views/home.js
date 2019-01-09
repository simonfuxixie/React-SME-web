import React, { Component } from 'react';
// import components
import Navbar from "../components/navbar.js";
import FullScreenIntro from "../components/full_screen_intro";
import Section2Col2Img from "../components/section_2col_2img";
import Section2Col1Img from "../components/section_2col_1img";
import SectionCountersMedia from "../components/section_counters_media";
import SectionImgButtonOn from "../components/section_imgfeature_buttonon";
import SectionClients from "../components/section_clients";
import ContactForm from "../components/section_contact_form";
import SectionFooter from "../components/section_footer";
// import data
import { NavbarItems } from "../data/json_data.js";
import {FullScreenIntroData} from "../data/json_data.js";
import {TextOnImgData} from "../data/json_data.js";
import {ImgBelowContentData} from "../data/json_data.js";
import {CountersAndMediaData} from "../data/json_data.js";
import {ImgButtonsOnData} from "../data/json_data.js";
import {ClientCarouselData} from "../data/json_data.js";
import {SocItemData} from "../data/json_data.js";
import {FooterMenuData} from "../data/json_data.js";
// create component
class ViewHome extends Component {
  render() {
    return (
      <div>
        <Navbar data={NavbarItems}/>
        <FullScreenIntro data={FullScreenIntroData}/>
        <Section2Col2Img data={TextOnImgData}/>
        <Section2Col1Img data={ImgBelowContentData}/>
        <SectionCountersMedia data={CountersAndMediaData}/>
        <SectionImgButtonOn data={ImgButtonsOnData}/>
        <SectionClients data={ClientCarouselData}/>
        <ContactForm />
        <SectionFooter data={SocItemData} footer_menu={FooterMenuData}/>
      </div>
    );
  }
}

export default ViewHome;

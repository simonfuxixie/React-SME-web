import React, { Component } from 'react';
import PrivacyPolicyHeaderImg from "../components/privacy_policy_img";
import PrivacyPolicyContent from "../components/privacy_policy_content";
//import SectionDemo from "../components/section_demo";

export default class ViewPrivacyPolicy extends Component {
  render () {
    return (
      <div>
        <PrivacyPolicyHeaderImg />
        <PrivacyPolicyContent />
      </div>
    );
  }
}

import React, { Component } from 'react';
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';


class PrivacyPolicyContent extends Component {
  
  onError(e) {
    console.log(e, 'error in file-viewer');
  }

  render() {

    return (
      <div>
        <div className="tarik-iner-content">
          <div className="container">
            <div className="tic-head">
              <h1>Privacy Policy</h1>
              <p> </p>
            </div>
          </div>
          </div>

          <div className="tarik-career">
          <div className="container">
            <div className="tarik-career-content">
              {/*element begin*/}
              <div className="tcc-element">
                <div className="tcc-ele-head">
                  Privacy Policy
                </div>
                <div className="tcc-ele-body">
                <FileViewer
                  fileType={'pdf'}
                  filePath={'assets/docs/privacy_policy.pdf'}
                  errorComponent={CustomErrorComponent}
                  onError={this.onError}/>
                </div>
              </div>
              {/*element end*/}
            </div>
          </div>
        </div>
      </div>
    );

  }

}

export default PrivacyPolicyContent;

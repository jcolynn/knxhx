import React, { Component } from 'react';
import { Card } from 'antd';
// import './NeedHelpNow.css';
import './needHelpNow.css';

class NeedHelpNow extends Component {

  render() {
    return (
      <div>
          <div className="all-help-lines-notice">All help lines are available 24/7</div>
          <div className="need-help-now-cards">
            <Card
                title="Physical Danger"
                style={{ width: 300 }}
                >
                <p><strong>Emergency:</strong> 911</p>
                <p><strong>Sex Traficking:</strong> 888-539-2373</p>
                <p><strong>Domestic Violence:</strong> 800-978-3600</p>
            </Card>

            <Card
                title="Suicide Prevention"
                style={{ width: 300 }}
                >
                <p><strong>All Youth And Adult:</strong> 877-727-4747</p>
                <p><strong>LGBTQ:</strong> 866-488-7386</p>
                <p><strong>Veterans:</strong> 800-273-8255,1</p>
            </Card>

            <Card
                title="24/7 Help Line"
                style={{ width: 300 }}
                >
                <p><strong>Counseling/Referrals:</strong> 1-800-843-5200</p>
                <p><strong>LGBTQ:</strong> 866-488-7386</p>
                <p><strong>Veterans:</strong> 800-273-8255,1</p>
            </Card>
          </div>
          

      </div>
    );
  }
}

export default NeedHelpNow;

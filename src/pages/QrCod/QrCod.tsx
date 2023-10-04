import './QrCod.scss';
import { baseUrl } from '../../helpers/baseUrl';
import QRCode from 'react-qr-code';
import React from 'react';

const QrCod = () => {
  return (
    <div id="qr-cod" className="main">
      <span className="title">weeeeeeeeeeeeeeeeeeeeeeeelcome</span>
      <QRCode fgColor={'#7FC9F0'} style={{ height: '25%', width: '25%' }} value={`${baseUrl}/`} viewBox={`0 0 256 256`} />
    </div>
  );
};

export default QrCod;

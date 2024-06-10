import QRCodeSVG from 'qrcode.react';

function Poll({ user }) {

  return (

    <>
      <p>Poll</p>
      <QRCodeSVG value="https://reactjs.org/" />
    </>

  );
}

export default Poll;

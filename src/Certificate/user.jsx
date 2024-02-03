import React, { useState, useEffect, useCallback } from 'react';
import html2canvas from 'html2canvas'; 
import './user.style.css'
import logo from '../Images/logo (1).png';
import design from '../Images/design.png';
import design1 from '../Images/design2.png';
import eclipse1 from '../Images/Ellipse 8.png';
import hamza from '../Images/hamza 1.png'
import areesha from '../Images/areesha.png';
import line8 from '../Images/Line 8.png';
import line10 from '../Images/Line 10.png';
import line9 from '../Images/Line 9.png'


const User = ({ user_id }) => {
  const [certificateData, setCertificateData] = useState([]);
  const [enteredId, setEnteredId] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const getData = useCallback(() => {
    fetch('https://random-data-api.com/api/v2/users?size=2', { 
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((myjson) => {
        console.log('Fetched Data:', myjson);
        setCertificateData(myjson);
      });
  }, []);
  
  useEffect(() => {
    getData();
  }, [user_id, getData]);

  const handleIdChange = (event) => {
    setEnteredId(event.target.value);
  };

  const handleGenerateCertificate = () => {
    console.log('Certificate Data:', certificateData);
    console.log('Entered ID:', enteredId);
  
    if (!certificateData || !enteredId) {
      console.error('Certificate data or enteredId is undefined.');
      return;
    }
  
    // Assuming 'id' is the property to match against
    const selected = certificateData.find((user) => user.id === parseInt(enteredId, 10));
  
    if (selected) {
      console.log('Selected Certificate:', selected);
      setSelectedCertificate(selected);
    } else {
      console.warn('Certificate not found for entered ID:', enteredId);
      setSelectedCertificate(null);
    }
  };

  const handleDownloadCertificate = () => {
    if (selectedCertificate) {
      const certificateElement = document.getElementById('certificate-container');

      html2canvas(certificateElement).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'certificate.png';
        link.click();
      });
    } else {
      console.warn('No certificate to download.');
    }
  };
  
  return (
    <>
      <div className=''>
        <h2 className="text-center mt-3">Enter Your Id Code</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleGenerateCertificate(); }}>
          <div className='d-flex justify-content-center mt-3'>

          <input className='form-control w-25' type="text" value={enteredId} onChange={handleIdChange} />
          </div>
          <div className='text-center mt-3'>

          <button className='btn btn-outline-primary' type="submit">Generate Certificate</button>
          </div>
        </form>
      </div>

      <div>
        {selectedCertificate && (
          <div className='top' id="certificate-container">
            <div className="index">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="set">
            <div className="overlap-group">
              <img
                className="ellipse"
                alt="Ellipse"
                src={eclipse1}
              />
              <img
                className="logo"
                alt="Logo"
                src={logo}
              />
              <div className="text-wrapper">CERTIFICATE</div>
              <div className="div">OF APPRECIATION</div>
              <img
                className="group"
                alt="Group"
                src={design}
              />
              <img
                className="img"
                alt="Group"
                src={design1}
              />
            </div>
          </div>
          <img
            className="hamza"
            alt="Hamza"
            src={hamza}
          />
          <img
            className="whatsapp-image"
            alt="Whatsapp image"
            src={areesha}
          />
          <div className="areesha-lead">
            <div className="overlap-2">
              <div className="text-wrapper-2">Areesha Siddiqui</div>
              <div className="text-wrapper-3">(LEAD)</div>
              <img
                className="line"
                alt="Line"
                src={line9}
              />
            </div>
          </div>
          <div className="hamzah-lead">
            <div className="overlap-3">
              <div className="text-wrapper-4">Hamzah Wahab</div>
              <div className="text-wrapper-5">(LEAD)</div>
              <img
                className="line-2"
                alt="Line"
                src={line10}
              />
            </div>
          </div>
          <img
            className="line-3"
            alt="Line"
            src={line8}
          />
          <div className="text-wrapper-6">{selectedCertificate.first_name+' '+selectedCertificate.last_name}</div>
        </div>
      </div>
    </div>
          </div>
          
        )}
      </div>
      <div className='text-center mt-3'>
        <button className='btn btn-outline-primary' onClick={handleDownloadCertificate}>
          Download Certificate
        </button>
      </div>
    </>
  );
};

export default User;

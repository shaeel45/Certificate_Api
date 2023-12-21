import React, { useState, useEffect, useCallback } from 'react';

const User = ({ user_id }) => {
    const [certificateData, setCertificateData] = useState([]);
    const [enteredId, setEnteredId] = useState('');
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const appURL = 'https://random-data-api.com/api/v2/users?size=2';

    const getData = useCallback(() => {
        fetch(appURL, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((myjson) => {
                console.log(myjson);

                // Make sure the structure of the API response is as expected
                if (Array.isArray(myjson)) {
                    setCertificateData(myjson);
                } else {
                    console.error('Unexpected API response format:', myjson);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);



    useEffect(() => {
        getData();
    }, [user_id, getData]);

    const handleIdChange = (event) => {
        setEnteredId(event.target.value);
    };

    const handleGenerateCertificate = () => {
        console.log('certificateData type:', typeof certificateData);

        if (certificateData && certificateData.length > 0) {
            const selected = certificateData.find((val) => val.id === enteredId);
            setSelectedCertificate(selected);
        } else {
            console.error('Certificate data is empty or undefined.');
        }
    };



    return (
        <>
            <div>
                <h2 className="text-center">Enter Your Id Code</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleGenerateCertificate();
                    }}
                >
                    <input type="text" value={enteredId} onChange={handleIdChange} />
                    <button type="submit">Generate Certificate</button>
                </form>
            </div>

            <div>
                {selectedCertificate && (
                    <div>
                        <h2>Certificate</h2>
                        <p>Name: {setSelectedCertificate.first_name + ' ' + selectedCertificate.last_name}</p>
                        <p>Username: {setSelectedCertificate.username}</p>
                        <p>Email: {setSelectedCertificate.email}</p>
                        <p>Employment Title: {setSelectedCertificate.employment.title}</p>
                        <img src={setSelectedCertificate.avatar} alt='' />Avatar:
                    </div>
                ) }
            </div>
        </>
    );
};

export default User;

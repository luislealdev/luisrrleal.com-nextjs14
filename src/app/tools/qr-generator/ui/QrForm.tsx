'use client'
import Image from 'next/image'
import React, { SetStateAction, useState } from 'react'

export const QrForm = () => {
    const [url, setUrl] = useState("https://luisrrleal.com/");
    const [userUrl, setuserUrl] = useState("https://luisrrleal.com/");

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setuserUrl(event.target.value);
    };

    const onHandleSubmit = () => {
        if (url.includes("http")) {
            setUrl(userUrl);
        } else {
            setUrl("https://:" + userUrl);
        }
    };

    return (
        <div className="flex justify-center column align-center">
            <Image
                width={300}
                height={300}
                src={`https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${url}`}
                alt="qr code"
            />
            <br />
            <div className="flex justify-center">
                <div className="flex justify-center column">
                    <input
                        width="300px"
                        type="text"
                        id="userUrl"
                        name="userUrl"
                        onChange={handleChange}
                        value={userUrl}
                        className='input'
                    />
                    <button className='p-10 mt-10 radius no-border bg-blue white-text' onClick={() => onHandleSubmit()}>Generate</button>
                    <br />
                    <p style={{ textAlign: "center" }}>
                        Check the QR code before sharing it ;)
                    </p>
                </div>
            </div>
        </div>
    )
}

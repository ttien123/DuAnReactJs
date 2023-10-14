import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutLayout = ({ children }) => {
    return (
        <div>
            <header className="h-[60px] xl:h-[100px] xl:p-[15px] bg-colorWeb text-center">
                <div className="h-full grid place-items-center container">
                    <Link to="/">
                        <img
                            src="https://megaone.acrothemes.com/coffee/images/logo.png"
                            alt="Logo"
                            className="m-auto"
                        />
                    </Link>
                </div>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default CheckoutLayout;

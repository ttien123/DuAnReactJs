function LoadingStart() {
    return (
        <div className="loader-bg">
            <div className="smoke-loader">
                <div className="smoke-wave">
                    <div className="smoke1" />
                    <div className="smoke2" />
                    <div className="smoke3" />
                </div>
                <div className="coffee-cup">
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 360"
                        xmlSpace="preserve"
                        height={80}
                        style={{ fill: '#ffffff' }}
                    >
                        <g>
                            <g>
                                <path
                                    d="M450.6,72.6c-1.2,17-5.9,50-5.9,50c38.5,51.2-2.3,103.2-34.5,114c0,0-16.6,32.4-26.4,46.9C449,280.1,501,229.1,501,166.8
          C501,128.5,481.4,94.1,450.6,72.6L450.6,72.6z"
                                />
                                <path
                                    d="M332.6,308.2h-24.1c61.7-52.8,102.7-155,102.7-274.9c0-11.3-9.1-20.4-20.4-20.4H31.4C20.1,12.9,11,22,11,33.3
          c0,120,41,222.1,102.7,274.9H89.5c-11.3,0-20.4,9.1-20.4,20.4S78.2,349,89.5,349h243.1c11.3,0,20.4-9.1,20.4-20.4
          S343.9,308.2,332.6,308.2L332.6,308.2z"
                                />
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default LoadingStart;

import React from 'react';
import * as feather from 'feather-icons';

export default function Icon({ name, size }) {
    return (
        <>
            <div
                dangerouslySetInnerHTML={{
                    __html: feather.icons[name].toSvg({ width: size || 48, height: size || 48 })
                }}
            ></div>
        </>
    );
}

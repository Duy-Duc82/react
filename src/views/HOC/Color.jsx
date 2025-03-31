import React from 'react';

function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Color = (WrappedComponent) => {
    return function WithColor(props) {
        const colorRandom = randomColor();
        return (
            <div style={{ color: colorRandom }}>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default Color;
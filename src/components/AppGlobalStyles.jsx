import { GlobalStyles } from '@mantine/core';

import React from 'react'

const AppGlobalStyles = () => {
    return (
        <GlobalStyles
            theme={{ colorScheme: 'light' }}
            styles={{
                body: {
                    margin: 0,
                },
            }}
        />
    )
}

export default AppGlobalStyles
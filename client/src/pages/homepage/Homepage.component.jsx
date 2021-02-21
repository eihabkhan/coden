import React, { Profiler } from 'react'

import Directory from '../../components/directory/Directory.component'

import {HomepageContainer} from './Homepage.styles'

const Homepage = () => {
    return (
        <HomepageContainer>
            <Profiler id="Directoy" onRender={(id, phase, actualDuration) => {
                console.log({ id, phase, actualDuration });
            }}>
                <Directory />
            </Profiler>
        </HomepageContainer>
    )
}

export default Homepage
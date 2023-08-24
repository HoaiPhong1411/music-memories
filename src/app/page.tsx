'use client';

import _ from 'lodash';
import AudioProvider from '@/contexts/AudioProvider';
import WapperPageAudio from '@/components/Audio/WapperPageAudio';

export default function Home() {
    return (
        <>
            <AudioProvider>
                <WapperPageAudio />
            </AudioProvider>
        </>
    );
}

import React from 'react';
import AudioPlayer from './ui/audio-player';

export function Hero() {
  return (
    <section className="relative min-h-screen">
      <div className="relative z-10 min-h-screen flex items-center justify-between px-12">
        <h1 className="hero-text text-black max-w-[60%]">
          I create visions —<br />
          shaping more than<br />
          interfaces.
        </h1>
        <div className="relative w-[40%] h-screen flex items-center justify-center">
          <div className="flex gap-8 items-center">
            <AudioPlayer
              src="https://od.lk/s/OTBfNDM3OTM0NjRf/Kendrick%20Lamar%20%26%20SZA%20-%20All%20The%20Stars%20%28Instrumental%29%20%281%29.mp3"
              cover="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Kendrick Lamar & SZA - All The Stars (Instrumental)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
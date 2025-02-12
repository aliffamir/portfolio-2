"use client";

import * as React from "react";
import Map, { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import Image from "next/image";

const Intro = () => {
  const initialCoordinates = { longitude: -2.799042, latitude: 54.049601 };

  const [viewState, setViewState] = React.useState({
    longitude: initialCoordinates.longitude,
    latitude: initialCoordinates.latitude,
    zoom: 3, // Start zoomed out
  });

  React.useEffect(() => {
    const targetZoom = 14; // Target zoom level
    const duration = 3000; // Duration in milliseconds for the full zoom animation
    const startTime = performance.now();

    const animateZoom = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Clamp progress to [0, 1]
      const smoothZoom = 3 + (targetZoom - 3) * easeInOutCubic(progress);

      setViewState((prev) => ({
        ...prev,
        zoom: smoothZoom,
      }));

      if (progress < 1) {
        requestAnimationFrame(animateZoom); // Continue animation
      }
    };

    requestAnimationFrame(animateZoom); // Start animation
  }, []);

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
      <Map
        {...viewState}
        style={{ width: "100%", height: 300 }}
        mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`}
        onMove={(evt) => setViewState(evt.viewState)}
      >
        {/* Blue pinging dot - stays at initial coordinates */}
        <Marker
          longitude={initialCoordinates.longitude}
          latitude={initialCoordinates.latitude}
        >
          <div className="relative w-4 h-4">
            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-500 opacity-75 animate-ping"></div>
            <div className="w-4 h-4 rounded-full bg-blue-600 border-2 border-white"></div>
          </div>
        </Marker>
      </Map>

      {/* Fade overlay and content */}
      <div className="absolute bottom-5 left-5 flex items-center space-x-4">
        <Image
          src="/your-avatar.jpg" // Replace with your avatar path
          alt="Your avatar"
          width={48}
          height={48}
          className="rounded-full border-2"
        />
        <div>
          <h1 className="text-xl font-semibold">Hey, I'm [Your Name] 👋</h1>
          <p className="text-sm">
            Incoming IT Developer Graduate at RWE Supply & Trading
          </p>
        </div>
      </div>
      <div className="absolute top-5 right-5 bg-black/70 text-white text-sm px-2 py-1 rounded">
        {new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </div>
    </div>
  );
};

export default Intro;

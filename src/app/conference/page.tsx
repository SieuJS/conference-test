'use server';
import Image from "next/image";

export default function SERAConference() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <header className="w-full flex justify-between items-center py-4">
        <Image src="/sera-logo.svg" alt="SERA Conference Logo" width={150} height={50} />
        <nav className="flex gap-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#speakers" className="hover:underline">Speakers</a>
          <a href="#schedule" className="hover:underline">Schedule</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold">Welcome to SIEU Conference 2025</h1>
        <p className="text-center max-w-2xl">
          Join us for an exciting event where industry leaders and professionals come together to share insights, network, and explore the latest trends in technology and innovation.
        </p>
        <div className="text-center max-w-2xl">
          <p><strong>Location:</strong> San Francisco, CA</p>
          <p><strong>Type of Access:</strong> Online and Offline</p>
          <p><strong>Conference Date:</strong> June 15-17, 2025</p>
          <p><strong>Submission Date:</strong> April 1, 2025</p>
          <p><strong>Camera Ready Date:</strong> May 15, 2025</p>
        </div>
        <a
          className="mt-4 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="#register"
        >
          Register Now
        </a>
      </main>
      <footer className="w-full flex justify-center items-center py-4 border-t mt-8">
        <p className="text-sm">&copy; 2023 SERA Conference. All rights reserved.</p>
      </footer>
    </div>
  );
}
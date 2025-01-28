'use client';

import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { FaLinkedin, FaEnvelope, FaShieldAlt, FaServer, FaLock, FaCloud, FaNetworkWired, FaTools, FaGithub, FaGlobe, FaCopy, FaDownload, FaChevronDown } from 'react-icons/fa';
import { Suspense, useState } from 'react';

// Dynamically import the Background3D component to avoid SSR issues
const Background3D = dynamic(() => import('@/components/Background3D'), { ssr: false });

export default function Home() {
  const [isKeyExpanded, setIsKeyExpanded] = useState(false);
  const pgpKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

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
22Ozb2M=
=U+F6
-----END PGP PUBLIC KEY BLOCK-----`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(pgpKey);
      // Optional: Add a toast notification here
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const downloadKey = () => {
    const blob = new Blob([pgpKey], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'niklas-bitcircuit-public-key.asc';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const skills = [
    { name: 'Network Security', icon: <FaShieldAlt className="text-3xl mb-2" /> },
    { name: 'Firewall Management', icon: <FaLock className="text-3xl mb-2" /> },
    { name: 'Security Auditing', icon: <FaTools className="text-3xl mb-2" /> },
    { name: 'Incident Response', icon: <FaServer className="text-3xl mb-2" /> },
    { name: 'System Administration', icon: <FaNetworkWired className="text-3xl mb-2" /> },
    { name: 'Cloud Security', icon: <FaCloud className="text-3xl mb-2" /> },
  ];

  const links = [
    {
      title: 'GitHub',
      icon: <FaGithub className="text-2xl" />,
      url: 'https://github.com/bitcircuiteu',
      description: 'Open Source Projects & Contributions'
    },
    {
      title: 'Domain Tools',
      icon: <FaGlobe className="text-2xl" />,
      url: 'https://domaintools.com/',
      description: 'WHOIS Lookup & Domain Information'
    },
    {
      title: 'Google DIG',
      icon: <FaServer className="text-2xl" />,
      url: 'https://toolbox.googleapps.com/apps/dig/',
      description: 'Domain DNS Record Lookups'
    },
    {
      title: 'MX Toolbox',
      icon: <FaEnvelope className="text-2xl" />,
      url: 'https://mxtoolbox.com/',
      description: 'Mailserver & Blacklist Checker'
    },
    {
      title: 'Mail Tester',
      icon: <FaEnvelope className="text-2xl" />,
      url: 'https://mail-tester.com/',
      description: 'Mail Configuration & Sender Score'
    },
    {
      title: 'Ventoy',
      icon: <FaTools className="text-2xl" />,
      url: 'https://www.ventoy.net/en/index.html',
      description: 'Create Multi-Boot USB Drives'
    },
    {
      title: 'MediCat',
      icon: <FaTools className="text-2xl" />,
      url: 'https://medicatusb.com/',
      description: 'Multi-Tool Boot Environment'
    },
    {
      title: 'uupDump',
      icon: <FaDownload className="text-2xl" />,
      url: 'https://uupdump.net/',
      description: 'Custom Windows ISO Builder'
    }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0">
        <Canvas
          camera={{ 
            position: [0, 0, 25],
            fov: 90,
            near: 0.1,
            far: 1000
          }}
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: "high-performance",
            stencil: false,
            depth: true
          }}
          dpr={[1, 2]}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: '#000000',
            zIndex: -1
          }}
        >
          <Suspense fallback={null}>
            <Background3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <main className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Image
            src="/logo.svg"
            alt="NT Logo"
            width={120}
            height={120}
            className="mx-auto mb-8 hover:scale-110 transition-transform duration-300"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 neon-text">
            Niklas Terhorst
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
            Network Security Administrator
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Section */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="neon-border rounded-lg p-6 backdrop-blur-sm bg-black/30 h-full hover:bg-black/40 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 neon-text flex items-center">
                <FaShieldAlt className="mr-2" /> About Me
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I am a passionate Network Security Administrator with expertise in protecting and optimizing network infrastructure.
                With a strong background in cybersecurity and network management, I specialize in implementing robust security measures
                and ensuring seamless network operations.
              </p>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="neon-border rounded-lg p-6 backdrop-blur-sm bg-black/30 h-full hover:bg-black/40 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 neon-text flex items-center">
                <FaEnvelope className="mr-2" /> Connect
              </h3>
              <div className="flex flex-col space-y-4">
                <a
                  href="https://www.linkedin.com/in/niklas-terhorst/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg border border-cyan-500/30 hover:border-cyan-500"
                >
                  <FaLinkedin className="mr-2 text-xl" /> LinkedIn Profile
                </a>
                <a
                  href="mailto:niklas@bitcircuit.eu"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg border border-cyan-500/30 hover:border-cyan-500"
                >
                  <FaEnvelope className="mr-2 text-xl" /> niklas@bitcircuit.eu
                </a>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8"
        >
          <div className="neon-border rounded-lg p-6 backdrop-blur-sm bg-black/30 hover:bg-black/40 transition-colors">
            <h3 className="text-2xl font-semibold mb-6 neon-text text-center">Skills & Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 text-center rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-all hover:scale-105 backdrop-blur-sm"
                >
                  {skill.icon}
                  <span className="block text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Links Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8"
        >
          <div className="neon-border rounded-lg p-6 backdrop-blur-sm bg-black/20 hover:bg-black/30 transition-colors">
            <h3 className="text-2xl font-semibold mb-6 neon-text text-center">Resources & Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {links.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-all hover:scale-105 backdrop-blur-sm flex items-center gap-4"
                >
                  <div className="text-cyan-400">{link.icon}</div>
                  <div>
                    <div className="font-semibold text-cyan-400">{link.title}</div>
                    <div className="text-sm text-gray-400">{link.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* PGP Key Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8"
        >
          <div className="neon-border rounded-lg p-6 backdrop-blur-sm bg-black/20 hover:bg-black/30 transition-colors">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold neon-text">PGP Public Key</h3>
              <div className="flex gap-2">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1 px-3 py-1 rounded bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-sm transition-colors"
                >
                  <FaCopy className="text-xs" />
                  Copy
                </button>
                <button
                  onClick={downloadKey}
                  className="flex items-center gap-1 px-3 py-1 rounded bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-sm transition-colors"
                >
                  <FaDownload className="text-xs" />
                  Download
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => setIsKeyExpanded(!isKeyExpanded)}
                className="w-full flex items-center justify-between p-4 rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-all text-left"
              >
                <span className="text-cyan-400">Click to {isKeyExpanded ? 'collapse' : 'expand'} key</span>
                <FaChevronDown className={`text-cyan-400 transform transition-transform ${isKeyExpanded ? 'rotate-180' : ''}`} />
              </button>
              
              {isKeyExpanded && (
                <pre className="font-mono text-sm text-gray-300 bg-black/30 p-4 rounded overflow-x-auto">
                  {pgpKey}
                </pre>
              )}
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

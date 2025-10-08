import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  waveIndex: number; // which wave path this node follows
  progress: number; // position along the wave (0 to 1)
  speed: number; // how fast it moves along the wave
  driftX: number; // random horizontal drift
  driftY: number; // random vertical drift
  driftSpeedX: number; // drift velocity X
  driftSpeedY: number; // drift velocity Y
}

const WaveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Wave paths configuration
    const numWaves = 8; // More waves to fill the screen
    const nodesPerWave = 20; // More nodes per wave
    const connectionDistance = 180; // Increased for more random movement
    const nodes: Node[] = [];

    // Initialize nodes along wave paths
    for (let waveIdx = 0; waveIdx < numWaves; waveIdx++) {
      for (let i = 0; i < nodesPerWave; i++) {
        nodes.push({
          x: 0,
          y: 0,
          waveIndex: waveIdx,
          progress: Math.random(), // random starting position
          speed: 0.0001 + Math.random() * 0.0002, // slower speeds
          driftX: 0,
          driftY: 0,
          driftSpeedX: (Math.random() - 0.5) * 0.15,
          driftSpeedY: (Math.random() - 0.5) * 0.15,
        });
      }
    }

    let time = 0;
    let animationFrameId: number;

    // Function to calculate wave path position
    const getWavePosition = (waveIndex: number, progress: number, time: number) => {
      // Distribute waves evenly across the screen height
      const waveSpacing = canvas.height / (numWaves + 1);
      const baseY = waveSpacing * (waveIndex + 1);
      
      // X position with some variation
      const x = (progress * canvas.width * 1.5) % canvas.width;
      
      // Y position follows multiple overlapping sine waves for organic movement
      const y = baseY + 
        Math.sin(progress * Math.PI * 2 + time + waveIndex * 0.5) * 50 +
        Math.sin(progress * Math.PI * 3.7 + time * 0.8 + waveIndex) * 25 +
        Math.sin(progress * Math.PI * 5.3 + time * 1.3) * 15 +
        Math.cos(progress * Math.PI * 1.3 + time * 0.5) * 10;
      
      return { x, y };
    };

    const animate = () => {
      // Clear canvas with dark background
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.005; // Slower wave animation

      // Update all node positions
      nodes.forEach((node) => {
        // Move node along its wave path
        node.progress += node.speed;
        if (node.progress > 1) node.progress = 0;

        // Update drift with random walk (slower)
        node.driftSpeedX += (Math.random() - 0.5) * 0.05;
        node.driftSpeedY += (Math.random() - 0.5) * 0.05;
        
        // Dampen drift speeds to prevent runaway
        node.driftSpeedX *= 0.96;
        node.driftSpeedY *= 0.96;
        
        // Apply drift
        node.driftX += node.driftSpeedX;
        node.driftY += node.driftSpeedY;
        
        // Keep drift within reasonable bounds
        node.driftX = Math.max(-80, Math.min(80, node.driftX));
        node.driftY = Math.max(-80, Math.min(80, node.driftY));

        // Calculate base position on wave
        const pos = getWavePosition(node.waveIndex, node.progress, time);
        
        // Add random drift to position
        node.x = pos.x + node.driftX;
        node.y = pos.y + node.driftY;
      });

      // Draw dynamic connections between nearby nodes
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Only draw connection if nodes are close enough
          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.5;
            
            ctx.strokeStyle = `rgba(162, 164, 149, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw the wave paths (subtle guides)
      ctx.strokeStyle = 'rgba(162, 164, 149, 0.08)';
      ctx.lineWidth = 1;
      
      for (let waveIdx = 0; waveIdx < numWaves; waveIdx++) {
        ctx.beginPath();
        for (let progress = 0; progress <= 1; progress += 0.01) {
          const pos = getWavePosition(waveIdx, progress, time);
          if (progress === 0) {
            ctx.moveTo(pos.x, pos.y);
          } else {
            ctx.lineTo(pos.x, pos.y);
          }
        }
        ctx.stroke();
      }

      // Draw nodes
      nodes.forEach((node, index) => {
        const pulse = Math.sin(time * 3 + index * 0.2) * 0.3 + 0.7;
        const baseRadius = 3;
        const glowRadius = baseRadius + pulse * 1.5;

        // Outer glow
        const outerGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius * 4
        );
        outerGradient.addColorStop(0, `rgba(162, 164, 149, ${0.6 * pulse})`);
        outerGradient.addColorStop(0.5, `rgba(162, 164, 149, ${0.3 * pulse})`);
        outerGradient.addColorStop(1, 'rgba(162, 164, 149, 0)');
        
        ctx.fillStyle = outerGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Node core
        const coreGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius
        );
        coreGradient.addColorStop(0, `rgba(255, 255, 255, ${pulse})`);
        coreGradient.addColorStop(0.6, `rgba(162, 164, 149, ${0.8 * pulse})`);
        coreGradient.addColorStop(1, `rgba(162, 164, 149, ${0.2 * pulse})`);
        
        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Bright center
        ctx.fillStyle = `rgba(255, 255, 255, ${0.9 + pulse * 0.1})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, baseRadius * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ background: '#0a0a0a', zIndex: 0 }}
    />
  );
};

export default WaveBackground;


import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
}

const HoneycombBackground = () => {
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
      initNodes();
    };

    // Honeycomb configuration
    const nodes: Node[] = [];
    const hexSize = 90; // Bigger hexagon size
    const connectionDistance = 200;

    const initNodes = () => {
      nodes.length = 0;
      const rows = Math.ceil(canvas.height / (hexSize * 1.5)) + 2;
      const cols = Math.ceil(canvas.width / (hexSize * Math.sqrt(3))) + 2;

      // Create honeycomb grid pattern
      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * hexSize * Math.sqrt(3) + (row % 2) * (hexSize * Math.sqrt(3) / 2);
          const y = row * hexSize * 1.5;
          
          nodes.push({
            x,
            y,
            baseX: x,
            baseY: y,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
          });
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;
    let animationFrameId: number;

    const drawHexagon = (x: number, y: number, size: number, filled = false) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = x + size * Math.cos(angle);
        const hy = y + size * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(hx, hy);
        } else {
          ctx.lineTo(hx, hy);
        }
      }
      ctx.closePath();
      if (filled) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    };

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.008;

      // Update node positions with flowing animation
      nodes.forEach((node, index) => {
        const waveX = Math.sin(time + index * 0.05) * 15;
        const waveY = Math.cos(time * 0.7 + index * 0.03) * 15;
        
        node.x = node.baseX + waveX;
        node.y = node.baseY + waveY;
      });

      // Draw connections between nearby nodes
      ctx.strokeStyle = 'rgba(162, 164, 149, 0.15)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.3;
            ctx.strokeStyle = `rgba(162, 164, 149, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw honeycomb cells
      ctx.strokeStyle = 'rgba(162, 164, 149, 0.2)';
      ctx.lineWidth = 1;
      
      nodes.forEach((node) => {
        drawHexagon(node.x, node.y, hexSize * 0.45);
      });

      // Draw nodes with pulsing effect
      nodes.forEach((node, index) => {
        const pulse = Math.sin(time * 2 + index * 0.1) * 0.5 + 0.5;
        const baseRadius = 2;
        const radius = baseRadius + pulse * 1.5;
        
        // Glow effect
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius * 4);
        gradient.addColorStop(0, `rgba(162, 164, 149, ${0.6 * pulse})`);
        gradient.addColorStop(0.5, `rgba(162, 164, 149, ${0.2 * pulse})`);
        gradient.addColorStop(1, 'rgba(162, 164, 149, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core node
        ctx.fillStyle = `rgba(162, 164, 149, ${0.8 + pulse * 0.2})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw larger hexagons for depth
      ctx.strokeStyle = 'rgba(162, 164, 149, 0.08)';
      ctx.lineWidth = 1.5;
      
      for (let i = 0; i < nodes.length; i += 7) {
        const node = nodes[i];
        const scale = Math.sin(time * 0.5 + i * 0.05) * 0.2 + 1;
        drawHexagon(node.x, node.y, hexSize * 0.7 * scale);
      }

      // Add flowing particles
      const numParticles = 20;
      ctx.fillStyle = 'rgba(162, 164, 149, 0.4)';
      
      for (let i = 0; i < numParticles; i++) {
        const particleTime = (time + i * 0.5) % (Math.PI * 2);
        const x = ((time * 30 + i * 100) % (canvas.width + 200)) - 100;
        const y = canvas.height / 2 + Math.sin(particleTime + i) * (canvas.height * 0.3);
        const size = Math.sin(particleTime * 2) * 1 + 1.5;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

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

export default HoneycombBackground;


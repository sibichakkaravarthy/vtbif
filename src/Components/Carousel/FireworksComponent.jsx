import React, { useEffect, useRef } from 'react';
import './FireworksComponent.css';

const FireworksComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let cw = window.innerWidth;
    let ch = window.innerHeight;
    let fireworks = [];
    let particles = [];
    let hue = 0; // Updated hue value
    let limiterTotal = 5;
    let limiterTick = 0;
    let timerTotal = 80;
    let timerTick = 0;
    let mousedown = false;
    let mx;
    let my;

    canvas.width = cw;
    canvas.height = ch;

    const random = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const calculateDistance = (p1x, p1y, p2x, p2y) => {
      let xDistance = p1x - p2x;
      let yDistance = p1y - p2y;
      return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    };

    const Firework = function (sx, sy, tx, ty) {
      this.x = sx;
      this.y = sy;
      this.sx = sx;
      this.sy = sy;
      this.tx = tx;
      this.ty = ty;
      this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
      this.distanceTraveled = 0;
      this.coordinates = [];
      this.coordinateCount = 3;
      while (this.coordinateCount--) {
        this.coordinates.push([this.x, this.y]);
      }
      this.angle = Math.atan2(ty - sy, tx - sx);
      this.speed = random(5, 10); // Increase speed range
      this.acceleration = 1.05;
      this.brightness = random(50, 70);
      this.targetRadius = 1;
    };

    Firework.prototype.update = function (index) {
      this.coordinates.pop();
      this.coordinates.unshift([this.x, this.y]);

      if (this.targetRadius < 8) {
        this.targetRadius += 0.3;
      } else {
        this.targetRadius = 1;
      }

      this.speed *= this.acceleration;

      let vx = Math.cos(this.angle) * this.speed;
      let vy = Math.sin(this.angle) * this.speed;
      this.distanceTraveled = calculateDistance(this.sx, this.sy, this.x + vx, this.y + vy);

      if (this.distanceTraveled >= this.distanceToTarget) {
        createParticles(this.tx, this.ty);
        fireworks.splice(index, 1);
      } else {
        this.x += vx;
        this.y += vy;
      }
    };

    Firework.prototype.draw = function () {
      ctx.beginPath();
      ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
      ctx.lineTo(this.x, this.y);
      ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2);
      ctx.stroke();
    };

    const Particle = function (x, y) {
      this.x = x;
      this.y = y;
      this.coordinates = [];
      this.coordinateCount = 5;

      while (this.coordinateCount--) {
        this.coordinates.push([this.x, this.y]);
      }

      this.angle = random(0, Math.PI * 2);
      this.speed = random(1, 10);
      this.friction = 0.95;
      this.gravity = 1;
      this.hue = hue; // Updated hue value
      this.brightness = random(50, 80);
      this.alpha = 1;
      this.decay = random(0.015, 0.03);
    };

    Particle.prototype.update = function (index) {
      this.coordinates.pop();
      this.coordinates.unshift([this.x, this.y]);
      this.speed *= this.friction;
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed + this.gravity;
      this.alpha -= this.decay;

      if (this.alpha <= this.decay) {
        particles.splice(index, 1);
      }
    };

    Particle.prototype.draw = function () {
      ctx.beginPath();
      ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
      ctx.lineTo(this.x, this.y);
      ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
      ctx.stroke();
    };

    const createParticles = (x, y) => {
      let particleCount = 50; // Increase the number of particles
      while (particleCount--) {
        particles.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(0, 0, cw, ch);
      ctx.globalCompositeOperation = 'lighter';

      let i = fireworks.length;
      while (i--) {
        fireworks[i].draw();
        fireworks[i].update(i);
      }

      let j = particles.length;
      while (j--) {
        particles[j].draw();
        particles[j].update(j);
      }

      if (timerTick >= timerTotal) {
        if (!mousedown) {
          fireworks.push(new Firework(cw / 2, ch, random(cw * 0.2, cw * 0.8), random(ch * 0.2, ch * 0.5))); // Increase random range for target coordinates
          timerTick = 0;
        }
      } else {
        timerTick++;
      }

      if (limiterTick >= limiterTotal) {
        if (mousedown) {
          fireworks.push(new Firework(cw / 2, ch, mx, my));
          limiterTick = 0;
        }
      } else {
        limiterTick++;
      }

      hue += 0.5; // Increment hue value

      requestAnimationFrame(animate);
    };

    const handleMousedown = (e) => {
      e.preventDefault();
      mx = e.pageX - canvas.offsetLeft;
      my = e.pageY - canvas.offsetTop;
      mousedown = true;
    };

    const handleMouseup = () => {
      mousedown = false;
    };

    canvas.addEventListener('mousedown', handleMousedown);
    canvas.addEventListener('mouseup', handleMouseup);

    animate();

    return () => {
      canvas.removeEventListener('mousedown', handleMousedown);
      canvas.removeEventListener('mouseup', handleMouseup);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default FireworksComponent;

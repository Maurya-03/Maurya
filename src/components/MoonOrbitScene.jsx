import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext";

const escapeSettings = {
	startX: 7.5,
	startY: -0.1,
	startZ: 0,
	exitX: -15,
	exitY: -5,
	exitZ: -20,
	startScale: 0.8,
	endScale: 0.05,
};

const MoonOrbitScene = () => {
	const { isDark } = useTheme();
	const getIsDesktop = () => {
		if (typeof window === "undefined") return true;
		const wideEnough = window.matchMedia("(min-width: 1024px)").matches;
		const finePointer = window.matchMedia("(pointer: fine)").matches;
		return wideEnough && finePointer;
	};

	const [isDesktop, setIsDesktop] = useState(getIsDesktop);
	const isDesktopRef = useRef(getIsDesktop());
	const mountRef = useRef(null);
	const moonRef = useRef(null);
	const moonGroupRef = useRef(null);
	const moonMaterialRef = useRef(null);
	const mainLightRef = useRef(null);
	const moonTextureRef = useRef(null);
	const sunTextureRef = useRef(null);
	const darkModeRef = useRef(isDark);
	const terminalInputRef = useRef(null);
	const terminalActiveRef = useRef(false);
	const rotationSpeedRef = useRef(0.002);
	const [terminalActive, setTerminalActive] = useState(false);
	const [history, setHistory] = useState([
		"> Lunar terminal online. Type 'help' for commands.",
	]);

	const processCommand = (rawInput) => {
		const input = rawInput.toLowerCase().trim();
		const commandOutput = {
			help: "Available: help, whoami, status, scan, approach, about, projects, skills, contact, clear, exit",
			whoami: "MAURYA C R // Backend Developer & Cyber Security Enthusiast",
			status: "System: Stable | Security: Level 5 | Coffee: 80%",
			scan: "Scanning... [OK] JWT Auth, [OK] SQL Sanitization, [WARN] 1 open port.",
			approach: "Security-first. Modular. Scalable. I don't just write code; I build fortresses.",
			"sudo hire-me": "Access Granted. Redirecting to recruitment_portal.exe...",
		};

		if (input === "clear") {
			setHistory([]);
			return;
		}

		if (input === "exit") {
			setTerminalActive(false);
			return;
		}

		if (["about", "projects", "skills", "contact"].includes(input)) {
			const target = document.getElementById(input);
			if (target) {
				target.scrollIntoView({ behavior: "smooth", block: "start" });
				setHistory((prev) => [...prev, `> ${rawInput}`, `Navigating to ${input}...`]);
				return;
			}
		}

		const response = commandOutput[input] || `Command not found: ${input}. Type 'help'.`;
		setHistory((prev) => [...prev, `> ${rawInput}`, response]);
	};

	const handleTerminalKeyDown = (event) => {
		if (!isDesktopRef.current) return;
		if (event.key !== "Enter") return;
		const value = event.currentTarget.value;
		if (!value.trim()) return;
		processCommand(value);
		event.currentTarget.value = "";
	};

	useEffect(() => {
		terminalActiveRef.current = terminalActive;
	}, [terminalActive]);

	useEffect(() => {
		const mount = mountRef.current;
		if (!mount) return;

		const scene = new THREE.Scene();
		scene.background = null;

		const camera = new THREE.PerspectiveCamera(
			55,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.set(0, 0, 12);

		const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.outputColorSpace = THREE.SRGBColorSpace;
		renderer.setClearColor(0x000000, 0);
		mount.appendChild(renderer.domElement);

		const textureLoader = new THREE.TextureLoader();
		const moonTexture = textureLoader.load(
			"https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg"
		);
		const sunTexture = textureLoader.load(
			"https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg"
		);
		moonTextureRef.current = moonTexture;
		sunTextureRef.current = sunTexture;

		const moonGroup = new THREE.Group();
		scene.add(moonGroup);
		moonGroupRef.current = moonGroup;

		const moonGeometry = new THREE.SphereGeometry(2, 60, 60);
		const displacementMap = textureLoader.load(
			"https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg"
		);
		const bumpMap = textureLoader.load(
			"https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg"
		);

		[moonTexture, sunTexture, displacementMap, bumpMap].forEach((texture) => {
			texture.wrapS = THREE.ClampToEdgeWrapping;
			texture.wrapT = THREE.ClampToEdgeWrapping;
			texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
		});
		moonTexture.colorSpace = THREE.SRGBColorSpace;
		sunTexture.colorSpace = THREE.SRGBColorSpace;

		const moonMaterial = new THREE.MeshPhongMaterial({
			color: 0xffffff,
			map: moonTexture,
			displacementMap,
			displacementScale: 0.06,
			bumpMap,
			bumpScale: 0.04,
			reflectivity: 0,
			shininess: 0,
		});
		moonMaterialRef.current = moonMaterial;

		const moon = new THREE.Mesh(moonGeometry, moonMaterial);
		moonMaterial.transparent = true;
		moonGroup.add(moon);
		moonRef.current = moon;

		const moonLight = new THREE.DirectionalLight(0xffffff, 1.2);
		moonLight.position.set(10, 10, 10);
		scene.add(moonLight);
		mainLightRef.current = moonLight;

		const ambient = new THREE.AmbientLight(0xffffff, 0.2);
		scene.add(ambient);

		const hemisphere = new THREE.HemisphereLight(0xffffff, 0x080820, 0.3);
		scene.add(hemisphere);

		let currentScroll = 0;
		let smoothScroll = 0;
		let frameId = 0;

		const applyThemeToMoon = (darkMode) => {
			if (!moonMaterialRef.current || !mainLightRef.current || !moonRef.current)
				return;

			darkModeRef.current = darkMode;
			moonRef.current.visible = darkMode && isDesktopRef.current;
			if (moonGroupRef.current) {
				moonGroupRef.current.visible = isDesktopRef.current;
			}

			if (darkMode) {
				moonMaterialRef.current.map = moonTextureRef.current;
				moonMaterialRef.current.emissive.setHex(0x000000);
				moonMaterialRef.current.emissiveIntensity = 0;
				moonMaterialRef.current.opacity = 1;
				mainLightRef.current.intensity = 1.2;
				document.body.classList.remove("light-theme");
				document.body.classList.add("dark-theme");
			} else {
				moonMaterialRef.current.map = sunTextureRef.current;
				moonMaterialRef.current.emissive.setHex(0xffaa00);
				moonMaterialRef.current.emissiveIntensity = 1.1;
				moonMaterialRef.current.opacity = 0;
				mainLightRef.current.intensity = 2.5;
				document.body.classList.remove("dark-theme");
				document.body.classList.add("light-theme");
			}

			moonMaterialRef.current.needsUpdate = true;
			window.dispatchEvent(
				new CustomEvent("themeChange", {
					detail: { theme: darkMode ? "dark" : "light" },
				})
			);
		};

		const onScroll = () => {
			const maxScroll = document.body.scrollHeight - window.innerHeight;
			currentScroll = window.scrollY / Math.max(1, maxScroll);
		};

		const onResize = () => {
			const desktop = getIsDesktop();
			isDesktopRef.current = desktop;
			setIsDesktop(desktop);
			if (!desktop) {
				setTerminalActive(false);
			}
			mount.style.display = desktop ? "block" : "none";
			renderer.domElement.style.display = desktop ? "block" : "none";
			if (moonRef.current) {
				moonRef.current.visible = darkModeRef.current && desktop;
			}
			if (moonGroupRef.current) {
				moonGroupRef.current.visible = desktop;
			}

			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		};

		const enterTerminalMode = () => {
			if (!isDesktopRef.current) return;
			if (!moonMaterialRef.current || !darkModeRef.current) return;
			moonMaterialRef.current.wireframe = true;
			moonMaterialRef.current.emissive.setHex(0x00ffff);
			moonMaterialRef.current.emissiveIntensity = 2;
			rotationSpeedRef.current = 0.0005;
			setTerminalActive(true);
		};

		const exitTerminalMode = () => {
			if (!moonMaterialRef.current) return;
			moonMaterialRef.current.wireframe = false;
			moonMaterialRef.current.emissive.setHex(0x000000);
			moonMaterialRef.current.emissiveIntensity = 0;
			rotationSpeedRef.current = 0.002;
			setTerminalActive(false);
		};

		const raycaster = new THREE.Raycaster();
		const mouse = new THREE.Vector2();
		const onClick = (event) => {
			if (!isDesktopRef.current) return;
			if (
				event.target instanceof Element &&
				event.target.closest("#terminal-overlay")
			) {
				return;
			}

			if (terminalActiveRef.current) {
				exitTerminalMode();
				return;
			}

			if (!moonRef.current || !darkModeRef.current) return;
			mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
			raycaster.setFromCamera(mouse, camera);
			const intersects = raycaster.intersectObject(moonRef.current);
			if (intersects.length === 0) return;
			enterTerminalMode();
		};

		const updatePortfolioMoon = () => {
			smoothScroll += (currentScroll - smoothScroll) * 0.05;

			const x = THREE.MathUtils.lerp(
				escapeSettings.startX,
				escapeSettings.exitX,
				smoothScroll
			);
			const y = THREE.MathUtils.lerp(
				escapeSettings.startY,
				escapeSettings.exitY,
				smoothScroll
			);
			const z = THREE.MathUtils.lerp(
				escapeSettings.startZ,
				escapeSettings.exitZ,
				smoothScroll
			);

			const scaleEase = Math.pow(1 - smoothScroll, 1.5);
			const finalScale = Math.max(
				escapeSettings.endScale,
				escapeSettings.startScale * scaleEase
			);

			moonGroup.position.set(x, y, z);
			moonGroup.scale.set(finalScale, finalScale, finalScale);

			moon.rotation.y += rotationSpeedRef.current * (1 - smoothScroll * 0.7);
			moon.rotation.x += 0.0001;
			moonMaterial.opacity = darkModeRef.current ? 1 - smoothScroll : 0;

			renderer.render(scene, camera);
			frameId = window.requestAnimationFrame(updatePortfolioMoon);
		};

		onScroll();
		onResize();
		applyThemeToMoon(isDark);
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onResize);
		window.addEventListener("click", onClick);
		frameId = window.requestAnimationFrame(updatePortfolioMoon);

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onResize);
			window.removeEventListener("click", onClick);
			window.cancelAnimationFrame(frameId);

			moonGeometry.dispose();
			moonMaterial.dispose();
			moonTexture.dispose();
			sunTexture.dispose();
			displacementMap.dispose();
			bumpMap.dispose();
			renderer.dispose();

			if (mount.contains(renderer.domElement)) {
				mount.removeChild(renderer.domElement);
			}
		};
	}, []);

	useEffect(() => {
		if (!moonMaterialRef.current || !mainLightRef.current || !moonRef.current)
			return;

		darkModeRef.current = isDark;
		moonRef.current.visible = isDark && isDesktop;
		if (moonGroupRef.current) {
			moonGroupRef.current.visible = isDesktop;
		}

		if (isDark) {
			moonMaterialRef.current.map = moonTextureRef.current;
			if (!terminalActive) {
				moonMaterialRef.current.wireframe = false;
				moonMaterialRef.current.emissive.setHex(0x000000);
				moonMaterialRef.current.emissiveIntensity = 0;
				rotationSpeedRef.current = 0.002;
			}
			moonMaterialRef.current.opacity = 1;
			mainLightRef.current.intensity = 1.2;
			document.body.classList.remove("light-theme");
			document.body.classList.add("dark-theme");
		} else {
			moonMaterialRef.current.map = sunTextureRef.current;
			moonMaterialRef.current.wireframe = false;
			moonMaterialRef.current.emissive.setHex(0xffaa00);
			moonMaterialRef.current.emissiveIntensity = 1.1;
			moonMaterialRef.current.opacity = 0;
			setTerminalActive(false);
			rotationSpeedRef.current = 0.002;
			mainLightRef.current.intensity = 2.5;
			document.body.classList.remove("dark-theme");
			document.body.classList.add("light-theme");
		}

		moonMaterialRef.current.needsUpdate = true;
		window.dispatchEvent(
			new CustomEvent("themeChange", {
				detail: { theme: isDark ? "dark" : "light" },
			})
		);
	}, [isDark, terminalActive]);

	useEffect(() => {
		if (!isDesktop) {
			setTerminalActive(false);
			return;
		}
		if (!terminalActive) return;
		window.requestAnimationFrame(() => {
			terminalInputRef.current?.focus();
		});
	}, [terminalActive, isDesktop]);

	return (
		<>
			<div
				ref={mountRef}
				style={{
					position: "fixed",
					inset: 0,
					zIndex: -1,
					pointerEvents: "none",
					display: isDesktop ? "block" : "none",
				}}
			/>
			<div
				id="terminal-overlay"
				className={terminalActive && isDesktop ? "active" : ""}
				style={{ display: isDesktop ? "grid" : "none" }}
			>
				<div className="terminal-title">HOLOGRAPHIC TERMINAL // DATA CORE</div>
				<div className="terminal-history custom-scrollbar">
					{history.map((line, index) => (
						<div key={`${line}-${index}`} className="terminal-line">
							{line}
						</div>
					))}
				</div>
				<div className="terminal-input-row">
					<span className="terminal-prompt">$</span>
					<input
						id="terminal-input"
						ref={terminalInputRef}
						type="text"
						autoComplete="off"
						spellCheck={false}
						onKeyDown={handleTerminalKeyDown}
						placeholder="Type a command..."
					/>
				</div>
			</div>
		</>
	);
};

export default MoonOrbitScene;

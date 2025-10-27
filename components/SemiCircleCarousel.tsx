'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface CarouselImage {
	id: number
	image: string
	alt: string
}

interface SemiCircleCarouselProps {
	images: CarouselImage[]
	speed?: number
	gap?: number
	curve?: number
	reverse?: boolean
}

export function SemiCircleCarousel({ 
	images, 
	speed = 30,
	gap = 10,
	curve = 12,
	reverse = false
}: SemiCircleCarouselProps) {
	const containerRef = useRef<HTMLDivElement>(null)
	const sceneRef = useRef<THREE.Scene | null>(null)
	const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
	const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
	const planesRef = useRef<THREE.Mesh[]>([])
	const timeRef = useRef(0)
	const animationFrameRef = useRef<number>()
	const previousTimeRef = useRef(0)

	const direction = reverse ? 1 : -1

	// Helper function to get plane width
	const getWidth = (gapPercent: number) => 1 + gapPercent / 100

	const getPlaneWidth = (
		containerWidth: number,
		containerHeight: number,
		camera: THREE.PerspectiveCamera
	) => {
		const vFov = (camera.fov * Math.PI) / 180
		const height = 2 * Math.tan(vFov / 2) * camera.position.z
		const aspect = containerWidth / containerHeight
		const width = height * aspect
		return containerWidth / width
	}

	useEffect(() => {
		if (!containerRef.current) return

		const container = containerRef.current
		const width = container.clientWidth
		const height = container.clientHeight

		// Initialize Three.js scene
		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 20)
		camera.position.z = 2

		const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
		renderer.setSize(width, height)
		renderer.setPixelRatio(window.devicePixelRatio)

		container.appendChild(renderer.domElement)

		sceneRef.current = scene
		cameraRef.current = camera
		rendererRef.current = renderer

		// Create plane geometry with 16:9 aspect ratio (1920x1080)
		// Use 1.0 width and 0.5625 height (9/16 = 0.5625) to maintain aspect ratio
		const aspectRatio = 9 / 16 // Height/Width for landscape 16:9
		const geometry = new THREE.PlaneGeometry(1, aspectRatio, 20, 20)
		const planeSpace = getPlaneWidth(width, height, camera) * getWidth(gap)
		const totalImages = Math.ceil(width / planeSpace) + 1 + images.length
		const initialOffset = Math.ceil(width / (2 * planeSpace) - 0.5)

		// Create extended image array for infinite loop
		const allImages = [...images]
		for (let i = images.length; i < totalImages; i++) {
			allImages.push(images[i % images.length])
		}

		const planes: THREE.Mesh[] = []

		// Load textures and create planes
		allImages.forEach((image, i) => {
			const loader = new THREE.TextureLoader()
			loader.load(image.image, (texture: THREE.Texture) => {
				// Custom shader material for curved effect
				const material = new THREE.ShaderMaterial({
					uniforms: {
						tex: { value: texture },
						curve: { value: curve }
					},
					vertexShader: `
						uniform float curve;
						varying vec2 vertexUV;
						void main(){
							vertexUV = uv;
							vec3 newPosition = position;
							float distanceFromCenter = abs(modelMatrix*vec4(position, 1.0)).x;
							// Reduce vertical compression on edges by reducing the curve effect
							newPosition.y *= 1.0 + (curve/150.0)*pow(distanceFromCenter,2.0);
							
							gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
						}
					`,
					fragmentShader: `
						uniform sampler2D tex;
						varying vec2 vertexUV;
						void main(){
							gl_FragColor = texture2D(tex, vertexUV);
						}
					`
				})

				const plane = new THREE.Mesh(geometry, material)
				plane.position.x = -1 * direction * (i - initialOffset) * getWidth(gap)
				scene.add(plane)
				planes[i] = plane
			})
		})

		planesRef.current = planes

		// Animation loop
		const animate = (currentTime: number) => {
			const timePassed = currentTime - previousTimeRef.current

			if (Math.abs(scene.position.x) >= getWidth(gap) * images.length) {
				timeRef.current = 0
			}

			timeRef.current += direction * timePassed * 0.00001
			scene.position.x = timeRef.current * speed

			renderer.render(scene, camera)
			previousTimeRef.current = currentTime
			animationFrameRef.current = requestAnimationFrame(animate)
		}

		animationFrameRef.current = requestAnimationFrame(animate)

		// Handle resize
		const handleResize = () => {
			if (!containerRef.current || !cameraRef.current || !rendererRef.current) return

			const newWidth = containerRef.current.clientWidth
			const newHeight = containerRef.current.clientHeight

			cameraRef.current.aspect = newWidth / newHeight
			cameraRef.current.updateProjectionMatrix()
			rendererRef.current.setSize(newWidth, newHeight)
		}

		window.addEventListener('resize', handleResize)

		// Cleanup
		return () => {
			window.removeEventListener('resize', handleResize)
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current)
			}
			if (rendererRef.current && containerRef.current) {
				containerRef.current.removeChild(rendererRef.current.domElement)
			}
			planesRef.current.forEach(plane => {
				if (plane.geometry) plane.geometry.dispose()
				if (plane.material) {
					if (Array.isArray(plane.material)) {
						plane.material.forEach((mat: THREE.Material) => mat.dispose())
					} else {
						plane.material.dispose()
					}
				}
			})
			if (rendererRef.current) {
				rendererRef.current.dispose()
			}
		}
	}, [images, speed, gap, curve, direction])

	return (
		<div 
			ref={containerRef} 
			className="relative w-full h-[500px] overflow-hidden"
			style={{ minHeight: '500px' }}
		/>
	)
}

// Demo component for easy use
export function SemiCircleCarouselDemo() {
	const sampleImages: CarouselImage[] = [
		{ id: 1, image: '/segment1.png', alt: 'Travel moment 1' },
		{ id: 2, image: '/segment2.png', alt: 'Travel moment 2' },
		{ id: 3, image: '/segment3.png', alt: 'Travel moment 3' },
		{ id: 4, image: '/segment4.png', alt: 'Travel moment 4' },
		{ id: 5, image: '/segment5.png', alt: 'Travel moment 5' },
		{ id: 6, image: '/segment6.png', alt: 'Travel moment 6' },
        { id: 7, image: '/segment7.png', alt: 'Travel moment 7' },
        { id: 8, image: '/segment8.png', alt: 'Travel moment 8' },
        { id: 9, image: '/segment9.png', alt: 'Travel moment 9' },
        { id: 10, image: '/segment10.png', alt: 'Travel moment 10' },
        { id: 11, image: '/segment11.png', alt: 'Travel moment 11' },
        { id: 12, image: '/segment12.png', alt: 'Travel moment 12' },
        { id: 13, image: '/segment13.png', alt: 'Travel moment 13' },
        { id: 14, image: '/segment14.png', alt: 'Travel moment 14' },
        { id: 15, image: '/segment15.png', alt: 'Travel moment 15' },
        { id: 16, image: '/segment16.png', alt: 'Travel moment 16' }
	]

	return <SemiCircleCarousel images={sampleImages} speed={30} />
}

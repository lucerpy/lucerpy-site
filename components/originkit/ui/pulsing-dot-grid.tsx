"use client"

import { useEffect, useRef } from "react"

export interface SlowPulsingDotProps {
    speed?: number
    gap?: number
    dotSize?: number
    dotColor?: string
    backgroundColor?: string
    pulseIntensity?: number
    radialWave?: boolean
    style?: React.CSSProperties
}

export default function SlowPulsingDot(props: SlowPulsingDotProps) {
    const {
        speed = 3,
        gap = 36,
        dotSize = 6,
        dotColor = "#e8ecf1",
        backgroundColor = "#05070a",
        pulseIntensity = 1,
        radialWave = true,
        style,
    } = props

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const rafRef = useRef(0)
    const sizeRef = useRef({ width: 0, height: 0, dpr: 1 })

    useEffect(() => {
        const canvas = canvasRef.current
        const container = containerRef.current
        if (!canvas || !container) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const resize = () => {
            const rect = container.getBoundingClientRect()
            // Capped at 1 (no retina supersampling) - ambient background,
            // not detail-critical, and this alone cuts fill work up to 4x
            // on high-DPI screens.
            const dpr = Math.min(window.devicePixelRatio || 1, 1)
            const width = Math.max(1, Math.round(rect.width))
            const height = Math.max(1, Math.round(rect.height))
            canvas.width = width * dpr
            canvas.height = height * dpr
            canvas.style.width = width + "px"
            canvas.style.height = height + "px"
            sizeRef.current = { width, height, dpr }
        }

        resize()
        const observer = new ResizeObserver(resize)
        observer.observe(container)

        const start = performance.now()
        const maxRadius = Math.max(1, dotSize)
        const minRadius = maxRadius * (1 - Math.min(Math.max(pulseIntensity, 0), 1))
        const spacing = Math.max(4, gap)

        // Slow pulsing dots don't need 60fps - throttling to ~24fps roughly
        // halves (or more, on high-refresh displays) the per-second cost of
        // redrawing the whole grid, with no visible difference for this
        // motion.
        const frameInterval = 1000 / 24
        let lastFrameT = 0

        const draw = (now: number) => {
            if (now - lastFrameT < frameInterval) {
                rafRef.current = requestAnimationFrame(draw)
                return
            }
            lastFrameT = now

            const { width, height, dpr } = sizeRef.current
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            ctx.clearRect(0, 0, width, height)
            ctx.fillStyle = backgroundColor
            ctx.fillRect(0, 0, width, height)

            const t = ((now - start) / 1000) * speed
            const cols = Math.ceil(width / spacing) + 1
            const rows = Math.ceil(height / spacing) + 1
            const offsetX = (width - (cols - 1) * spacing) / 2
            const offsetY = (height - (rows - 1) * spacing) / 2
            const cx = width / 2
            const cy = height / 2
            const maxDist = Math.sqrt(cx * cx + cy * cy) || 1

            ctx.fillStyle = dotColor

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const x = offsetX + col * spacing
                    const y = offsetY + row * spacing

                    let phase = 0
                    if (radialWave) {
                        const dx = x - cx
                        const dy = y - cy
                        const dist = Math.sqrt(dx * dx + dy * dy) / maxDist
                        phase = dist * Math.PI * 2.2
                    }

                    const wave = (Math.sin(t - phase) + 1) / 2
                    const radius = minRadius + (maxRadius - minRadius) * wave
                    const alpha = 0.25 + 0.75 * wave

                    if (radius <= 0.05) continue

                    ctx.globalAlpha = alpha
                    ctx.beginPath()
                    ctx.arc(x, y, radius, 0, Math.PI * 2)
                    ctx.fill()
                }
            }

            ctx.globalAlpha = 1
            rafRef.current = requestAnimationFrame(draw)
        }

        // Pauses the loop entirely when the tab isn't visible - no reason to
        // keep drawing frames nobody can see.
        const onVisibilityChange = () => {
            if (document.hidden) {
                cancelAnimationFrame(rafRef.current)
            } else {
                lastFrameT = 0
                rafRef.current = requestAnimationFrame(draw)
            }
        }
        document.addEventListener("visibilitychange", onVisibilityChange)

        if (!document.hidden) {
            rafRef.current = requestAnimationFrame(draw)
        }

        return () => {
            cancelAnimationFrame(rafRef.current)
            observer.disconnect()
            document.removeEventListener("visibilitychange", onVisibilityChange)
        }
    }, [speed, gap, dotSize, dotColor, backgroundColor, pulseIntensity, radialWave])

    return (
        <div
            ref={containerRef}
            style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                backgroundColor,
                ...style,
            }}
        >
            <canvas ref={canvasRef} style={{ display: "block" }} />
        </div>
    )
}
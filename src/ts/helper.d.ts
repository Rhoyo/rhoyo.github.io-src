
declare module '../js/waveHelper' {
    export function createWave(radiusTop: number, radiusBottom: number, radiusX: number, radiusY: number, height: number, radialSegments: number, heightSegments: number, thetaStart: number, thetaLength: number): THREE.Mesh;
    export function createParticles(): ThisParameterType.Mesh;
}
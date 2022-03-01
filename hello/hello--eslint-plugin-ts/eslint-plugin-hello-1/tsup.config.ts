import type { Options } from 'tsup'
export const tsup: Options = {
    splitting: false,
    sourcemap: false,
    clean: false,
    entryPoints: ['src/index.ts'],
    watch: true,
    outDir: './dist'
}

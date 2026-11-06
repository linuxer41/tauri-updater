import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  // dts desactivado: src/ tiene errores de tipos propios de upstream (Headers en
  // download-manager.ts, entre otros) que rompen el build. El consumidor aporta sus tipos.
  dts: false,
  clean: true,
  platform: 'browser',
});

// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///Users/jab_macmini/Documents/code/versioned/ts-lib/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/jab_macmini/Documents/code/versioned/ts-lib/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/jab_macmini/Documents/code/versioned/ts-lib";
var vite_config_default = defineConfig({
  plugins: [
    dts({
      // This ensures that type declarations are generated properly
      outDir: "dist/types",
      insertTypesEntry: true
      // Adds a "types" entry point in package.json automatically
    })
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/component.ts"),
      name: "PpabTsLibrary",
      // Generate file names based on the format
      fileName: (format) => `ppab-ts-lib.${format}.js`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      // Externalize dependencies to reduce bundle size
      external: ["react", "react-dom"],
      // Add external dependencies if needed
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamFiX21hY21pbmkvRG9jdW1lbnRzL2NvZGUvdmVyc2lvbmVkL3RzLWxpYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2phYl9tYWNtaW5pL0RvY3VtZW50cy9jb2RlL3ZlcnNpb25lZC90cy1saWIvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2phYl9tYWNtaW5pL0RvY3VtZW50cy9jb2RlL3ZlcnNpb25lZC90cy1saWIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIGR0cyh7XG4gICAgICAgICAgICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB0eXBlIGRlY2xhcmF0aW9ucyBhcmUgZ2VuZXJhdGVkIHByb3Blcmx5XG4gICAgICAgICAgICBvdXREaXI6ICdkaXN0L3R5cGVzJyxcbiAgICAgICAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsIC8vIEFkZHMgYSBcInR5cGVzXCIgZW50cnkgcG9pbnQgaW4gcGFja2FnZS5qc29uIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBidWlsZDoge1xuICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLFxuICAgICAgICAgICAgbmFtZTogJ1BwYWJUc0xpYnJhcnknLFxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgZmlsZSBuYW1lcyBiYXNlZCBvbiB0aGUgZm9ybWF0XG4gICAgICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYHBwYWItdHMtbGliLiR7Zm9ybWF0fS5qc2AsXG4gICAgICAgICAgICBmb3JtYXRzOiBbJ2VzJywgJ2NqcyddLFxuICAgICAgICB9LFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICAvLyBFeHRlcm5hbGl6ZSBkZXBlbmRlbmNpZXMgdG8gcmVkdWNlIGJ1bmRsZSBzaXplXG4gICAgICAgICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nXSwgIC8vIEFkZCBleHRlcm5hbCBkZXBlbmRlbmNpZXMgaWYgbmVlZGVkXG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAgICAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdVLFNBQVMsZUFBZTtBQUNoVyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFGaEIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsSUFBSTtBQUFBO0FBQUEsTUFFQSxRQUFRO0FBQUEsTUFDUixrQkFBa0I7QUFBQTtBQUFBLElBQ3RCLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSCxLQUFLO0FBQUEsTUFDRCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3hDLE1BQU07QUFBQTtBQUFBLE1BRU4sVUFBVSxDQUFDLFdBQVcsZUFBZSxNQUFNO0FBQUEsTUFDM0MsU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLElBQ3pCO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQSxNQUVYLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQTtBQUFBLE1BQy9CLFFBQVE7QUFBQSxRQUNKLFNBQVM7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNqQjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

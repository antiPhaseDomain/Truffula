//     <script src="https://unpkg.com/swagger-ui-dist@3.19.2/swagger-ui-bundle.js"> </script>
//     <script src="https://unpkg.com/swagger-ui-dist@3.19.2/swagger-ui-standalone-preset.js"> </script>

window.onload = function() {

  // Build a system
  const ui = SwaggerUIBundle({
    url: "https://petstore.swagger.io/v2/swagger.json",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  })

  window.ui = ui
}
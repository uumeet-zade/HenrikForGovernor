def generate_svg():
    svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <!-- Offset Shadow -->
  <rect x="15" y="15" width="100" height="100" fill="#E60000" />
  
  <!-- Main White Block -->
  <rect x="5" y="5" width="100" height="100" fill="#FFFFFF" stroke="#000000" stroke-width="8" stroke-linejoin="miter" />
  
  <!-- H -->
  <!-- Left stem -->
  <rect x="22" y="32" width="12" height="46" fill="#000000" />
  <!-- Right stem -->
  <rect x="46" y="32" width="12" height="46" fill="#000000" />
  <!-- Crossbar -->
  <rect x="22" y="49" width="36" height="12" fill="#000000" />
  
  <!-- V -->
  <!-- Left slant -->
  <polygon points="56,32 69,32 79,64 89,32 102,32 79,78" fill="#000000" />
</svg>"""
    with open("assets/images/favicon.svg", "w") as f:
        f.write(svg)

generate_svg()

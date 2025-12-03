# 🚀 Deployment Guide

## GitHub Pages Setup

### Configuración Automática
El sitio se despliega automáticamente usando GitHub Actions cuando se hace push a la rama `main`.

### URL del Sitio
- **Producción**: https://aariverar.github.io/curso_innovacion_grupo1/
- **Repositorio**: https://github.com/aariverar/curso_innovacion_grupo1

### Workflow de Deployment

El archivo `.github/workflows/deploy.yml` configura:

1. **Trigger**: Push a la rama `main`
2. **Build**: Preparación de archivos estáticos
3. **Deploy**: Publicación en GitHub Pages

### Verificación del Deploy

```bash
# Ver status del último deploy
git log --oneline -1

# Verificar workflows en GitHub
# Ir a: https://github.com/aariverar/curso_innovacion_grupo1/actions
```

### Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/aariverar/curso_innovacion_grupo1.git

# Entrar al directorio
cd curso_innovacion_grupo1

# Abrir en navegador
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux
```

### Actualizar el Sitio

```bash
# Hacer cambios en los archivos
# Luego:
git add .
git commit -m "📝 Descripción de cambios"
git push origin main

# El sitio se actualiza automáticamente en ~2 minutos
```

## Características del Deployment

- ✅ **Deploy Automático**: Cada push a main
- ✅ **HTTPS**: Certificado SSL automático
- ✅ **CDN Global**: Distribución mundial
- ✅ **Cache Optimizado**: Carga rápida
- ✅ **Mobile Friendly**: Optimizado para móviles

## Monitoreo

- **GitHub Actions**: Logs de deployment
- **GitHub Pages**: Status del sitio
- **Issues**: Reportar problemas

---

**Sitio desplegado exitosamente** ✨
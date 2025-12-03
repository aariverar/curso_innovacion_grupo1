# ⚙️ Configuración de GitHub Pages

## Pasos para habilitar GitHub Pages

### 1. Acceder a la configuración del repositorio
- Ve a: https://github.com/aariverar/curso_innovacion_grupo1
- Clic en **Settings** (en la barra superior del repositorio)

### 2. Navegar a Pages
- En el menú lateral izquierdo, busca **Pages**
- Clic en **Pages**

### 3. Configurar la fuente
- En la sección **Source**:
  - Selecciona **GitHub Actions** (NO selecciones "Deploy from a branch")
  - Esto habilitará el deployment automático con Actions

### 4. Verificar la configuración
- Después de guardar, verás un mensaje como:
  ```
  ✅ Your site is ready to be published at https://aariverar.github.io/curso_innovacion_grupo1/
  ```

### 5. Activar el deployment
- Ve a la pestaña **Actions** del repositorio
- Verás el workflow "Deploy static content to Pages"
- Si no se ejecuta automáticamente, clic en **Run workflow**

## URLs importantes

- **Repositorio**: https://github.com/aariverar/curso_innovacion_grupo1
- **Settings**: https://github.com/aariverar/curso_innovacion_grupo1/settings
- **Pages Config**: https://github.com/aariverar/curso_innovacion_grupo1/settings/pages
- **Actions**: https://github.com/aariverar/curso_innovacion_grupo1/actions

## Solución de problemas

### Si el workflow falla:
1. Verifica que Pages esté configurado con "GitHub Actions"
2. Ve a Actions y revisa los logs del workflow
3. Asegúrate de que el repositorio sea público o tengas GitHub Pro

### Si el sitio no carga:
1. Espera 2-3 minutos después del deployment
2. Verifica la URL: https://aariverar.github.io/curso_innovacion_grupo1/
3. Limpia la caché del navegador (Ctrl+F5)

## Estado del deployment

Una vez configurado correctamente:
- ✅ Deployment automático en cada push a `main`
- ✅ URL disponible en ~2 minutos
- ✅ HTTPS habilitado automáticamente
- ✅ CDN global para carga rápida

---

**Una vez configurado, el sitio estará disponible en:**
## 🌐 https://aariverar.github.io/curso_innovacion_grupo1/
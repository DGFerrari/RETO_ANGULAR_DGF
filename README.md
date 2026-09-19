# 🅰️ Angular Entornos Cliente — Curso 0612

Repositorio del curso para el módulo **0612 Desarrollo web en entorno cliente** (DAW2).

---

## 📋 Cómo usar este repositorio

### 1. Haz un fork de este repositorio

Ve a la esquina superior derecha y haz clic en **Fork**. Trabaja siempre en **tu fork**, nunca en este repositorio.

### 2. Clona tu fork en local

```bash
git clone https://github.com/EL-TEU-USUARI/AngularEntornsCurs.git
cd AngularEntornsCurs
npm install
ng serve
```

### 3. Consulta las ramas de livecoding

Cada sesión tiene una rama con el código realizado en directo en clase:

| Rama | Contenido |
|--------|-----------|
| `lc/01-entorn-cli` | ng new, estructura de archivos |
| `lc/02-typescript-base` | Tipos, interfaces, clases |
| `lc/03-components` | Crear y usar componentes |
| `lc/04-interpolacio-dades` | Mostrar datos del TS en el HTML |
| `lc/05-control-flow-for` | @for i track |
| `lc/06-control-flow-if` | @if i @else |
| `lc/07-property-binding` | [ ] Property Binding |
| `lc/08-event-binding` | ( ) Event Binding |
| `lc/09-inputs-outputs` | input<>() i output<>() |
| `lc/10-routes` | Routing básico |
| `lc/11-routes-dinamiques` | Parámetros de ruta + ngClass |
| `lc/12-reactive-forms` | FormGroup y FormControl |
| `lc/13-validadors` | Validadores + mensajes de error |
| `lc/14-services` | Servicios + inject() |
| `lc/15-http-client` | HttpClient + observables |
| `lc/16-rxjs-behaviorsubject` | BehaviorSubject + estado compartido |
| `lc/17-jwt-guards` | JWT + HttpInterceptor + AuthGuard |

> Si te atascas en un reto, consulta la rama de la sesión correspondiente.

### 4. Entrega cada reto mediante un Pull Request

1. Haz los cambios en tu fork (`main` o una rama propia)
2. Haz commit: `git commit -m "repte-s03: TarjetaComponent creat"`
3. Abre un **Pull Request** en tu fork (base: `main`)
4. Indica en la descripción del PR: **qué has hecho** y **dónde has tenido dudas**

---

## 🗂️ Estructura del proyecto

```
src/
  app/
    components/       ← tus componentes
    services/         ← tus servicios (a partir de AEA2)
    interfaces/       ← interfaces TypeScript
    pages/            ← páginas/vistas (a partir de las rutas)
  assets/
```

---

## 📅 Planificación resumida

| AEA | Horas | Contenidos principales | Instrumento |
|-----|-------|-----------------------|------------|
| AEA1 | 30h | Angular CLI, TypeScript base, Components, @for/@if, Bindings, Events, Input/Output | Pt1 + Pv1 |
| AEA2 | 25h | Routes, Reactive Forms, Services, HttpClient, RxJS, JWT + Guards | Pt2 + Pv2 |
| AEA3 | 44h | Reto (niveles 1–5): aplicación completa con Laravel + Angular + Docker | Pt3/Rt + Pv3 |

---

## 📚 Recursos de referencia

- [Repositorio de ejemplos de Angular](https://github.com/fmartinez-dev-learn/AngularSamples) — ejemplos por tema, para consultar
- [Documentación oficial de Angular](https://angular.dev)

---

## ⚙️ Versions

- **Node.js**: 20.x
- **Angular CLI**: última versión estable (`npm install -g @angular/cli`)

---

## ✅ GitHub Actions — comprobación automática

Cada vez que haces `push`, se ejecuta automáticamente `ng build`.
Verás ✅ o ❌ en la pestaña **Actions** de tu fork.
Si aparece ❌, revisa el registro de errores.

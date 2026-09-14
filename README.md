This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Panel de administración (`/admin`)

El contenido del sitio (experiencia, proyectos, stack, etc.) se guarda en Firestore y se edita desde `/admin`, protegido con Firebase Auth. Si Firestore no tiene datos todavía, el sitio usa los valores por defecto de `src/data/profile.ts`.

### Variables de entorno requeridas (`.env.local`)

```
# Config pública del cliente (Firebase Console > Configuración del proyecto > Tus apps > Web)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=

# Cuenta de servicio (Firebase Console > Configuración del proyecto > Cuentas de servicio > Generar nueva clave privada)
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=

# Bucket de Storage (Firebase Console > Storage)
FIREBASE_STORAGE_BUCKET=

# Único email autorizado a entrar a /admin
ADMIN_EMAIL=
```

Las mismas variables deben cargarse en Vercel (Project Settings → Environment Variables) para producción. `FIREBASE_PRIVATE_KEY` debe pegarse con los `\n` literales tal cual vienen en el JSON descargado (el código los convierte a saltos de línea reales).

### Setup en Firebase (una sola vez)

1. Crear un proyecto en [console.firebase.google.com](https://console.firebase.google.com).
2. **Authentication** → Sign-in method → habilitar "Correo electrónico/contraseña" → crear un único usuario con tu email (`ADMIN_EMAIL`).
3. **Firestore Database** → crear base de datos (modo producción; el servidor accede vía Admin SDK, así que las reglas pueden quedar cerradas a todo el mundo por defecto).
4. **Storage** → habilitar (se usa para las imágenes de proyectos).
5. **Configuración del proyecto** → "Tus apps" → agregar una app Web → copiar `apiKey`, `authDomain` y `projectId` a las variables `NEXT_PUBLIC_*`.
6. **Configuración del proyecto** → "Cuentas de servicio" → "Generar nueva clave privada" → del JSON descargado, copiar `project_id`, `client_email` y `private_key` a las variables correspondientes.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
